import { CategoryFilters } from "./CategoryFilters"
import { PriceFilters } from "./PriceFilters"
import { SearchForm } from "./SearchForm"

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