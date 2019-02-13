import React from 'react';
import { Nav, NavLink, NavItem } from 'reactstrap'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      
      <div class="under">
        <div id="first">
        <p>Ceci.est.un.exercice</p>
        </div>
        
        <div id="second"><p>Voici.le.dashboard</p></div>
        <div id="third"><p>This.is.the.effect</p></div>
      </div>
      
      );
  }
}
 
export default Header;