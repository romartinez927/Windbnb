import "./brand.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay } from "@fortawesome/free-solid-svg-icons"

export default function Brand() {
    return (
        <div className="brand-link d-flex col-xl-3 col-md-4 col-xs-12 pt-4 flex-items-center gap-1">
            <FontAwesomeIcon className="img-logo" icon={faPlay} />
            <span className="brand-logo">windbnb</span>
        </div>
    )
}