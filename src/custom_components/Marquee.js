import './Marquee.css';

/** 
 * CSS-Only Marquee Effect
 * From CODROPS by By Manoela Ilic in Playground (https://tympanus.net/codrops/2020/03/31/css-only-marquee-effect/)
 */

function Marquee({ marqueeText = 'text', textSize = '10vw', marqHeight = '8vh', backgroundCol = '', tilt = '0deg', invertDir = 0 }) {
    return(
        <div className="marquee" style={{ background: backgroundCol, rotate: tilt, fontSize: textSize, lineHeight: marqHeight }}>
            <div className={invertDir > 0 ? "marquee__inner_inv" :"marquee__inner"} aria-hidden="true">
                <span><b>{marqueeText}</b></span>
                <span><b>{marqueeText}</b></span>
                <span><b>{marqueeText}</b></span>
                <span><b>{marqueeText}</b></span>
            </div>
        </div>
    );
}

export default Marquee;