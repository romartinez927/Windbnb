import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { getProperties, filterCity } from "../../Firebase/firebase"
import Header from "../Header/Header"
import ItemLoading from "./ItemLoading"

export default function ItemListContainer() {
    const [properties, setProperties] = useState()
    const [data, setData] = useState([])

    const childToParentTwo = (data) => setData(data)

    useEffect(() => {
        if (typeof data[0] !== "string") {
            getProperties()
                .then((res) => {
                    setProperties(res)
                })
                .catch((error) => console.log(error))
        } else if (typeof data[0] === "string" && typeof data[1] === "number") {
            filterCity(data[0])
                .then((res) => {
                    setProperties(res)
                })
                .catch((error) => console.log(error))
        }
    }, [data])

    return (
        <>
            <Header childToParentTwo={childToParentTwo} />
            {/* Contenedor de cards */}
            <main>
                <div className="d-flex justify-content-between align-items-center pb-3 px-4">
                    <div className="col-xs-6">
                        <h3 className="item-list-container-title">{
                            typeof data[0] === "string" && data[0] !== "Choose a city" ? (`Stays in ${data[0]}, Finland`) : ("Stays in Finland")
                        }</h3>
                    </div>
                    <div className="col-xs-6">
                        {properties && properties.length > 2 && <p className="item-list-container-guests">{properties.length - 1}+ Stays</p>}
                    </div>
                </div>
                <div className="row rows-col-1 rows-col-md-2 gap-4 justify-content-center text-center">
                    {
                        properties ? (
                            // Filtro según la cantidad de personas que se hospeden
                            typeof data[1] == "number" && data[1] > 0 ? (
                                properties.filter(property => property.maxGuests >= data[1]).map((property) => {
                                    return (
                                        <ItemList
                                            key={property.title}
                                            id={property.title}
                                            property={property}
                                        />
                                    )
                                })
                            )
                                : properties.map((property) => {
                                    return (
                                        <ItemList
                                            key={property.title}
                                            id={property.title}
                                            property={property}
                                        />
                                    )
                                })
                        )
                            : 
                                <div className="row justify-content-center">
                                    <div className="row rows-col-1 rows-col-md-2 mx-auto gap-1 justify-content-center">
                                        <ItemLoading />
                                        <ItemLoading />
                                        <ItemLoading />
                                        <ItemLoading />
                                        <ItemLoading />
                                        <ItemLoading />
                                    </div>
                                </div>
                    }
                </div>
            </main>
        </>
    )
}