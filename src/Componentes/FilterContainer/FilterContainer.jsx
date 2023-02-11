import "./FilterContainer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareMinus, faSquarePlus, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"

export default function FilterContainer({childToParent}) {
    const [filter, setFilter] = useState(true)
    const [city, setCity] = useState("Choose a city")
    const [adults, setAdults] = useState(0)
    const [childs, setChilds] = useState(0)
    const arr = []

    useEffect(() => {
        arr.push(city, adults+childs)
        childToParent(arr)
    }, [city, adults, childs])

    const guests = childs + adults

    function handleFilterOne() {
        setFilter(true)
    }

    function handleFilterTwo() {
        setFilter(false)
    }

    function addChilds() {
        setChilds(childs + 1)
    }

    function substractChilds() {
        if (childs > 0)
        setChilds(childs - 1)
    }

    function addAdults() {
        setAdults(adults + 1)
    }

    function substractAdults() {
        if (adults > 0)
        setAdults(adults - 1)
    }

    function handleCity(e) {
        setCity(e.target.value)
    }
  
    return(
        <div className="container-fluid">
            <div className="filter-container-location">
                <div onClick={handleFilterOne} className="d-flex flex-column px-3 justify-content-center">
                    <div>
                        <p className="filter-container-location-txt">Location</p>
                    </div>
                    <div>
                        <h5 className="filter-container-location-title">{city}, Finland</h5>
                    </div>

                </div>
                <div onClick={handleFilterTwo} className="d-flex flex-column justify-content-center px-3 filter-container-line">
                    <div>
                        <p className="filter-container-location-txt">Guests</p>
                    </div>
                    <div>
                        <h5 className="filter-container-location-title">
                            { guests === 0 ? "Add Guests" : guests + " guests"}
                        </h5>
                    </div>
                </div>
            </div>
            {
                filter ? (
                    <div className="p-3">
                        <div className="py-3">
                            <FontAwesomeIcon className="fa-location" icon={faLocationDot} />
                            <input onClick={handleCity} className="filter-input-text" value= "Helsinki" readOnly />
                        </div>
                        <div className="py-3">
                            <FontAwesomeIcon className="fa-location" icon={faLocationDot} />
                            <input onClick={handleCity} className="filter-input-text" value= "Oulu" readOnly />
                        </div>
                        <div className="py-3">
                            <FontAwesomeIcon className="fa-location" icon={faLocationDot} />
                            <input onClick={handleCity} className="filter-input-text" value= "Turku" readOnly/>
                        </div>
                        <div className="py-3">
                            <FontAwesomeIcon className="fa-location" icon={faLocationDot} />
                            <input onClick={handleCity} className="filter-input-text" value= "Vaasa" readOnly/>
                        </div>
                    </div>
                ) : <div>
                        <div className="d-flex flex-column p-2">
                            <h5 className="filter-container-guests-title">Adults</h5>
                            <p className="filter-container-guests-subtitle">Age 13 or above</p>
                            <div className="d-flex gap-2">
                                <FontAwesomeIcon onClick={substractAdults} icon={faSquareMinus} />
                                <p className="filter-container-guests-title">{adults}</p>
                                <FontAwesomeIcon onClick={addAdults} icon={faSquarePlus} />
                            </div>
                        </div>
                        <div className="p-2">
                            <h5 className="filter-container-guests-title">Children</h5>
                            <p className="filter-container-guests-subtitle">Ages 2-12</p>
                            <div className="d-flex gap-2">
                                <FontAwesomeIcon onClick={substractChilds} icon={faSquareMinus} />
                                <p className="filter-container-guests-title">{childs}</p>
                                <FontAwesomeIcon onClick={addChilds} icon={faSquarePlus} />
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}