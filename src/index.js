import React from 'react';
import reactDom from 'react-dom';


function Hola(){
  return (
    <div>
      <h1>
        Ciao
      </h1>
      <Description />
      <Description2 />
    </div>
  );
}
const Description = () => {
  return (
    <p> lorem ipsum</p>
)};
const Description2 = () => <p> lorem ipsum22222</p>;
reactDom.render(
  <Hola
  />, document.getElementById('root')
)