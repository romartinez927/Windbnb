import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import "./SearchBtn.css"

export default function SearchBtn() {
    return (
        <div className="search-btn row align-items-end">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <p>Search</p>
        </div>
    )
}