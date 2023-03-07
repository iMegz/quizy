import ButtonFill from "../Buttons/ButtonFill";
import style from "./Modal.module.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function Modal({ close }) {
    const navigate = useNavigate();
    const category = useRef();

    const categoryHandler = () => {
        navigate(`/quiz/${category.current.value}`);
    };

    const preventCloseHandler = (e) => {
        e.stopPropagation();
    };

    return (
        <div onClick={close} className={style.overlay}>
            <div onClick={preventCloseHandler} className={style.modal}>
                <select className={style.select} ref={category}>
                    <option value="science">Science</option>
                    <option value="history">History</option>
                    <option value="technology">Technology</option>
                    <option value="sports">Sports</option>
                </select>
                <ButtonFill onClick={categoryHandler}>
                    Select category
                </ButtonFill>
            </div>
        </div>
    );
}
