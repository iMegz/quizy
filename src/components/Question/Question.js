import ButtonOutline from "../Buttons/ButtonOutline";
import style from "./Question.module.css";
export default function Question({ Q }) {
    const { question, options, answer } = Q;
    return (
        <div>
            <div
                onCopy={(event) => {
                    event.preventDefault();
                }}
                className={style.question}
            >
                {question}
            </div>
            <div className={style["btn-container"]}>
                <div>
                    <ButtonOutline state="danger">{options[0]}</ButtonOutline>
                    <ButtonOutline>{options[2]}</ButtonOutline>
                </div>
                <div>
                    <ButtonOutline state="success">{options[1]}</ButtonOutline>
                    <ButtonOutline>{options[3]}</ButtonOutline>
                </div>
            </div>
        </div>
    );
}
