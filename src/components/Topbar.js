import React, {Component} from 'react';
import { Navbar, FormGroup, FormControl, Button, Radio, Col,Glyphicon} from 'react-bootstrap';

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userHomePhone:'',
      userPhone:'',
      userOfficePhone:''
    };
    this.handleChangeUserHomePhone = this.handleChangeUserHomePhone.bind(this);
    this.handleChangeUserPhone = this.handleChangeUserPhone.bind(this);
    this.handleChangeUserOfficePhone = this.handleChangeUserOfficePhone.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }


  handleChangeUserHomePhone(e) {
    this.setState({userHomePhone: e.target.value});
    this.validateEmpty(e.target.value);
    console.log('telefono de la casa' + e.target.value);
  }
  handleChangeUserPhone(e) {
    this.setState({userPhone: e.target.value});
    this.validateEmpty(e.target.value)
    console.log('telefono celular' +e.target.value);
  }
  handleChangeUserOfficePhone(e) {
    this.setState({userOfficePhone: e.target.value});
    this.validateEmpty(e.target.value)
    console.log('telefono oficina' +e.target.value);
  }

  handleSearch(e){
    e.preventDefault();
    console.log('a!@#!@#!@#');
    var colorValidHomePhone = this.getValidationLenghtHomePhone(this.state.userHomePhone);
    var validHomePhone =  this.validateEmpty(this.state.userHomePhone);
    var validNumberHomePhone = this.validateNumber(this.state.userHomePhone);

    var colorValidPhone = this.getValidationLenghtPhone(this.state.userPhone);
    var validPhone =  this.validateEmpty(this.state.userPhone);
    var validNumberPhone = this.validateNumber(this.state.userPhone);

    var colorValidOfficePhone = this.getValidationLenghtOfficePhone(this.state.userOfficePhone);
    var validOfficePhone =  this.validateEmpty(this.state.userOfficePhone);
    var validNumberOfficePhone = this.validateNumber(this.state.userOfficePhone);


    if( ( validHomePhone && colorValidHomePhone === 'success' && validNumberHomePhone === false ) || ( colorValidPhone === 'success' && validPhone  && validNumberPhone === false) || (validOfficePhone && colorValidOfficePhone === 'success' && validNumberOfficePhone === false) ){
      console.log('entro a buscar en la base de datos');
    }else{
      console.log('no entra a la bd');
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
  getValidationLenghtHomePhone() {
    if (this.state.userHomePhone.length === 8) return 'success';
    else if (this.state.userHomePhone.length === 5) return 'warning';
    else if (this.state.userHomePhone.length > 8) return 'error';
    else if (this.state.userHomePhone.length < 0) return 'error';
  }
  getValidationLenghtPhone() {
    if (this.state.userPhone.length === 8) return 'success';
    else if (this.state.userPhone.length === 5) return 'warning';
    else if (this.state.userPhone.length > 8) return 'error';
    else if (this.state.userPhone.length < 0) return 'error';
  }
  getValidationLenghtOfficePhone() {
    if (this.state.userOfficePhone.length === 8) return 'success';
    else if (this.state.userOfficePhone.length >= 5) return 'warning';
    else if (this.state.userOfficePhone.length > 8) return 'error';
    else if (this.state.userOfficePhone.length < 0) return 'error';
  }



  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
           <FormGroup>
             <Radio inline>
               Nuevo
             </Radio>
             {' '}
             <Radio inline>
               Buscar
             </Radio>
             {' '}
           </FormGroup>
           {' '}
           {' '}
            <FormGroup validationState={this.getValidationLenghtHomePhone()}>
              <FormControl
                type="text"
                placeholder="Número de casa"
                value={this.state.userHomePhone}
                onChange={this.handleChangeUserHomePhone}
              />
              <FormControl.Feedback/>
            </FormGroup>
            {' '}

            <FormGroup validationState={this.getValidationLenghtPhone()}>
              <FormControl
                placeholder="Número de celular"
                value={this.state.userPhone}
                onChange={this.handleChangeUserPhone}
              />
              <FormControl.Feedback/>
            </FormGroup>
             {' '}

            <FormGroup validationState={this.getValidationLenghtOfficePhone()}>
              <FormControl
                type="text"
                placeholder="Número de oficina"
                value={this.state.userOfficePhone}
                onChange={this.handleChangeUserOfficePhone}/>
              <FormControl.Feedback/>
            </FormGroup>
             {' '}
            <Button type="submit" onClick={this.handleSearch}>Buscar</Button>
          </Navbar.Form>

          <Col id="navbar-cronometer">
            <div>
            <Glyphicon glyph="earphone" />
              Aqui va el cronometro
            </div>
          </Col>
        </Navbar.Collapse>
      </Navbar>

    )
  }
}
export default Topbar;
