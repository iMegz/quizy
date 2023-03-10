import style from "./Error404.module.css";
import notFoundImg from "./notFound.svg";

export default function Error404({ msg }) {
    msg ||= "We have searched 404 times but found nothing here";
    return (
        <div className={style["not-found"]}>
            <img src={notFoundImg} alt="Product not found" />
            <span>{msg}</span>
        </div>
    );
}
