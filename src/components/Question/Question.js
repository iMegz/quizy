import ButtonOutline from "../Buttons/ButtonOutline";
import style from "./Question.module.css";
import { useState } from "react";

export default function Question({ Q, next }) {
    const { question, options, answer } = Q;

    const initialBtnState = Array(options.length).fill(undefined);
    const [btnState, setBtnState] = useState(initialBtnState);

    const [exit, setExit] = useState("");

    const clickHandler = (e, index) => {
        const value = e.target.innerText;
        const newState = [...btnState];

        if (value === answer)
            setBtnState(() => {
                newState[index] = "success";
                return newState;
            });
        else
            setBtnState(() => {
                newState[index] = "danger";
                const correct = options.findIndex((a) => a === answer);
                newState[correct] = "success";
                return newState;
            });
        setTimeout(() => {
            setExit(style.exit);
            setTimeout(() => {
                next(value === answer);
                setBtnState(initialBtnState);
                setExit("");
            }, 500);
        }, 750);
    };

    return (
        <div>
            <div className={style.question}>{question}</div>
            <div className={`${style["btn-container"]} ${exit}`}>
                <div>
                    <ButtonOutline
                        state={btnState[0]}
                        onClick={(e) => clickHandler(e, 0)}
                    >
                        {options[0]}
                    </ButtonOutline>
                    <ButtonOutline
                        state={btnState[2]}
                        onClick={(e) => clickHandler(e, 2)}
                    >
                        {options[2]}
                    </ButtonOutline>
                </div>
                <div>
                    <ButtonOutline
                        state={btnState[1]}
                        onClick={(e) => clickHandler(e, 1)}
                    >
                        {options[1]}
                    </ButtonOutline>
                    <ButtonOutline
                        state={btnState[3]}
                        onClick={(e) => clickHandler(e, 3)}
                    >
                        {options[3]}
                    </ButtonOutline>
                </div>
            </div>
        </div>
    );
}
