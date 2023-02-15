import "./FilterContainer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareMinus, faSquarePlus } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import FilterCity from "./FilterCity"

export default function FilterContainer({childToParent}) {
    const [filter, setFilter] = useState(true)
    const [city, setCity] = useState("Choose a city")
    const [adults, setAdults] = useState(0)
    const [childs, setChilds] = useState(0)
    const guests = childs + adults

    const handleCity = (e) => setCity(e.target.value)

    useEffect(() => {
        const arr = []
        arr.push(city, guests)
        childToParent(arr)
    }, [city, guests])

    const handleFilterOne = () => setFilter(true)
    const handleFilterTwo = () => setFilter(false)

    const addChilds = () => setChilds(childs + 1)
    
    function substractChilds() {
        if (childs > 0) {
            setChilds(childs - 1)
        }
    }

    const addAdults = () => setAdults(adults + 1)

    function substractAdults() {
        if (adults > 0) {
            setAdults(adults - 1)
        }
    }
  
    return(
        <div className="container-fluid">
            <div className="filter-container-location">
                <div onClick={handleFilterOne} className="d-flex flex-column px-3">
                    <p className="filter-container-location-txt pt-2">Location</p>
                    <h5 className="filter-container-location-title pb-1">{city}, Finland</h5>
                </div>
                <div onClick={handleFilterTwo} className="d-flex flex-column px-3 filter-container-line">
                    <p className="filter-container-location-txt pt-2">Guests</p>
                    <h5 className="filter-container-location-title pb-1">
                        { guests === 0 ? "Add Guests" : guests + " guests"}
                    </h5>
                </div>
            </div>
            {
                filter ? (
                    <div className="row p-3">
                        <FilterCity value="Helsinki" onClick={handleCity} />
                        <FilterCity value="Oulu" onClick={handleCity} />
                        <FilterCity value="Turku" onClick={handleCity} />
                        <FilterCity value="Vaasa" onClick={handleCity} />
                    </div>
                ) : <div className="text-center py-4">
                        <div className="p-2">
                            <h5 className="filter-container-guests-title">Adults</h5>
                            <p className="filter-container-guests-subtitle">Age 13 or above</p>
                            <div className="d-flex gap-2 justify-content-center">
                                <FontAwesomeIcon onClick={substractAdults} icon={faSquareMinus} />
                                <p className="filter-container-guests-title">{adults}</p>
                                <FontAwesomeIcon onClick={addAdults} icon={faSquarePlus} />
                            </div>
                        </div>
                        <div className="p-2">
                            <h5 className="filter-container-guests-title">Children</h5>
                            <p className="filter-container-guests-subtitle">Ages 2-12</p>
                            <div className="d-flex gap-2 justify-content-center">
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
