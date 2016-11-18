import React, { Component } from 'react';
import '../css/App.css';
import Topbar from './Topbar';
import Leftform from './Leftform';
import Rightform from './Rightform';
import {Row,Col,Grid} from 'react-bootstrap';
import 'react-widgets/dist/css/react-widgets.css';
import 'react-widgets/dist/react-widgets.js';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';
import 'react-s-alert/dist/s-alert-default.css';


const  userChoiseData = ['Nuevo' , 'Buscar'];
const initialState = {
  userChoise:'',

  userHomePhone:'',
  userHomePhoneErrorState: false,

  userPhone:'',
  userPhoneErrorState: false,

  userOfficePhone:'',
  userOfficePhoneErrorState: false,
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChangeUserHomePhone = this.handleChangeUserHomePhone.bind(this);
    this.handleChangeUserPhone = this.handleChangeUserPhone.bind(this);
    this.handleChangeUserOfficePhone = this.handleChangeUserOfficePhone.bind(this);
    this.handleChangeCheckButtons= this.handleChangeCheckButtons.bind(this);

    this.handleSearch = this.handleSearch.bind(this);

  }
  handleChangeUserHomePhone(e) {
    this.setState({userHomePhone: e.target.value});
    this.validateEmpty(e.target.value);
    console.log('telefono de la casa ' , this.state.userHomePhone);
  }
  handleChangeUserPhone(e) {
    this.setState({userPhone: e.target.value});
    this.validateEmpty(e.target.value);
    console.log('telefono celular' , this.state.userPhone);
  }
  handleChangeUserOfficePhone(e){
    this.setState({userOfficePhone: e.target.value});
    this.validateEmpty(e.target.value);
    console.log('telefono de oficina' , this.state.userOfficePhone);
  }
  handleChangeCheckButtons(e){
    this.setState({userChoise: e});
    console.log(e);
  }
  handleSearch(e){
    e.preventDefault();
    console.log('save btn');

    var validHomePhone =  this.validateEmpty(this.state.userHomePhone);
    var validNumberHomePhone = this.validateNumber(this.state.userHomePhone);

    var validPhone =  this.validateEmpty(this.state.userPhone);
    var validNumberPhone = this.validateNumber(this.state.userPhone);

    var validOfficePhone =  this.validateEmpty(this.state.userOfficePhone);
    var validNumberOfficePhone = this.validateNumber(this.state.userOfficePhone);


    console.log('tiene que dar true ' + validOfficePhone);
    console.log('tiene que dar false ' + validNumberOfficePhone);

    if( (validHomePhone && !validNumberHomePhone)
        || (validPhone && !validNumberPhone)
        || (validOfficePhone && !validNumberOfficePhone)
      ){
      console.log('base de datos');
      Alert.success('Usuario encontrado!', {
        position: 'top-right',
        effect: 'jelly'
      });
    }else{
      console.log('no entra');
      Alert.warning('Espacios vacios!', {
        position: 'top-right',
        effect: 'jelly'
      });
      this.setState({userHomePhoneErrorState: true});
      this.setState({userPhoneErrorState: true});
      this.setState({userOfficePhoneErrorState: true});
      console.log('estado de error ' + this.state.userPhoneErrorState);
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
    console.log('initialState ', initialState);
    return (
      <div className="app-container">
        <Topbar
          selecListData={userChoiseData}
          stateRadioBtns={initialState.userHomePhone}
          onChangeRadioBtns={this.handleChangeCheckButtons}

          stateHouseNumber = {this.state.userHomePhone}
          onChangeHouseNumber={this.handleChangeUserHomePhone}
          validateErrorHomePhone = {this.state.userHomePhoneErrorState}

          statePhoneNumber = {this.state.userPhone}
          onChangePhoneNumber={this.handleChangeUserPhone}
          validateErrorPhone = {this.state.userPhoneErrorState}

          statePhoneOfficeNumber = {this.state.userOfficePhone}
          onChangePhoneOfficeNumber={this.handleChangeUserOfficePhone}
          validateErrorOfficePhone = {this.state.userOfficePhoneErrorState}

          onClickBtn = {this.handleSearch}



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
        <Alert stack={{limit: 3}} />
      </div>
    );
  }
}

export default App;
