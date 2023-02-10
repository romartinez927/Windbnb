import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./SearchPage.css"

export default function SearchPage() {

  return (
    <div className="container-fluid p-4 col-xl-3 col-md-3 col-xs-10 justify-content-center">
        <div className="d-flex border search-container justify-content-center align-items-center py-2 px-4 gap-3">
            <div className="d-flex align-items-center search-page-text">City, Finland</div>
            <div className="d-flex align-items-center search-page-text">Add Guests</div>
            <Link to="/">
                <FontAwesomeIcon className="fa-glass" icon={faMagnifyingGlass} />
            </Link>
        </div>
    </div>
  )
}