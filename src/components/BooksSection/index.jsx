import { Filters } from "./Filters"
import { BooksList } from "./BooksList"


export const BooksSection = () => {
    return(
        <section>
            <Filters />
            <BooksList />
        </section>
    )
}