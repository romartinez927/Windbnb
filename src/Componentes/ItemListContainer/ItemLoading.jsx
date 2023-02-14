import "./ItemLoading.css"

export default function ItemLoading() {
    return(
        <div className="col movie--isloading">
            <div className="loading-image">
            </div>
            <div className="loading-content">
                <div className="loading-text-container">
                    <div className="loading-main-text"></div>
                    <div className="loading-sub-text"></div>
                </div>
            </div>
        </div>
    )
}