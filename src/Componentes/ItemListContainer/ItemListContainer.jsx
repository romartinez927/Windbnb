import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { getProperties } from "../../Firebase/firebase"

export default function ItemListContainer() {
    const [properties, setProperties] = useState()

    useEffect(() => {
        getProperties()
            .then((response) => {
                setProperties(response)
                console.log(response)
            })
            .catch((error) => console.log("y los productooos?"))
    }, [])


    return (
        <div>
            <div className="row">
                <div className="col-6">
                    <h3>Stays in Findland</h3>
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