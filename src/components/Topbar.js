import React, {Component} from 'react';
import { Navbar, FormGroup, FormControl, Button,  Col,Glyphicon} from 'react-bootstrap';
import SelectList from 'react-widgets/lib/SelectList';


class Topbar extends Component{
  getValidationLenghtHomePhone(){
    if (this.props.stateHouseNumber.length === 8){
      return 'success';
    } else if (this.props.stateHouseNumber.length === 5){
      return 'warning';
    } else if (this.props.stateHouseNumber.length > 8){
      return 'error';
    }
    else if (this.props.stateHouseNumber.length < 0) {
      return 'error';
    }else if (this.props.validateErrorHomePhone) {
      return 'warning';
    }
  }
  getValidationLenghtPhone() {
    if (this.props.statePhoneNumber.length === 8){
      return 'success';
    }
    else if (this.props.statePhoneNumber.length === 5){
      return 'warning';
    }
    else if (this.props.statePhoneNumber.length > 8){
      return 'error';
    }
    else if (this.props.statePhoneNumber.length < 0){
      return 'error';
    }else if (this.props.validateErrorPhone) {
      return 'warning';
    }
  }
  getValidationLenghtOfficePhone(){
    if (this.props.statePhoneOfficeNumber.length === 8){
      return 'success';
    }
    else if (this.props.statePhoneOfficeNumber.length === 5){
      return 'warning';
    }
    else if (this.props.statePhoneOfficeNumber.length > 8){
      return 'error';
    }
    else if (this.props.statePhoneOfficeNumber.length < 0){
      return 'error';
    }else if (this.props.validateErrorOfficePhone) {
      return 'warning';
    }
  }
  render(){
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
           <FormGroup>
            <SelectList
              defaultValue={["Buscar"]}
              data={this.props.selecListData}
              onChange={this.props.onChangeRadioBtns}
            />

             </FormGroup>
             {' '}
             {' '}

            <FormGroup validationState={this.getValidationLenghtHomePhone()}>
              <FormControl
                type="text"
                placeholder="Número de casa"
                value={this.props.stateHouseNumber}
                onChange={this.props.onChangeHouseNumber}
              />
              <FormControl.Feedback/>
            </FormGroup>
            {' '}

            <FormGroup validationState={this.getValidationLenghtPhone()}>
              <FormControl
                placeholder="Número de celular"
                value={this.props.statePhoneNumber}
                onChange={this.props.onChangePhoneNumber}
              />
              <FormControl.Feedback/>
            </FormGroup>
             {' '}

            <FormGroup validationState={this.getValidationLenghtOfficePhone()}>
              <FormControl
                type="text"
                placeholder="Número de oficina"
                value={this.props.statePhoneOfficeNumber}
                onChange={this.props.onChangePhoneOfficeNumber}
              />
              <FormControl.Feedback/>
            </FormGroup>
             {' '}
            <Button
              type="submit"
              onClick={this.props.onClickBtn}>Buscar</Button>
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
