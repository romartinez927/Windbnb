import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { getProperties, filterCity, filterGuest } from "../../Firebase/firebase"
import { useParams } from "react-router-dom"

export default function ItemListContainer() {
    const [properties, setProperties] = useState()
    const [guests, setGuests] = useState()
    let {cityid} = useParams()

    useEffect(() => {
        if(guests && guests > 0) {
            filterGuest(guests)
                .then((response) => {
                    setProperties(response)
                    console.log(response)
                })
                .catch((error) => console.log(error))
        }
        else if(!cityid) {
            getProperties()
                .then((response) => {
                    setProperties(response)
                })
                .catch((error) => console.log(error))
        } else {
            filterCity(cityid)
                .then((response) => {
                    setProperties(response)
                })
                .catch((error) => console.log(error))
        }
    }, [cityid, guests])

    function handleGuestsChange(e) {
        setGuests(e.target.value)
        console.log(guests)
    }

    return (
        <div>
            <div className="row">
                <div className="col-6">
                    <h3>Stays in Findland</h3>
                    <input type="number" onChange={handleGuestsChange}>
                    </input>
                </div>
                <div className="col-6">
                    {properties && <p>{properties.length - 1}+ Stays</p>}
                </div>
            </div>
            <div>
                {
                    properties && properties.length > 0 && properties.map((property) => {
                        return (
                            <ItemList 
                                key={property.title} 
                                id={property.title} 
                                property={property} 
                            />
                        )
                    })
                }
            </div>

        </div>
    )
}