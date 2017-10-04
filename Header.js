import React from 'react'
import { Button,  ButtonGroup, PageHeader} from 'react-bootstrap';
import { render } from 'react-dom';

export default class MyGermany extends React.Component {

  render() {
    return <div>
      <header>
        <PageHeader>Gute Raise! <small>Connect between tourists and local people</small></PageHeader>
        <ButtonGroup justified>
        <Button href="http://localhost:8080/#/myprofile?_k=mrmiwk">My profile</Button>
       <Button href="http://localhost:8080/#/about?_k=ybh5au">Prep for Germany</Button>
      <Button href="http://localhost:8080/#/searchpartner?_k=lhlql7">Look for a Tandem Partner</Button>
      <Button href="http://localhost:8080/#/mygermany?_k=if77ga">My Germany</Button>
    </ButtonGroup>
   </header>
   </div>
  }
}