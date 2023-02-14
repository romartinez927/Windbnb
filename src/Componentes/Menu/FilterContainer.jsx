import "./FilterContainer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareMinus, faSquarePlus } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import FilterItem from "./FilterCity"

export default function FilterContainer({childToParent}) {
    const [filter, setFilter] = useState(true)
    const [city, setCity] = useState("Choose a city")
    const [adults, setAdults] = useState(0)
    const [childs, setChilds] = useState(0)
    const arr = []
    const guests = childs + adults

    useEffect(() => {
        arr.push(city, guests)
        childToParent(arr)
    }, [city, guests])

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
                        <FilterItem value="Helsinki" onClick={handleCity} />
                        <FilterItem value="Oulu" onClick={handleCity} />
                        <FilterItem value="Turku" onClick={handleCity} />
                        <FilterItem value="Vaasa" onClick={handleCity} />
                    </div>
                ) : <div>
                        <div className="p-2">
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
