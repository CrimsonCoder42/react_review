import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { books } from "./books";
import Book from "./Book";


const BookList = () => {
  
  return (
    <section className="booklist">
    {books.map((book, index) => {
  return( <Book key={book.id} {...book} index={index}/>);
} )}
</section>
  );
}




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);