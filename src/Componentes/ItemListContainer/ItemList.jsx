import "./itemList.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

export default function ItemList(props) {
    const { title, photo, type, beds, rating, superHost } = props.property

    return (
        <div className="item-list col">
            <div className="justify-content-center text-center">
                <img src={photo} alt={title} className="item-list-img" />
            </div>
            <div className="item-list-content justify-content-center text-center">
                <div className="d-flex justify-content-between pt-3">
                    {
                        superHost && (
                             <p className="super-host-text p-1">Super Host</p>
                        )
                    }
                        <p className="item-list-subtitle p-1">{type}</p>
                    {
                        beds && (beds == 1 ?
                            (
                                <p className="item-list-subtitle p-1">{beds} bed</p>
                            )
                            :
                            (
                                <p className="item-list-subtitle p-1">{beds} beds</p>
                            )
                        )
                    }
                    <p className="item-list-rating p-1">
                        <FontAwesomeIcon className="fa-star px-1" icon={faStar} />
                        {rating}
                    </p>
                </div>
                <div>
                    <p className="item-list-title">{title}</p>
                </div>
            </div>
        </div>
    )
}