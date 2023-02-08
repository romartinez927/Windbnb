import "./itemList.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

export default function ItemList(props) {
    const { title, photo, type, beds, rating, superHost } = props.property

    return (
        <div className="item-list pb-3 col">
            <div className="justify-content-center text-center">
                <img src={photo} alt={title} className="item-list-img" />
            </div>
            <div className="p-2">
                <div className="d-flex justify-content-between">
                    {
                        superHost && (
                            <div>
                                <p className="super-host-text p-1">Super Host</p>
                            </div>
                        )
                    }
                    <div>
                        <p className="item-list-subtitle p-1">{type}</p>
                    </div>
                    {
                        beds && (beds == 1 ?
                            (
                                <div>
                                    <p className="item-list-subtitle p-1">{beds} bed</p>
                                </div>
                            )
                            :
                            (
                                <div>
                                    <p className="item-list-subtitle p-1">{beds} beds</p>
                                </div>
                            )
                        )
                    }
                    <div className="d-flex">
                        <p className="item-list-rating p-1">
                            <span>
                                <FontAwesomeIcon className="fa-star px-1" icon={faStar} />
                            </span>
                            {rating}
                        </p>
                    </div>
                </div>
                <div>
                    <p className="item-list-title">{title}</p>
                </div>
            </div>
        </div>
    )
}