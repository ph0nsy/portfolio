import "./Marquee.css";

/**
 * CSS only marquee effect.
 * From Codrops, by Manoela Ilic: https://tympanus.net/codrops/2020/03/31/css-only-marquee-effect/
 */
function Marquee({
  text = "text",
  label,
  textSize = "10vw",
  lineHeight = "9vh",
  background = "transparent",
  tilt = "0deg",
  reverse = false,
}) {
  return (
    <div
      className="marquee"
      style={{ background, rotate: tilt, fontSize: textSize, lineHeight }}
    >
      {label && <span className="visually-hidden">{label}</span>}
      <div
        className={`marquee__inner${reverse ? " marquee__inner--reverse" : ""}`}
        aria-hidden="true"
      >
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="marquee__item">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
