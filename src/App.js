import style from "./App.module.css";
import { Outlet } from "react-router-dom";

function App() {
    window.addEventListener("blur", () => {
        console.log("Don't switch tabs plz");
    });

    return (
        <div className={style.app}>
            <Outlet />
        </div>
    );
}

export default App;
