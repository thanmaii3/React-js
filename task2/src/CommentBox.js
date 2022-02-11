import React from "react";

import Faker from 'faker';



function CommentBox(props){
console.log(props)
    
    return(
      <div class="ui cards">
  <div class="card">
    <div class="content">
      <img class="right floated mini ui image" src={Faker.image.image()}/>
      <div class="header">
        Jenny Lawrence
      </div>
      <div class="meta">
        New User
      </div>
      <div class="description">
        Jenny requested permission to view your contact details
      </div>
    </div>
  </div>
 </div>
        
      
  
    )
}
export default CommentBox;