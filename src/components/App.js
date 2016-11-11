import React, { Component } from 'react';
import '../css/App.css';
import Topbar from './Topbar';
import Leftform from './Leftform';
import Rightform from './Rightform';
import {Row,Col,Grid} from 'react-bootstrap';
import 'react-widgets/dist/css/react-widgets.css'
import 'react-widgets/dist/react-widgets.js'



class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Topbar/>
        <Grid className="left-component">
  				<Row className="show-grid">
  					<Col md={6} mdPush={6}>
              <Rightform/>
            </Col>
  					<Col md={6} mdPull={6}>
              <Leftform/>
            </Col>
  				</Row>
  			</Grid>
      </div>
    );
  }
}

export default App;
