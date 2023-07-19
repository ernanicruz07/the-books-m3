import { useState } from "react"
import { books } from "../../data/books";
import { BooksList } from "./BooksList"
import { Filters } from "./Filters"

export const BooksSection = () => {
    const [search, setSearch] = useState("");

    const booksResults = books.filter(book => book.name.toLowerCase().includes(search.toLowerCase()) || book.category.toLowerCase().includes(search.toLowerCase())); 

    const bookList = search ? booksResults : books;

    const cleanFilters = () => {
        setSearch("");
    }

    return(
        <section>
            <Filters cleanFilters={cleanFilters} setSearch={setSearch} />
            <BooksList search={search} bookList={bookList} />
        </section>
    )
}