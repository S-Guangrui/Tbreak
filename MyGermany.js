import React from 'react'
import {FormGroup,  ControlLabel, FormControl, Col, Row, Grid, Thumbnail, Button, Popover} from 'react-bootstrap';

export default class MyGermany extends React.Component {

  render() {
    return <div>
      My Germany
      <Grid>
    <Row>
    <Col xs={6} md={4}>
      <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
        <h3>ドイツ人あるある</h3>
        <p>自分の意見を投稿できるように実装する</p>
        <p>
          <Button bsStyle="primary">コメントする</Button>;
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
        <h3>ドイツ流愛の育て方</h3>
        <p>1行につき３つ表示する。ブログのように重たいのではなく気軽に意見交換ができる場を！
          シンプルに読めるように２００字以内など制限を設ける。
        </p>
        <p>
          <Button bsStyle="default">コメントする</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
        <h3>専攻と将来</h3>
        <p>コメントするボタンを押したら、ボタンは消えてフォームが現れる。フォームの横に投稿マークをおいてクリックしたら
          自分のコメントが投稿できるように実装する。コメントは何件まで表示するのか？何件まで受け付けるのか？
        </p>
        <p>
          <Button bsStyle="primary">Button</Button>&nbsp;
          <Button bsStyle="default">Button</Button>
        </p>
      </Thumbnail>
    </Col>
    </Row>
  </Grid>
  
      <FormGroup controlId="formControlsTextarea">
      <ControlLabel>My memories</ControlLabel>
      <FormControl componentClass="textarea" placeholder="Let's post!!" />
    </FormGroup>
    <Popover
      id="popover-basic"
      placement="right"
      positionLeft={200}
      positionTop={50}
      title="コメント"
    >
      これでコメントを表示する
    </Popover>
   </div>
  }
}