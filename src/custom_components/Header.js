import './Header.css';

import FuzzyText from '../react_bits_components/FuzzyText';
import GradientText from '../react_bits_components/GradientText';
import TextType from '../react_bits_components/TextType';

import LetterGlitch from '../react_bits_components/LetterGlitch';

import Separator from './Separator'

function Header({mobile=false}) {
  
  const headerNickSize  = ['8rem', '3.75rem']
  const headerNameSize  = ['5rem', '2rem']
  const headerJobSize   = ['2.5rem', '1.25rem']
  
  return(
    <section className="App-header">
      {/* Nick + Name */}
      <div className="Name_Nick-group">
        <FuzzyText
          fontSize={headerNickSize[Number(mobile)]}
          enableHover={false}
          baseIntensity='0.05'
        >
          PH0NSY
        </FuzzyText>
        <Separator margin={20} />
        <FuzzyText
          fontSize={headerNameSize[Number(mobile)]}
          enableHover={false}
          baseIntensity='0.05'
        >
          Alonso Moreno
        </FuzzyText>
        <Separator margin={10} />
        
        {/* Job */}
        <div style={{ fontSize: headerJobSize[Number(mobile)] }}> 
          <div className="Job-inline">
            <GradientText
              colors={["#ee0b5c", "#b736b5", "#ee0b5c", "#b736b5", "#ee0b5c"]}
              animationSpeed={3}
              showBorder={true}
            >
            <TextType
              className="Job-inline"
              text={["GAMEPLAY", "UI", "TOOLS", "FRONTEND", "SOLO"]}
              typingSpeed={100}
              pauseDuration={1000}
              showCursor={true}
              cursorCharacter=" "
            />
              DEVELOPER
            </GradientText>
          </div>
        </div>
      </div>

      {/* Background */}
      <div className="Background">
        <LetterGlitch
          glitchColors = {['#ee0b5c', '#a716b0', '#485696']}
          fontSize={32}
          glitchSpeed={100}
          centerVignette={true}
          outerVignette={true}
          smooth={true}
        />
      </div>  
    </section>
  );
}

export default Header;