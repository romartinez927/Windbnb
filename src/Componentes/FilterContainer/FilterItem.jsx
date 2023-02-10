import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./FilterItem.css"

export default function FilterItem({value}) {

    return (
        <li className="filter-item d-flex gap-2 py-2" >
            <FontAwesomeIcon className="fa-location" icon={faLocationDot} />
            <p className="filter-item-text">{value}, Finland</p>
        </li>
    )
}