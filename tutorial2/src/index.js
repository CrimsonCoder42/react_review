import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    author: 'Piggyback',
    title: 'The Legend of Zelda',
    img: "https://images-na.ssl-images-amazon.com/images/I/91vwHMt+x7L._AC_UL600_SR600,400_.jpg",
    id: 1
  },
  {
    author: 'Dr. Seuss',
    title: "Oh, the Places You'll Go!",
    img: "https://images-na.ssl-images-amazon.com/images/I/81a5KHEkwQL._AC_UL600_SR600,400_.jpg",
    id: 2
  }]


const BookList = () => {
  return (
    <section className="booklist">
    {books.map((book) => {
  return( <Book key={book.id} {...book} />);
}
)}</section>
  );
}


const Book = (props) => {
  console.log(props);
  const { author, title, img, children } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2> {title} </h2>
      <h4> {author} </h4>
      {children}
    </article>
  );
}

// const Image = () => {
//   return (
//     <>
//       <img src="https://images-na.ssl-images-amazon.com/images/I/91vwHMt+x7L._AC_UL600_SR600,400_.jpg" alt="" />
//     </>


//   );
// }

// const Title = () => {
//   return (
//     <h2> The Legend of Zelda </h2>
//   );
// }

// const Author = () => {
//   const inlineHeadingStyles = { color: '#617d98', fontSize: '0.75 rem', marginTop: '0.5rem' }
//   return (
//     <h4 style={inlineHeadingStyles}> Piggyback </h4>
//   );
// }


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);