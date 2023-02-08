import SearchPage from "../SearchPage/SearchPage";
import Brand from "./Brand";
import "./header.css"

export default function Header() {
    return (
        <header className="container-fluid row d-flex justify-content-between">
            <Brand />
            <SearchPage />
        </header>

    )
}