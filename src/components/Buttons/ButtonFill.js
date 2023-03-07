import style from "./Buttons.module.css";

export default function ButtonFill({ onClick, children }) {
    return (
        <button
            className={`${style.btn} ${style["btn-fill"]}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
