import { BooksList } from "./BooksList"
import { Filters } from "./Filters"

export const BooksSection = () => {
    return(
        <section>
            <Filters />
            <BooksList />
        </section>
    )
}