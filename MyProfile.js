import React from 'react'
import { Link } from 'react-router'
import { Button,  ButtonGroup, Media} from 'react-bootstrap';
import { render } from 'react-dom';

export default class MyProfile extends React.Component {

  render() {
    return <div>My profile
       <Media>
     <Media.Left>
        <img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
      </Media.Left>
      <Media.Body>
        <Media.Heading>自己紹介</Media.Heading>
        <p>卒業旅行でドイツに行き大好きになりました。いろいろなドイツ人とあってドイツをもっと知りたいです。</p>
      </Media.Body>
    </Media>
    <Button bsStyle="info">保存</Button>
    <Button bsStyle="warning">登録</Button>
    <Button bsStyle="danger">削除</Button>
    </div>
  }
}