import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { getProperties, filterCity } from "../../Firebase/firebase"
import { useParams } from "react-router-dom"

export default function ItemListContainer() {
    const [properties, setProperties] = useState()
    let {cityid} = useParams()

    useEffect(() => {
        if(!cityid) {
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
    }, [cityid])

    // function handleGuestsChange(e) {
    //     setGuests(e.target.value)
    //     console.log(guests)
    // }

    return (
        <main>
            <div className="d-flex justify-content-between align-items-center pb-3">
                <div className="col-xs-6">
                    <h3 className="item-list-container-title">Stays in Findland</h3>
                    {/* <input 
                        type="number" 
                        onChange={handleGuestsChange}>
                    </input> */}
                </div>
                <div className="col-xs-6">
                    {properties && properties.length > 2 && <p className="item-list-container-guests">{properties.length - 1}+ Stays</p>}
                </div>
            </div>
            <div className="row rows-col-1 rows-col-md-2">
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
        </main>
    )
}