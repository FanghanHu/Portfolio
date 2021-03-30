import { useEffect, useState } from 'react';
import './style.css';

export default function TypeWriterText({text="please enter text", textColor="#000", style, ...restOfProps}) {
    const [animation, setAnimation] = useState("none");
    const [disPlayText, setDisplayText] = useState("");

    const KEY_PER_SEC = 12;

    useEffect(() => {
        setAnimation("none");
        setDisplayText("");
        const timeout = setTimeout(() => {
            setAnimation(`
                typing ${1 / KEY_PER_SEC * text.length}s steps(${text.length}, end) forwards, 
                blink-cursor 0.75s step-end infinite
            `);
            setDisplayText(text);
        }, 100);

        return () => {
            clearTimeout(timeout);
        }
    }, [text]);
    
    return (
        <div style={{...style, width:"fit-content"}} {...restOfProps}>
            <div
                style={{
                    width: 0,
                    overflow:"hidden",
                    borderRight: `2px solid ${textColor}`,
                    color: textColor,
                    margin: "0 auto",
                    whiteSpace: "nowrap",
                    animation: animation
                }}
            >
                {disPlayText}
            </div>
        </div>
    );
}