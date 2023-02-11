import Brand from "../../KitUI/Brand/Brand";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Header.css"
import { Offcanvas } from "react-bootstrap";
import { useState } from "react";
import FilterContainer from "../FilterContainer/FilterContainer";
import "../FilterContainer/FilterContainer.css"
import SearchBtn from "../../KitUI/SearchBtn/SearchBtn";


export default function Header(childToParentTwo) {
    const [show, setShow] = useState(false);
    const [data, setData] = useState('');
  
    const childToParent = (arr) => {
      setData(arr)
      console.log(arr)
    }
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <header className="container-fluid row d-flex justify-content-between">
            <Brand />
            <div onClick={handleShow} className="container-fluid p-4 col-xl-3 col-md-3 col-xs-10 text-center">
                <div className="d-flex search-container py-2 px-4 gap-4">
                    <div className="search-page-text ">
                        <p onChange={() =>childToParentTwo(data)}>
                            {data ? data[0] + ", Finland" : "Choose a city"}
                        </p>
                    </div>
                    <div className="search-page-text">
                        <p onChange={() =>childToParentTwo(data)}>
                            {data && data !== undefined ? data[1] + " Guests" : "Add Guests"}
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
                    <div onClick={handleClose} className="search-btn d-flex justify-content-center align-items-center">
                        <span><FontAwesomeIcon icon={faMagnifyingGlass} /> Search</span>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </header>

    )
}