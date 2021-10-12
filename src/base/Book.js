import React from 'react';


export const Book = ({author,title}) => {
  const clickHandler = () => {
   alert('Hola')
  }
  return (
  <>
    <article>
      <Image />
      <Author name={author} />
      {title}
      <br></br>
      <button onClick={clickHandler}>Click</button>
    </article>
  </>
)};
let imgSrc = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png";
const Image = () => <img src={imgSrc}  width="100px" alt="Bello"/>;
const Author = (props) => <h4>{props.name}</h4>;

