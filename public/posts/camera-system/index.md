
Intro: Lady Umbrella (game context + team context) + Camera

- Unreal Engine 5
- Component Attachable to player class

# Camera System Overview

- Nested components
  - Spring Arm
  - Camera
- Functionalities  
  - Collision Detection
  - Camera Context Shakes
  - Camera States
  - Camera Contextual Control
  - Design Focus Customizations (as requested)

> 🚨 **Important**
>
> This is the implementation I landed on given the time
> constraints and context attached to Lady Umbrella's
> development. With this I mean to say this may not be the
> best approach, but what worked for me.

## Ticking with the Player

```cpp
void UCustomCameraSystemComponent::CameraTick(const float& DeltaSeconds)
{
  if (IsValid(CameraBoom) && IsValid(FollowCamera))
  {
    UpdateForCameraState(DeltaSeconds);
    if (bCameraIsResetting)
    {
      ResetCamProgress(GetWorld()->GetDeltaSeconds());
    }
    ManageCameraCollisions();
    UpdateCameraPosition(DeltaSeconds);
  }
}
```

This shows the order in which everything that is _"real time"_ or rather frame-based, is handled. Anything automatic is related somehow to one of the functions within `CameraTick`. Since there is a heavy reliance on interpolation, the order in which each task is handled is really important.

|                            |
|:--------------------------:|
| ![Camera diagram]()        |
| Diagram for camera checks. |

As you can see in the diagram, if the camera checked for collisions before updating the interpolating position, we might find that, after interpolating, the camera runs into a wall but the collision adjustment isn't made until the next frame or, even worse, we start a loop of correcting according to collisions one frame and interpolating back the next.

The same thing happens when we are resetting the camera, which is why **we leave the collision management for last and only once we have a definitive position do we actually adjust the camera**.

