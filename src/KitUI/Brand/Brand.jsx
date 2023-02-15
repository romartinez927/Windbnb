import "./brand.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

export default function Brand() {
    return (
        <Link to="/" className="brand-link d-flex col-xl-9 col-md-7 col-xs-12 pt-3 flex-items-center gap-1">
            <FontAwesomeIcon className="img-logo" icon={faPlay} />
            <span className="brand-logo">windbnb</span>
        </Link>
    )
}