import { categories } from "../../../../data/category"

export const CategoryFilters = () => {
    return(
        <div>
            <h3>Filtrar por categoria</h3>
            <ul>
                {categories.map(category => (
                    <li key={category.id}>
                        {category.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}