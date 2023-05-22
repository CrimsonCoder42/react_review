const Book = (props) => {
  const { author, title, img, children, index } = props;
    
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2> {title} </h2>
      <button type="button" >Click Me</button>
      <h4> {author} </h4>
      {children}
      <span className='number'> {index + 1} </span>
    </article>
  );
}

export default Book;