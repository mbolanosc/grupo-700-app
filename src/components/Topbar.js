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
    }else if (this.props.validateError) {
      return 'warning';
    }
  }
  render(){
    console.log('state desde componente top: ' , this.props);
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

            <FormGroup >
              <FormControl
                placeholder="Número de celular"

              />
              <FormControl.Feedback/>
            </FormGroup>
             {' '}

            <FormGroup>
              <FormControl
                type="text"
                placeholder="Número de oficina"

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
