// modules/App.js
import React from 'react'
import { Link } from 'react-router'
import { Button,  ButtonGroup, PageHeader} from 'react-bootstrap';
import { render } from 'react-dom';

export default class App extends React.Component {
//   constructor(props) {
//   super(props);
//   this.eClick = this.eClick.bind(this);
// }
  // onChange() {
  //   this.props.router.push('/about');
  // }
  render() {
    return (
      <div>
        <ul role="nav">
          <li><Link to="/myprofile">My Profile</Link></li>
          <li><Link to="/about">Prep for Germany</Link></li>
          <li><Link to="/mygermany">My Germany</Link></li>
          <li><Link to="/searchpartner">Look for a Tandem Partner</Link></li>          
        </ul>

        {/* add this */}
        {this.props.children}
      </div>
    )
  }
}
render(<App />, document.querySelector('#app'));