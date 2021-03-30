export default function NavButton({text, title, targetId, setTitle}) {
    return (
        <div className="nav-button"
            onClick={() => {
                setTitle(title?title:text);
            }}
        >
            {text}
        </div>
    );
}