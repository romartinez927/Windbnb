import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../Header/header.css"
import { Link } from "react-router-dom";

export default function SearchPage() {

  return (
    <div className="p-4 col-xl-3 col-md-3 col-xs-10 justify-content-center">
        <div className="container-fluid d-flex border search-container justify-content-center align-items-center py-2 px-4 gap-3">
            <div className="header-text">City, Finland</div>
            <div className="border-right">.</div>
            <div className="header-text">Add guests</div>
            <div className="border-right">.</div>
            <Link to="/">
                <FontAwesomeIcon className="fa-glass" icon={faMagnifyingGlass} />
            </Link>
        </div>
    </div>
  )
}