import "./itemList.css"

export default function ItemList(props) {
    const {title, photo, type, beds, rating, superHost} = props.property

    return (
        <div>
            <div>
                <img src={photo} alt={title} className="item-list-img"/>
            </div>
            <div>
                {
                    superHost && <button>Super Host</button>
                }
                <p>{type}</p>
                {
                    beds && (beds == 1 ? 
                                (<p>{beds} bed</p>) 
                                : (<p>{beds} beds</p>))   
                }
                <p>{rating}</p>
            </div>
            <div>
                <p>{title}</p>
            </div>
        </div>
    )
}