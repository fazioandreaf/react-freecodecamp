import React from 'react';
import reactDom from 'react-dom';


function Booklist(){
  return (
    <section>
      <Book title="first title" author="first author"/>
      <Book title="second title" author="second author"/>
      <Book title="third title" author="third author"/>
      <Book title="forth title" author="forth author"/>
      <Book title="fifht title" author="fifht author"/>
      <Book title="six title" author="six author"/>
    </section>
  );
}
const Book = (props) => {
  return (
    <article>
      <Image />
      <Author name={props.author} />
      {props.title} 
    </article>
)};
let imgSrc = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png";
const Image = () => <img src={imgSrc}  width="100px" alt="Bello"/>;
const Author = (props) => <h4>{props.name}</h4>;

reactDom.render(<Booklist />, document.getElementById('root'));