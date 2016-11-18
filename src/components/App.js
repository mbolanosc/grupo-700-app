import React, { Component } from 'react';
import '../css/App.css';
import Topbar from './Topbar';
import Leftform from './Leftform';
import Rightform from './Rightform';
import {Row,Col,Grid} from 'react-bootstrap';
import 'react-widgets/dist/css/react-widgets.css'
import 'react-widgets/dist/react-widgets.js'

const  userChoiseData = ['Nuevo' , 'Buscar'];
const initialState = {
  userChoise:'',

  userHomePhone:'',
  userHomePhoneErrorState: false,
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChangeUserHomePhone = this.handleChangeUserHomePhone.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

  }
  handleChangeUserHomePhone(e) {
    this.setState({userHomePhone: e.target.value});
    this.validateEmpty(e.target.value);
    console.log('telefono de la casa ' , this.state.userHomePhone);
  }
  handleSearch(e){
    e.preventDefault();
    console.log('save btn');

    var validHomePhone =  this.validateEmpty(this.state.userHomePhone);
    var validNumberHomePhone = this.validateNumber(this.state.userHomePhone);
    console.log('validHomePhone ' + validHomePhone);
    console.log('validNumberHomePhone ' + validNumberHomePhone);
    if((validHomePhone && !validNumberHomePhone)){
      console.log('base de datos');
    }else{
      console.log('no entra');
      this.setState({userHomePhoneErrorState: true});
      console.log('estado de error ' + this.state.userHomePhoneErrorState);
    }
  }

  validateEmpty(value){
    var valid = true;
    if(value === ''){
      valid = false;
      console.log('esta vacio');
    }else {
      console.log('no esta vacio');
    }
    return valid;
  }
  validateNumber(value){
    var res = isNaN(value);
    return res;
  }


  render() {
    console.log('initialState', initialState);
    return (
      <div className="app-container">
        <Topbar
          selecListData={userChoiseData}
          stateRadio={initialState.userHomePhone}

          stateHouseNumber = {this.state.userHomePhone}
          onChangeHouseNumber={this.handleChangeUserHomePhone}

          onClickBtn = {this.handleSearch}
          validateError = {this.state.userHomePhoneErrorState}

        />

        <Grid className="left-component">
  				<Row className="show-grid">
  					<Col md={6} mdPush={6}>
              <Rightform
              />
            </Col>
  					<Col md={6} mdPull={6}>
              <Leftform
              />
            </Col>
  				</Row>
  			</Grid>
      </div>
    );
  }
}

export default App;
