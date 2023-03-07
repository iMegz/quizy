import style from "./Buttons.module.css";

export default function ButtonOutline({ onClick, children, state }) {
    switch (state) {
        case "danger":
            state = "btn-outline-danger";
            break;
        case "success":
            state = "btn-outline-success";
            break;
        default:
            state = "btn-outline";
            break;
    }

    const className = `${style.btn} ${style[state]}`;
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
}
