import style from "./Logo.module.css";
export default function Logo({ mini }) {
    return <div className={`${style.logo} ${mini ? style.mini : ""}`}></div>;
}
