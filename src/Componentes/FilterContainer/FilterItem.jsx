import { useNavigate } from "react-router-dom"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./FilterItem.css"

export default function FilterItem({name}) {
    let navigate = useNavigate()

    function handleClick() {
        navigate(`/city/${name}`)
      }

    return (
        <li className="filter-item d-flex gap-2 py-2" onClick={handleClick}>
            <FontAwesomeIcon className="fa-location" icon={faLocationDot} />
            <p className="filter-item-text">{name}, Finland</p>
        </li>
    )
}