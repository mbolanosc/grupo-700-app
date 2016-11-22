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

  userName:'',
  userNameErrorState : false,

  userFirstLastName:'',
  userFirstLastNameErrorState : false,

  userSecondLastName:'',
  userSecondLastNameErrorState : false,

  userEmail:'',
  userEmailErrorState : false,
  EmailCorrectSyntax:false
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

    this.handleChangeUserName = this.handleChangeUserName.bind(this);
    this.handleChangeUserFirstLastName = this.handleChangeUserFirstLastName.bind(this);
    this.handleChangeUserSecondLastName = this.handleChangeUserSecondLastName.bind(this);
    this.handleUserEmail = this.handleUserEmail.bind(this);
    this.handleSave = this.handleSave.bind(this);

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
    console.log('search btn');

    var validHomePhone =  this.validateEmpty(this.state.userHomePhone);
    var validNumberHomePhone = this.validateNumber(this.state.userHomePhone);

    var validPhone =  this.validateEmpty(this.state.userPhone);
    var validNumberPhone = this.validateNumber(this.state.userPhone);

    var validOfficePhone =  this.validateEmpty(this.state.userOfficePhone);
    var validNumberOfficePhone = this.validateNumber(this.state.userOfficePhone);

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

  handleChangeUserName(e){
    this.setState({userName: e.target.value});
    this.validateEmpty(e.target.value);
    console.log('name '  + this.state.userName);
  }
  handleChangeUserFirstLastName(e){
    this.setState({userFirstLastName: e.target.value});
    this.validateEmpty(e.target.value);
    console.log('userFirstLastName '  + this.state.userFirstLastName);
  }
  handleChangeUserSecondLastName(e){
    this.setState({userSecondLastName: e.target.value});
    this.validateEmpty(e.target.value);
    console.log('userSecondLastName '  + this.state.userSecondLastName);
  }
  handleUserEmail(e){
    this.setState({userEmail: e.target.value});
    this.validateEmail(e.target.value);
    console.log('USERNAME! '  + this.state.userEmail);

  }
  handleSave(e){
    e.preventDefault();
    console.log('save btn');

    var validName =  this.validateEmpty(this.state.userName);
    var validFirstLastName =  this.validateEmpty(this.state.userFirstLastName);
    var validSecondLastName =  this.validateEmpty(this.state.userSecondLastName);
    var validEmail =  this.validateEmpty(this.state.userEmail);

    if(validName && validFirstLastName && validSecondLastName && validEmail){
      console.log('entro');
      Alert.success('Contacto guardado!', {
        position: 'top-right',
        effect: 'jelly'
      });
    }else{
      console.log('no entra');
      Alert.error('Espacios vacios!', {
        position: 'top-right',
        effect: 'jelly'
      });
      this.setState({userNameErrorState: true});
      this.setState({userFirstLastNameErrorState: true});
      this.setState({userSecondLastNameErrorState: true});
      this.setState({userEmailErrorState: true});

    }
  }

  validateEmpty(value){
    var valid = true;
    if(value === ''){
      valid = false;
      console.log('esta vacio');
    }else{
      console.log('no esta vacio');
    }
    return valid;
  }
  validateNumber(value){
    var res = isNaN(value);
    return res;
  }
  validateEmail(value){
    var x = value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
      console.log('el state que me importa ' + this.state.EmailCorrectSyntax);
    }else{
      this.setState({EmailCorrectSyntax:true});
      console.log('el state que me importa ' + this.state.EmailCorrectSyntax);
    }
  }





  render() {
    console.log('initialState ', initialState);
    return (
      <div className="app-container">
        <Topbar
          selecListData={userChoiseData}
          stateRadioBtns={initialState.userHomePhone}
          onChangeRadioBtns={this.handleChangeCheckButtons}

          stateHouseNumber={this.state.userHomePhone}
          onChangeHouseNumber={this.handleChangeUserHomePhone}
          validateErrorHomePhone={this.state.userHomePhoneErrorState}

          statePhoneNumber={this.state.userPhone}
          onChangePhoneNumber={this.handleChangeUserPhone}
          validateErrorPhone={this.state.userPhoneErrorState}

          statePhoneOfficeNumber={this.state.userOfficePhone}
          onChangePhoneOfficeNumber={this.handleChangeUserOfficePhone}
          validateErrorOfficePhone={this.state.userOfficePhoneErrorState}

          onClickBtn={this.handleSearch}
        />

        <Grid className="left-component">
  				<Row className="show-grid">
  					<Col md={6} mdPush={6}>
              <Rightform
              />
            </Col>
  					<Col md={6} mdPull={6}>
              <Leftform
                userName={this.state.userName}
                userNameOnchange={this.handleChangeUserName}
                userNameErrorState={this.state.userNameErrorState}

                userFirstLastName={this.state.userFirstLastName}
                userFirstLastNameErrorState={this.state.userFirstLastNameErrorState}
                userFirstLastNameOnchage={this.handleChangeUserFirstLastName}

                userSecondLastName={this.state.userSecondLastName}
                userSecondLastNameErrorState={this.state.userSecondLastNameErrorState}
                userSecondLastNameOnchage={this.handleChangeUserSecondLastName}

                userEmail= {this.state.userEmail}
                userEmailErrorState={this.state.userEmailErrorState}
                userEmailOnChange={this.handleUserEmail}
                EmailCorrectSyntax={this.state.EmailCorrectSyntax}




                onClickSave={this.handleSave}

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
