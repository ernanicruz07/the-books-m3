import { CategoryFilters } from "../Filters/CategoryFilters"
import { SearchForm } from "../Filters/SearchForm"
import { PriceFilters } from "./PriceFilters"

export const Filters = () => {
    return(
        <div>
            <SearchForm />
            <CategoryFilters />
            <PriceFilters />
            <button>Limpar filtro</button>
        </div>
    )
}