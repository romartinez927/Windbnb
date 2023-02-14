import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./FilterCity.css"

export default function FilterCity({value, onClick}) {
    return (
        <div className="py-3">
            <FontAwesomeIcon className="fa-location" icon={faLocationDot} />
            <input onClick={onClick} className="filter-input-text" value={value} readOnly/>
        </div>
    )
}