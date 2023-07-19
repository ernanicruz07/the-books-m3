import { useState } from "react";
import { books } from "../../data/books";
import { BooksList } from "./BooksList";
import { Filters } from "./Filters";

export const BooksSection = () => {
   const [search, setSearch] = useState("");
   const [category, setCategory] = useState("");

   const booksResults = books.filter((book) => {
      const searchFilter =
         search === "" ? true : 
         book.name.toLowerCase().includes(search.toLowerCase()) ||
         book.category.toLowerCase().includes(search.toLowerCase());

      const categoryFilter = category === "" ? true : book.category === category;   

      return searchFilter && categoryFilter
   });

   const cleanFilters = () => {
      setSearch("");
      setCategory("");
   };

   return (
      <section>
         <Filters
            cleanFilters={cleanFilters}
            setSearch={setSearch}
            setCategory={setCategory}
         />
         <BooksList search={search} bookList={booksResults} />
      </section>
   );
};
