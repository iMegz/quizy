import style from "./QuizPage.module.css";
import Question from "../../components/Question/Question";
import Logo from "../../components/Logo/Logo";
export default function QuizPage() {
    const Q = {
        question: "Which team won the 2021 NBA Finals?",
        options: [
            "Milwaukee Bucks",
            "Phoenix Suns",
            "Brooklyn Nets",
            "Los Angeles Lakers",
        ],
        answer: "Milwaukee Bucks",
    };
    return (
        <div className={style["question-page"]}>
            <Logo mini />
            <div className={style.question}>
                <Question Q={Q} />
            </div>
        </div>
    );
}
