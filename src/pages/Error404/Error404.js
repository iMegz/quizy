import style from "./Error404.module.css";
import notFoundImg from "./notFound.svg";

export default function Error404() {
    return (
        <div className={style["not-found"]}>
            <img src={notFoundImg} alt="Product not found" />
            <span>We have searched 404 times but found nothing here</span>
        </div>
    );
}