> 📝 **Note**
>
> I use easing functions to interpolate the camera's
> position. However, since they are their own topic, I won't
> be getting much into them, so I recommend you check out
> [easing.net](https://easings.net/) if you are curious.

# Camera State

The camera system is based on a map of `FCameraState`s that holds the configuration for how the camera should react and adjust for every different context. The states for the camera are:

|State|Description|
|:--|:--|
| `DEFAULT` | Regular 3rd person camera. |
| `LOOKAT`* | When a context action is triggered, takes over the camera to look at a relevant context-predetermined location. |
| `COVER`* | This is handled on the [cover system by Pablo Granado](https://github.com/Veguista/LadyUmbrella-CoverSystem). There is an initial approach implemented on the camera system which is what we will talk about. |
| `AIM` | While the player is aiming to shoot, the camera moves to their shoulder to ease aiming and shooting. |
| `SHIELD` | When the umbrella is open positions itself to give a clearer view through the shield. |

_* Requires another actor or component to work (other than the player)._

Now, what does one of this states control? Well, here are the variables:

| Variable | Type | Usage | Notes |
|:---------|:----:|:-----:|:------|
|`bFocusDistanceDynamic`|`bool`| Camera view. | Dynamically change camera's focus depending on what the player is aiming at. |
|`bUseFoVForLOD`|`bool`| Camera view. |  |
|`DesiredScreenRatio`|`FVector2`| Finding target position. | Position in the screen in which the head of the player — or wherever the camera is attached to — should be. |
|`bScreenRatioMirrored`|`bool`| Finding target position. | Uses mirror of `DesiredScreenRatio` instead — for example, to change the camera shoulder. |
|`Distance`|`float`| Finding target position. | Distance between the camera and the attachment location. |
|`AttachmentLocation`|`enum`| Finding target position. | Either be the top of the capsule, the top of the mesh or the weapon muzzle. |
|`WallHitThreshold`|`float`| Compute collisions. ||
|`SideHitThreshold`|`float`| Compute collisions. ||
|`BottomHitThreshold`|`float`| Compute collisions. ||
|`InterpolationType`|`enum`| Handling movement. | Linear interpolation, regular easing, elastic easing — both with in, out and in-out — or `CUSTOM` if we want to use `BezierPoints`. |
|`EaseExponent`|`float`| Handling movement. | In case we are using easing, what power we use. |
|`BezierPoints`|`FVector4`| Handling movement. | Values to create a curve, similar to how it is done for CSS. |
|`InterpolationSpeed`|`float`| Handling movement. ||
|`bAfterCollisionDelay`|`bool`| Handling movement. ||
|`DelaySeconds`|`float`| Handling movement. ||
|`bCameraLag`|`bool`| Handling movement. | Wether to use the built in lag in the camera boom or not. |

This seems like a whole lot — because it is — but I won't be going into it all at once. Let's try to focus instead on where each variable is used and how.

# Calculating the Target Location

- Offsets and so on

## Switching between Targets

# Letting the Player move the Camera

- Modifiers
- Ramp up movement

## Camera Multipliers

## Covers

## Assistance

| Related Variables          | Description               |
|:--------------------------:|:--------------------------|
| `CameraMoveAssistStrength` | |
| `YawAssistanceTimer`       | Internal countdown timer. |
| `YawAssistanceDelay`       | Maximum |

```cpp
void UCustomCameraSystemComponent::MoveAssistance(const FVector2D& MoveAxisVector, const bool bMoveControlledByCover) const
{
  if (CurrentInputSpeedState != ECameraInputSpeed::STATIC || GetCurrentCameraStateKey() != ECameraStateKey::DEFAULT)
  {
    return;
  }

  FVector2D NormalizedMovementVector = MoveAxisVector.GetSafeNormal();

  if (YawAssistanceTimer <= 0.f && !bMoveControlledByCover && IsValid(FGlobalPointers::MainController))
  {
    FGlobalPointers::MainController->AddYawInput(NormalizedMovementVector.X * CameraMoveAssistStrength);
  }
}
```

> 📝 **Note**
>
> The camera assistance can be toggle by setting  `bYawAssistance` — false by default.

## Resetting the Camera

| Related Variables    | Description               |
|:--------------------:|:--------------------------|
| `ResetStepSize`      ||
| `bCameraIsResetting` ||

```cpp
void UCustomCameraSystemComponent::ResetCameraPosition()
{
  if (IsValid(FGlobalPointers::MainController))
  {
    FGlobalPointers::MainController->DisableInput(FGlobalPointers::MainController);
    bCameraIsResetting = true;
  }
}
```

```cpp
void UCustomCameraSystemComponent::CameraTick(const float& DeltaSeconds)
{
  
  ...
  
  if (bCameraIsResetting)
  {
    ResetCamProgress(GetWorld()->GetDeltaSeconds());
  }

  ...

}
```

```cpp

void UCustomCameraSystemComponent::ResetCamProgress(const double& DeltaSeconds)
{
  if (!IsValid(FGlobalPointers::MainController))
  {
    return;
  }

  FRotator ControlRot = FGlobalPointers::MainController->GetControlRotation();
  FQuat ControlQuat = ControlRot.Quaternion();

  const float AngularDistance = FMath::RadiansToDegrees(UKismetMathLibrary::Quat_AngularDistance(ControlQuat, ControlQuat));
  const float AngularThreshold = 1.0f;

  if (AngularDistance > AngularThreshold)
  {
    FQuat InterpolatedQuat = FQuat::Slerp(ControlQuat, ControlQuat, DeltaSeconds * ResetStepSize);
        FGlobalPointers::MainController->SetControlRotation(InterpolatedQuat.Rotator());
  }
  else
  {
    FGlobalPointers::MainController->EnableInput(FGlobalPointers::MainController);
    bCameraIsResetting = false;
  }
}
```

# When the Camera hits something and viceversa

# Other Stuff

## Camera Shakes

| Shakes        | Where are they used?                      |
|:-------------:|:------------------------------------------|
| `RECOIL`        | Played on shoot. |
| `GADGET_RECOIL` | Played on hook use. |
| `DIAGONAL`      | Following the melee direction. |
| `IDLE`          | Natural camera bobbing. |
| `SWAY`          | While on a zipline. |
| `SWING`         | Player launches from a bar or rope. |
| `VIBRATION`     | Vibrating Sway. |
| `IMPACT`        | Receiving impacts on the shield or landing hits with gadgets. |
| `ENVIRONMENT`   | Explosions or other environment elements. |
| `UNKNOWN`       | Default, miscellaneous usage. |

Declaration of camera shake:

```cpp
// On the header file
TMap<EShakeSource, TSubclassOf<class UCameraShakeBase>> CameraShakes;
  
// On the class constructor
CameraShakes.Add(
  EShakeSource::RECOIL,
  AssetUtils::FindClass<ULegacyCameraShake>(TEXT("/Script/Engine.Blueprint'/Game/Blueprints/CameraShakes/BP_ShakePlayer.BP_ShakePlayer_C'")));
```

We use builtin `UGameplayStatics::PlayWorldCameraShake` to
create the shake effects. We wrap it in a function that can be called from outside the system with or without a source location.

```cpp
// On header file
void MakeCameraShake(
  const EShakeSource& Type, FVector Location = FVector(0.f, 0.f, 0.f), 
  float RadiusFrom = 0.f, float RadiusTo = 2500.f, bool bMirrored = false);

// On source file
void UCustomCameraSystemComponent::MakeCameraShake(
  const EShakeSource& Type, FVector Location, 
  float RadiusFrom, float RadiusTo, bool bMirrored)
{
  if(Location.IsNearlyZero())
  {
    Location = GetOwner()->GetActorLocation();
  }

  UGameplayStatics::PlayWorldCameraShake(
    GetWorld(),
    CameraShakes[Type],
    Location,
    RadiusFrom,
    RadiusTo,
    1.f,
    true);
}
```

## Focusing on a Landmark

| Related Variables | Description               |
|:-----------------:|:--------------------------|
| `LookAtTarget`    | . |

```cpp
void UCustomCameraSystemComponent::UpdateCameraPosition(const float& DeltaSeconds)
{

  ...

  if (GetCurrentCameraStateKey() == ECameraStateKey::LOOKAT)
  {
    if (!IsValid(FGlobalPointers::MainController))
    {
      return;
    }

    FVector DirectionToTarget = (LookAtTarget - GetCameraBoom()->GetComponentLocation()).GetSafeNormal();
    FQuat TargetQuat = DirectionToTarget.Rotation().Quaternion();
    FQuat ControlQuat = FGlobalPointers::MainController->GetControlRotation().Quaternion();

    const float AngularDistance = FMath::RadiansToDegrees(UKismetMathLibrary::Quat_AngularDistance(ControlQuat, TargetQuat));

    if (!FMath::IsNearlyZero(AngularDistance))
    {
      FQuat InterpolatedQuat = FQuat::Slerp(ControlQuat, TargetQuat, DeltaSeconds);
      FGlobalPointers::MainController->SetControlRotation(InterpolatedQuat.Rotator());
    }
  }

  ...

}
```

## View Frustum checkers

```cpp
bool UCustomCameraSystemComponent::IsOutsideFrustum(const AActor* Actor, const float Tolerance) const
{
  const APlayerCharacter* Player = Cast<APlayerCharacter>(UGameplayStatics::GetPlayerPawn(GetWorld(), 0));

  if (!IsValid(Player)) { return true; }

  const FVector Forward = GetFollowCamera()->GetForwardVector();
  const FVector Difference = (Actor->GetActorLocation() - GetFollowCamera()->GetComponentLocation()).GetSafeNormal();

  const float DotProduct = FVector::DotProduct(Forward, Difference);
  const float FrustumLimit = 1.0f - (Player->GetCameraSystemComponent()->GetFieldOfView() / 360.0f) - Tolerance;

  return (DotProduct < FrustumLimit);
}
```
