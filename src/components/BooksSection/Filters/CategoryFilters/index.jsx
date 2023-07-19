import { categories } from "../../../../data/category"

export const CategoryFilters = ({setCategory}) => {
    return(
        <div>
            <h2 className="title2">Filtrar por categoria</h2>
            <ul>
                {categories.map(category => (
                    <li className="paragraph" key={category.id} onClick={() => setCategory(category.name)}>
                        {category.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}