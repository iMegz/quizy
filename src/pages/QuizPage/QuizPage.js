import style from "./QuizPage.module.css";
import Question from "../../components/Question/Question";
import Logo from "../../components/Logo/Logo";
import data from "../../data";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ButtonFill from "../../components/Buttons/ButtonFill";

function Result({ score, maxScore }) {
    const navigate = useNavigate();

    const tryAgainHandler = () => {
        navigate("/", { replace: true });
    };
    return (
        <div className={style.result}>
            <h2>Your score :</h2>
            <h3>
                {score} / {maxScore}
            </h3>
            <ButtonFill onClick={tryAgainHandler}>Try again</ButtonFill>
        </div>
    );
}

export default function QuizPage() {
    const { category } = useParams();
    const navigate = useNavigate();
    const questions = data[category];
    const maxScore = questions.length;
    const [qIndex, setQIndex] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        if (!questions) {
            navigate("/quiz", { replace: true });
        } else {
        }
    }, [questions, navigate]);

    const next = (correct) => {
        if (correct) setScore((score) => score + 1);
        if (qIndex === maxScore - 1) {
            setShowResult(true);
        } else setQIndex(qIndex + 1); //when we chamge state the page will re-render
    };

    return (
        <div className={style["question-page"]}>
            <Logo mini />
            {showResult ? (
                <Result maxScore={maxScore} score={score} />
            ) : (
                <div className={style.question}>
                    <Question Q={questions[qIndex]} next={next} />
                </div>
            )}
        </div>
    );
}
