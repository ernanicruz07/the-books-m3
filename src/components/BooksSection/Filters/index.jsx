import { CategoryFilters } from "./CategoryFilters"
import { PriceFilters } from "./PriceFilters"
import { SearchForm } from "./SearchForm"

export const Filters = ({cleanFilters, setSearch}) => {
    return(
        <div>
            <SearchForm setSearch={setSearch} />
            <CategoryFilters />
            <PriceFilters />
            <button onClick={cleanFilters}>Limpar filtro</button>
        </div>
    )
}