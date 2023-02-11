import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { filterCity, getProperties } from "../../Firebase/firebase"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

export default function ItemListContainer() {
    const [properties, setProperties] = useState()
    const [data, setData] = useState()

    useEffect(() => {
        getProperties()
            .then((res) => {
                setProperties(res)
                console.log(res)
            })
            .catch((error) => console.log(error))
    }, [])

    const childToParentTwo = (res) => {
        if(res) {
            setData(res)
            console.log(res)
        }
        else(console.log("waiit"))
      }

    console.log(properties)
    // let filterProperties = []
    // let arr = properties


    // if (properties) {
    //     arr = ["Oulu", 3]
    //     filterProperties = properties.filter(property => property.city === arr[0] && property.maxGuests >= arr[1])
    //     console.log(filterProperties)
    // }


    return (
        <>
            <Header childToParentTwo={childToParentTwo}/>
            <main>
                <div className="d-flex justify-content-between align-items-center pb-3">
                    <div className="col-xs-6">
                        <h3 className="item-list-container-title">Stays in Findland</h3>
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
            <Footer />
        </>
    )
}