import React from 'react';
import reactDom from 'react-dom';

const css =`
  section {
    display:flex;
    flex-direction:row;
    grid-template-columns: 2fr
  }
  article {
    background: lightgray;
    margin: 10px;
    padding: 10px;
    border-radius:5px;
  }
`
const books = [
  {
    title:"first title",
    author:'first author',
  },
  {
    title:"second title",
    author:'second author',
  },
  {
    title:"third title",
    author:'third author',
  },
  {
    title:"fourth title",
    author:'fourth author',
  }
]
function Booklist(){
  return (
    <section>
      <style>
        {css}
      </style>
      {books.map((book)=>{
        const {title,author}=book;
        return (
        <Book author={author} title={title}/>
        );
      })}
    </section>
  );
}
const Book = ({author,title}) => {
  return (
    <article>
      <Image />
      <Author name={author} />
      {title}
    </article>
)};
let imgSrc = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png";
const Image = () => <img src={imgSrc}  width="100px" alt="Bello"/>;
const Author = (props) => <h4>{props.name}</h4>;

reactDom.render(<Booklist />, document.getElementById('root'));