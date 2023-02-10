import "./PaginaConFiltros.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot, faXmark } from "@fortawesome/free-solid-svg-icons"
import SearchBtn from "../../KitUI/SearchBtn/SearchBtn"
import { Link, useNavigate } from "react-router-dom"
import FilterItem from "./FilterItem"

export default function FilterContainer() {
    let navigate = useNavigate()

    function handleClick() {
        navigate("/")
      }

    return(
        <div className="modal active container-fluid">
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <h5 className="filter-container-search">Edit your search</h5>
                </div>
                <div>
                    <FontAwesomeIcon onClick={handleClick} className="fa-xmark fs-5" icon={faXmark}/>
                </div>
            </div>
            <div className="filter-container-location">
                <div className="d-flex flex-column justify-content-center ">
                    <div>
                        <p className="filter-container-location-txt">Location</p>
                    </div>
                    <div>
                        <h5 className="filter-container-location-title">Helsinki, Finland</h5>
                    </div>

                </div>
                <div className="d-flex flex-column justify-content-center filter-container-line">
                    <div>
                        <p className="filter-container-location-txt">Guests</p>
                    </div>
                    <div>
                        <h5 className="filter-container-location-title">Add Guests</h5>
                    </div>
                </div>
            </div>
            <div>
                <ul>
                    <FilterItem name="Helsinki"/>
                    <FilterItem name="Turku"/>
                    <FilterItem name="Oulu"/>
                    <FilterItem name="Vaasa"/>
                </ul>
            </div>
            <SearchBtn />
        </div>
    )
}