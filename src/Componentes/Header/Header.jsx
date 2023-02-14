import Brand from "../../KitUI/Brand/Brand";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Header.css"
import { Offcanvas } from "react-bootstrap";
import { useState } from "react";
import FilterContainer from "../Menu/FilterContainer";
import "../Menu/FilterContainer.css"

export default function Header({childToParentTwo}) {
    const [show, setShow] = useState(false);
    const [data, setData] = useState("");
  
    const childToParent = (arr) => {
      setData(arr)
      childToParentTwo(data)
    }
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <header className="container-fluid row py-2">
            <Brand />
            <div onClick={handleShow} className="container-fluid p-3 col-xl-3 col-md-5 col-xs-11">
                <div className="d-flex search-container align-items-center gap-4 justify-content-center">
                    <div className="search-page-text">
                        <p>
                            {data && data[0] !== "Choose a city" ? data[0] + ", Finland" : "Choose a city"}
                        </p>
                    </div>
                    <div className="search-page-text">
                        <p>
                            {data && data[1] !== 0 ? data[1] + " Guests" : "Add Guests"}
                        </p>
                    </div>
                    <FontAwesomeIcon className="fa-glass" icon={faMagnifyingGlass} />
                </div>
            </div>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header className="fa-xmark" closeButton>
                    <Offcanvas.Title className="filter-container-search">Edit your search</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <FilterContainer childToParent={childToParent}/>
                    <div onClick={handleClose} className="search-btn d-flex m-auto justify-content-center align-items-center">
                        <span onClick={() => childToParentTwo(data)}><FontAwesomeIcon icon={faMagnifyingGlass} /> Search</span>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </header>

    )
}