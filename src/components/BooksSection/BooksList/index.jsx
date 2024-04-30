import { BookCard } from "./BookCard"

export const BooksList = () => {
    return(
        <div>
            <span>Livros listados</span>
            <ul>
                <BookCard />
            </ul>
        </div>
    )
}