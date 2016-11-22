import React, {Component} from 'react';
import {Row,Col,FormGroup,ControlLabel,FormControl,Form,Radio,Panel,Button
} from 'react-bootstrap';

class Leftform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userNamePristine: true
    }
  }
  ValidLenghtName() {
    if (this.props.userName.length >= 3) {
      return 'success';
    } else if (this.props.userName.length === 2) {
      return 'warning';
    } else if (this.props.userName.length === 1) {
      return 'error';
    } else if (this.props.userNameErrorState) {
      return 'error';
    }
  }
  ValidLengthLastName(){
    if (this.props.userFirstLastName.length >= 3) {
      return 'success';
    } else if (this.props.userFirstLastName.length === 2) {
      return 'warning';
    } else if (this.props.userFirstLastName.length === 1) {
      return 'error';
    } else if (this.props.userFirstLastNameErrorState) {
      return 'error';
    }
  }
  ValidateSecondLastName(){
    if (this.props.userSecondLastName.length >= 3) {
      return 'success';
    } else if (this.props.userSecondLastName.length === 2) {
      return 'warning';
    } else if (this.props.userSecondLastName.length === 1) {
      return 'error';
    } else if (this.props.userSecondLastNameErrorState) {
      return 'error';
    }
  }
  ValidateEmail(){
    console.log('EmailCorrectSyntax!!!' , this.props.EmailCorrectSyntax);
      if (this.props.userEmail.length >= 4 && this.props.EmailCorrectSyntax) {
        return 'success';
      } else if (this.props.userEmail.length === 1 && !this.props.EmailCorrectSyntax) {
        return 'error';
      } else if (this.props.userEmailErrorState) {
        return 'error';
      }
  }


    render() {
      console.log('PROPS' , this.props);
      return (
        <div className="left-form-container">
          <Row className="show-grid">
            <Col xs={6} md={4}>
              <Form horizontal>
                <FormGroup validationState={this.ValidLenghtName()}>
                  <Col componentClass={ControlLabel} sm={4}>Nombre</Col>
                  <Col sm={12}>
                    <FormControl
                      type="text"
                      placeholder="Nombre" value={this.props.userName} onChange={this.props.userNameOnchange}/>
                    <FormControl.Feedback/>
                  </Col>
                </FormGroup>
              </Form>
            </Col>

            <Col xs={6} md={4}>
              <Form horizontal>
                <FormGroup validationState={this.ValidLengthLastName()}>
                  <Col componentClass={ControlLabel} sm={6}>Apellidos</Col>
                  <Col sm={12}>
                    <FormControl
                      type="text"
                      placeholder="Primer apellido"
                      value={this.props.userFirstLastName}
                      onChange={this.props.userFirstLastNameOnchage}/>
                    <FormControl.Feedback/>
                  </Col>
                </FormGroup>
              </Form>
            </Col>

            <Col xs={6} md={4}>
              <Form horizontal>
                <FormGroup validationState={this.ValidateSecondLastName()}>
                  <Col componentClass={ControlLabel} sm={6}>Apellidos</Col>
                  <Col sm={12}>
                    <FormControl
                      type="text"
                      placeholder="Segundo apellido"
                      value={this.props.userSecondLastName}
                      onChange={this.props.userSecondLastNameOnchage}/>
                    <FormControl.Feedback/>
                  </Col>
                </FormGroup>
              </Form>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Panel header="Estadisticas de contacto">
                <Col md={9}>
                  Basic panel example
                </Col>
                <Col md={3}>
                  <Button bsStyle="default">Llamadas</Button>
                </Col>
              </Panel>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={6} md={4}>
              <Form horizontal>
                <FormGroup validationState={this.ValidateEmail()}>
                  <Col componentClass={ControlLabel} sm={4}>Email</Col>
                  <Col sm={12}>
                    <FormControl
                      type="email"
                      placeholder="Correo electronico"
                      value={this.props.userEmail}
                      onChange={this.props.userEmailOnChange}
                    />
                    <FormControl.Feedback/>
                  </Col>
                </FormGroup>
              </Form>
            </Col>

            <Col xs={6} md={4}>
              <Form horizontal>
                <FormGroup>
                  <Col componentClass={ControlLabel} sm={4}>Nacimiento</Col>
                  <Col sm={12}>
                    <FormControl type="date"/>
                    <FormControl.Feedback/>
                  </Col>
                </FormGroup>
              </Form>
            </Col>

            <Col xs={6} md={4}>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Estado civil</ControlLabel>
                <FormControl componentClass="select">
                  <option value="Soltero">Soltero</option>
                  <option value="Casado">Casado</option>
                </FormControl>
              </FormGroup>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={6} md={4}>
              <Form horizontal>
                <FormGroup >
                  <Col componentClass={ControlLabel} sm={4}>Residencia</Col>
                  <Col sm={12}>
                    <FormControl type="text" placeholder="Lugar de residencia"/>
                  </Col>
                  <FormControl.Feedback/>
                </FormGroup>
              </Form>
            </Col>

            <Col xs={6} md={4}>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Provincia</ControlLabel>
                <FormControl componentClass="select">
                  <option value="Alajuela">Alajuela</option>
                  <option value="Cartago">Cartago</option>
                  <option value="Guanacaste">Guanacaste</option>
                  <option value="Heredia">Heredia</option>
                  <option value="Limón">Limón</option>
                  <option value="Puntarenas">Puntarenas</option>
                  <option value="San José">San José</option>
                </FormControl>
              </FormGroup>
            </Col>

            <Col xs={6} md={4}>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Como obtuvo el número</ControlLabel>
                <FormControl componentClass="select">
                  <option value="TV">TV</option>
                </FormControl>
              </FormGroup>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={6} md={4}>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Medio</ControlLabel>
                <FormControl componentClass="select">
                  <option value="Club 700 Hoy Enlace">Club 700 Hoy Enlace</option>
                </FormControl>
              </FormGroup>
            </Col>

            <Col xs={6} md={4}>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Quiere ser socio?</ControlLabel>
                <FormControl componentClass="select">
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </FormControl>
              </FormGroup>
            </Col>

            <Col xs={6} md={4}>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Género</ControlLabel>
                <FormControl componentClass="select">
                  <option value="Femenino">Femenino</option>
                  <option value="Masculino">Masculino</option>
                </FormControl>
              </FormGroup>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col md={8}>
              <FormGroup >
                <ControlLabel>Resumen del caso</ControlLabel>
                <FormControl componentClass="textarea"/>
                <FormControl.Feedback/>
              </FormGroup>
            </Col>

            <Col md={4}>

              <Radio >
                Es cristiano?
              </Radio>

              <Row className="show-grid">
                <Button className="bottom-btn" bsStyle="info" onClick={this.props.onClickSave}>Guardar</Button>
              </Row>

              <br></br>
              <Row className="show-grid">
                <Button className="bottom-btn" bsStyle="info">Limpiar</Button>
              </Row>
            </Col>
          </Row>
        </div>
      )
    }
  }
  export default Leftform;
