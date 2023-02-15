import { Link } from "react-router-dom";
import Header from "../Header/Header";

export default function Page404() {
    return (
        <div>
            <Header />
            <Link to="/">
                <div className="text-center pb-5">
                    <img src="./images/404page.jpg" alt="Página 404"/>
                </div>
            </Link>
        </div>
    )
}