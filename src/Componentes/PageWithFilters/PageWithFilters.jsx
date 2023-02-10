import Brand from "../Header/Brand"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import PaginaConFiltros from "../FilterContainer/FilterContainer"

export default function PageWithFilters() {
    return (
        <>
            <PaginaConFiltros />
            <ItemListContainer />
        </>
    )
}