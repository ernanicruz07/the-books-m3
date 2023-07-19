export const BookCard = ({book}) => {
    return(
        <li>
            <div>
                <h3>{book.name}</h3>
                <p>{book.category}</p>
            </div>
            <span>{book.price}</span>
        </li>
    )
}