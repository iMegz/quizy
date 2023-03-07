import style from "./HomePage.module.css";
import ButtonFill from "../../components/Buttons/ButtonFill";
import Logo from "../../components/Logo/Logo";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";

export default function HomePage() {
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => setShowModal(false);
    const takeQuizHandler = () => setShowModal(true);

    return (
        <div className={style["home-page"]}>
            {showModal && <Modal close={closeModal} />}
            <Logo />
            <div className={style.btns}>
                <ButtonFill onClick={takeQuizHandler}>Take a quiz</ButtonFill>
            </div>
        </div>
    );
}
