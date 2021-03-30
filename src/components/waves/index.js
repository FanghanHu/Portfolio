import './style.css';

export default function Waves({waveCount=4}) {

    const MAX_Y = 8;
    const Y_STEP = parseInt(MAX_Y / waveCount);
    const OPACITY_STEP = 1 / waveCount;

    const waves = [];
    for(let i=0; i<waveCount; i++) {
        const step = i+1;
        waves.push(
            <use key={"wave-" + i} xlinkHref="#gentle-wave" x="48" y={step*Y_STEP} fill={`rgba(255,255,255,${step * OPACITY_STEP})`} />
        );
    }

    return (
        <svg className="waves" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 28 150 28">
            <defs>
                <path id="gentle-wave" d="M-160 44 c30 0 58 -12 88 -12 s58 12 88 12 58 -12 88 -12 58 12 88 12 v44h-352z" />
            </defs>
            <g className="parallax">
                {waves.map(wave => wave)}
            </g>
        </svg>
    )
}