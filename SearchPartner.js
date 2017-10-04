import React from 'react'
import {Pager, FieldGroup, FormGroup, Checkbox} from 'react-bootstrap';
import { render } from 'react-dom';

export default class SearchPartner extends React.Component {

  render() {
    return <div>Look for a Tandem Partner
      <Pager>
    <Pager.Item href="#">Previous</Pager.Item>
    {' '}
    <Pager.Item href="#">Next</Pager.Item>
  </Pager>
    </div>
  }
}