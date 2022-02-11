import React from "react";
import ReactDOM from "react-dom";
import CommentBox from './CommentBox.js';
import Button from './Button.js';


const App = () => {
  return (
    <>
  
  <CommentBox />
  <Button />
  
  </>

  )
  
};




ReactDOM.render(
    <App />,
    document.getElementById("root")

);
