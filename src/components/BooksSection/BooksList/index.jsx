import { BookCard } from "./BookCard";

export const BooksList = ({ search, bookList }) => {
   return (
      <div>
         <span className="paragraph bold">Livros listados: {bookList.length}</span>
         {search ? <p className="paragraph">Resultados de busca para: <strong>{search}</strong></p> : null}

         {bookList.length > 0 ? (
            <ul>
               {bookList.map((book) => (
                  <BookCard key={book.id} book={book} />
               ))}
            </ul>
         ) : (
            <p>Nenhum resultado encontrado</p>
         )}
      </div>
   );
};
