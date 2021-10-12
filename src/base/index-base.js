import React from 'react';
import reactDom from 'react-dom';

import './index.css';
import {data} from '../books'
import {Book} from '../Book.js'


function Booklist(){
  return (
    <section>
      {data.map((book)=>{
        return (
        <Book index={book.id} {...book}/>
        );
      })}
    </section>
  );
}


reactDom.render(<Booklist />, document.getElementById('root'));