import './style.css';

export default function TypeWriterText({text="please enter text", textColor="#000", style, ...restOfProps}) {
    return (
        <div style={{...style, width:"fit-content"}} {...restOfProps}>
            <div
                style={{
                    overflow:"hidden",
                    borderRight: `2px solid ${textColor}`,
                    color: textColor,
                    margin: "0 auto",
                    whiteSpace: "nowrap",
                    animation: `
                        typing 2s steps(${text.length}, end), 
                        blink-cursor 0.75s step-end infinite
                    `
                }}
            >
                {text}
            </div>
        </div>
    );
}