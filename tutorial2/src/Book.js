const Book = (props) => {
  const { author, title, img, children, index } = props;
    
  return (
    <article className="book">
    <h1> {index + 1} </h1>
      <img src={img} alt={title} />
      <h2> {title} </h2>
      <button type="button" >Click Me</button>
      <h4> {author} </h4>
      {children}
    </article>
  );
}

export default Book;