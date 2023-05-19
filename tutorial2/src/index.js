import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    author: 'Piggyback',
    title: 'The Legend of Zelda',
    img: "https://images-na.ssl-images-amazon.com/images/I/91vwHMt+x7L._AC_UL600_SR600,400_.jpg"
  },
  {
    author: 'Dr. Seuss',
    title: "Oh, the Places You'll Go!",
    img: "https://images-na.ssl-images-amazon.com/images/I/81a5KHEkwQL._AC_UL600_SR600,400_.jpg"
  }]


const someFunc = (param1, param2) => {
  console.log(param1, param2);
}

someFunc('hello', 'world');

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>
      </Book>

      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img} />

    </section>
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