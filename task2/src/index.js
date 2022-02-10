import React from "react";
import ReactDOM from "react-dom";
import Faker from 'faker';

function Comment(){

    return(
        <table className="ui very basic collapsing celled table">
        <thead>
          <tr><th>Employee</th>
          <th>Correct Guesses</th>
        </tr></thead>
        <tbody>
          <tr>
            <td>
              <h4 className="ui image header">
                <img src={Faker.image.image()}/>
                <div className="content">
                  Lena
                  <div className="sub header">Human Resources
                </div>
              </div>
            </h4></td>
            <td>
              22
            </td>
          </tr>
          <tr>
            <td>
              <h4 className="ui image header">
                <img src={Faker.image.image()}/>
                <div className="content">
                  Matthew
                  <div className="sub header">Fabric Design
                </div>
              </div>
            </h4></td>
            <td>
              15
            </td>
          </tr>
          <tr>
            <td>
              <h4 className="ui image header">
                <img src={Faker.image.image()}/>
                <div className="content">
                  Lindsay
                  <div className="sub header">Entertainment
                </div>
              </div>
            </h4></td>
            <td>
              12
            </td>
          </tr>
          <tr>
            <td>
              <h4 className="ui image header">
                <img src={Faker.image.image()}/>
                <div className="content">
                  Mark
                  <div className="sub header">Executive
                </div>
              </div>
            </h4></td>
            <td>
              11
            </td>
          </tr>
        </tbody>
      </table>
      
    )
}




ReactDOM.render(
    <>
    <Comment/>
    
     

    </>,
    document.getElementById("root")

);
