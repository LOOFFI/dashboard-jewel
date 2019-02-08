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
        <div id="first">Ceci est un exercice</div>
        <div id="second">Voici le dashboard</div>
        <div id="third">This is the effect</div>
      </div>
      
      );
  }
}
 
export default Header;