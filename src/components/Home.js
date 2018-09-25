import React, { Component } from 'react';
import './Home.css';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <div id="wraper">
         <div id="header">
          <div id="head"> Simple 
           <div id="para">
          This is the last paragraph
            </div>
          </div>
            <div id="menu">
            <NavLink to="/About" class="active"> Home </NavLink> 
            <NavLink to="/Services" class="active"> Services </NavLink>   
          <NavLink to="/Gallery" class="active">  Gallary </NavLink> 
          <NavLink to="/Contact" class="active"> Company </NavLink> 
          <NavLink to="Services" class="active"> About </NavLink> 
           
           </div>
          </div>
        
        <div id="slider">
          <div id="image">  </div>
          <div id="rightpara">  <span id="heading2">Lorem Ipsum dolor sit amet, consectetur adipiscingn elit,</span> 
             <span id="para2"> Aliquam diagram elementum eat sit amet,<br/>Integer pretium uliters rises going,<br/> comodatiopn molestio emusied.   </span>
         <div id="btn">  <button> Read More  </button>  </div>
          </div>
         </div>
       <div id="bodyleft">  
       <h1 id="hea"> <span id="gre"> Welcome </span> to our WEBSITE! </h1>
      <span id="bodypara1"> Simple Grey is a Professional XHTML'CSS file Layout <u>free of cost</u> fer the student by the w3school.com. They can use the content of their<u> website</u> for the personal use.  </span> 
        <span id="bodypara2">  Requirements analysis
           Conceptual database design: develop high level description
            Logical database design: map description into the specific DBMS
            Schema refinement: identify and  potential problems
            Physical database design.
        </span>
        <span id="bodypara3"> <li> Storing redundant information in a database results in:
          Waste of space
          Data that may not &nbsp &npsb be correctly updated
          Data that can not be Inserted.</li>
            <br /><br />
         <li> unless other data is also inserted
          Relationship Association between two entities  <p> Relationship  set
          Data that is incidentally lost when other data is remove </p> </li>
        </span>
        <span id="bodypara4">  Relationship set
          Group of similar relationships
          Descriptive attributes
          can identify a relationsip
          relationship can be identified as one-to-many many-to-many one-to-one Redundancy
          Storing redundant information in a database results in Waste of space <br/>
          Data that may not be correctly updated
          Data that can not be inserted unless other data is also inserted
          Data that is the lost when other data is remove
           </span>
        </div>
        
       <div id="bodyright"> 
       <div id="righthead"> <h1> Latest News</h1> </div>
        
        <div id="item1" class="news">
        <div id="pic1"> </div>
        <span id="picpara1"> <p>Oct 24, 2018</p>  <p> <b>Lorem Ipsum dealer set</b></p> <p>
          Data that can not be inserted unless other data is also data.</p> </span>
        </div>
        
        <div id="item2" class="news">
        <div id="pic1">  </div>
        <span id="picpara1"> <p>Oct 24, 2018</p>  <p> <b>Lorem Ipsum dealer set</b></p> <p>
          Data that can not be inserted unless other data is also data.</p> </span>
        </div>
        <div id="item2" class="news">
        <div id="pic1">  </div>
        <span id="picpara1"> <p>Oct 24, 2018</p>  <p> <b>Lorem Ipsum dealer set</b></p> <p>
          Data that can not be inserted unless other data is also data.</p> </span>
        </div>
        </div>
        
       <div id="last">  </div>
           <div id="last2"> </div>
           <br clear="all" />
    </div>
    
    );
  }
}

export default App;
