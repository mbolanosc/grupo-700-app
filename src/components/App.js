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
const  MultiselectDataTema =
  ['Familiar','Adicciones','Finanzas','Sanidad','Problemas emocionales','Vida cristiana'];
const MultiselectDataMotivo = [
      'Oración','Testimonio','Ofrenda','Consejería','Otro'];
const Styles = {
  defaultBackground:{
    backgroundColor:'#E7E7E7'
  },
  successBackground:{
    backgroundColor:'#D3E9BA'
  }
};
const testData = {
  Personas:[
    {
    'name' : 'rebe',
    'apellidos': 'Miccuci',
    'celular': '89500481',
    'email': 'rebe@gmai.com'
  },
  {
    'name':'diego',
    'apellidos':'Bolanos',
    'celular': '12345678',
    'email': 'diego@gmai.com'
  }
]}
const initialState = {
  cronometerStatus: 0,
  cronometerEnd: 0,
  cronometerSaveTime: '',

  mainBackground:Styles.defaultBackground,
  userChoise:'',
  FoundSomeOne:false,

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
  EmailCorrectSyntax:false,

  userBornDate:'',
  userBornDateErrorState : false,

  userResidence:'',
  userResidenceErrorState : false,

  userResumen:'',
  userResumenErrorState : false,

  userTema:'',
  userTemaErrorState : false,

  userMotivo:'',
  userMotivoErrorState : false,
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
    this.handleUserBornDate = this.handleUserBornDate.bind(this);
    this.handelUserResidence = this.handelUserResidence.bind(this);
    this.handleResumen = this.handleResumen.bind(this);
    this.handleMotivo=this.handleMotivo.bind(this);

    this.handleTema = this.handleTema.bind(this);
    this.handleSave = this.handleSave.bind(this);

  }
  handleChangeUserHomePhone(e) {
    this.setState({userHomePhone: e.target.value});
    this.validateEmpty(e.target.value);
  }
  handleChangeUserPhone(e) {
    this.setState({userPhone: e.target.value});
    this.validateEmpty(e.target.value);
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
    var validLengthHomePhone = this.validateLengthNumber(this.state.userHomePhone);

    var validPhone =  this.validateEmpty(this.state.userPhone);
    var validNumberPhone = this.validateNumber(this.state.userPhone);
    var validLengthPhone = this.validateLengthNumber(this.state.userPhone);

    var validOfficePhone =  this.validateEmpty(this.state.userOfficePhone);
    var validNumberOfficePhone = this.validateNumber(this.state.userOfficePhone);
    var validLengtOfficePhone = this.validateLengthNumber(this.state.userOfficePhone);


    if( (validHomePhone && !validNumberHomePhone && validLengthHomePhone)
        || (validPhone && !validNumberPhone && validLengthPhone)
        || (validOfficePhone && !validNumberOfficePhone && validLengtOfficePhone)
      ){
      console.log('base de datos');
      const AppComponent = this;
      testData.Personas.map(function(persona){
        if(persona.celular === AppComponent.state.userPhone){
          AppComponent.setState({userName: persona.name, userFirstLastName: persona.apellidos, userEmail: persona.email});
          AppComponent.setState({mainBackground: Styles.successBackground});
          AppComponent.setState({FoundSomeOne: true},function(){
            var foundSomebody = AppComponent.state.FoundSomeOne;
            console.log('foundSomebody true: ', foundSomebody); //true
            if (true) {
              console.log('es true el state');
              Alert.success('Usuario encontrado!', {
                position: 'top-right',
                effect: 'jelly'
              });
            }}.bind(this));
        }else{
          AppComponent.setState({FoundSomeOne: false}, function(){
            var foundSomebody = AppComponent.state.FoundSomeOne;
            console.log('foundSomebody false: ', foundSomebody); //false

          }.bind(this));
        }
      });

    }else{
      console.log('no entra');
      Alert.error('Datos incorrectos.', {
        position: 'top-right',
        effect: 'jelly'
      });
      this.setState({userHomePhoneErrorState: true});
      this.setState({userPhoneErrorState: true});
      this.setState({userOfficePhoneErrorState: true});
    }
  }

  handleChangeUserName(e){
    this.setState({userName: e.target.value});
    this.validateEmpty(e.target.value);
  }
  handleChangeUserFirstLastName(e){
    this.setState({userFirstLastName: e.target.value});
    this.validateEmpty(e.target.value);
  }
  handleChangeUserSecondLastName(e){
    this.setState({userSecondLastName: e.target.value});
    this.validateEmpty(e.target.value);
  }
  handleUserEmail(e){
    this.setState({userEmail: e.target.value});
    this.validateEmail(e.target.value);
  }
  handleUserBornDate(e){
    this.setState({userBornDate: e.target.value});
  }
  handelUserResidence(e){
    this.setState({userResidence: e.target.value});
    //this.validateEmpty(e.target.value);
  }
  handleResumen(e){
    this.setState({userResumen: e.target.value});
  }

  handleTema(e){
    this.setState({userTema: e});
    console.log('userTema '  , this.state.userTema);
  }
  handleMotivo(e){
    this.setState({userMotivo: e});
    console.log('userMotivo '  , this.state.userMotivo);
  }
  handleSave(e){
    e.preventDefault();
    console.log('save btn');

    var validName =  this.validateEmpty(this.state.userName);
    var validFirstLastName =  this.validateEmpty(this.state.userFirstLastName);
    var validSecondLastName =  this.validateEmpty(this.state.userSecondLastName);
    var validEmail=  this.state.EmailCorrectSyntax;
    var validBornDate=  this.validateEmpty(this.state.userBornDate);
    var validResidence=  this.validateEmpty(this.state.userResidence);
    var validResume=  this.validateEmpty(this.state.userResumen);
    var validTema=  this.validateEmpty(this.state.userTema);
    var validMotivo=  this.validateEmpty(this.state.userMotivo);

    if(validName
      && validFirstLastName
      && validSecondLastName
      && validEmail
      && validBornDate
      && validResidence
      && validResume
      && validTema
      && validMotivo
    ){
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
      this.setState({userBornDateErrorState: true});
      this.setState({userResidenceErrorState: true});
      this.setState({userResumenErrorState: true});
      this.setState({userTemaErrorState: true});
      this.setState({userMotivoErrorState: true});
    }
  }

  validateEmpty(value){
    var valid = true;
    if(value === ''){
      valid = false;
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
  validateLengthNumber(value){
    var x = value.length;
    var valid = false;
    if (x === 8) {
      valid = true;
    }
    return valid;
  }

  render() {
    return (
      <div className="app-container" style={this.state.mainBackground}>
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

          cronometerStatus={this.state.cronometerStatus}
          cronometerSaveTime={this.state.cronometerSaveTime}
          cronometerFunction={this.cronometerFunction}

          onClickBtn={this.handleSearch}
        />

        <Grid className="left-component">
  				<Row className="show-grid">
  					<Col md={6} mdPush={6}>
              <Rightform
                dataTema={MultiselectDataTema}
                TemaOnChange={this.handleTema}
                userTema={this.state.userTema}
                userTemaErrorState={this.state.userTemaErrorState}

                dataMotivo={MultiselectDataMotivo}
                MotivoOnChange={this.handleMotivo}
                userMotivo={this.state.userMotivo}
                userMotivoErrorState={this.state.userMotivoErrorState}

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

                userEmail={this.state.userEmail}
                userEmailErrorState={this.state.userEmailErrorState}
                userEmailOnChange={this.handleUserEmail}
                EmailCorrectSyntax={this.state.EmailCorrectSyntax}

                userBornDate={this.state.userBornDate}
                userBornDateErrorState={this.state.userBornDateErrorState}
                userBornDateOnChange={this.handleUserBornDate}

                userResidence={this.state.userResidence}
                userResidenceErrorState={this.state.userResidenceErrorState}
                userResidenceOnChange={this.handelUserResidence}

                userResumen={this.state.userResumen}
                userResumenErrorState={this.state.userResumenErrorState}
                userResumenOnChange={this.handleResumen}

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
