import React, {Component} from 'react';
import {Row,Col,FormGroup,ControlLabel,FormControl,Form,Radio,Panel,Button} from 'react-bootstrap';


class Leftform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName:'',
      userNamePristine: true,
      userFirstLastName: '',
      userFirstLastPristine: true,
      userSecondLastName: '',
      userSecondLastPristine: true
    };
      this.handleChangeUserName = this.handleChangeUserName.bind(this);
      this.handleChangeFirstLastName = this.handleChangeFirstLastName.bind(this);
      this.handleChangeSecondLastName = this.handleChangeSecondLastName.bind(this);
      this.handleSave = this.handleSave.bind(this);
  }
  handleChangeUserName(e) {
    this.setState({userName: e.target.value});
    //this.validateEmpty(e.target.value);
    console.log('name '  + e.target.value);
  }
  handleChangeFirstLastName(e) {
    this.setState({userFirstLastName: e.target.value});
    //this.validateEmpty(e.target.value);
    console.log('name '  + e.target.value);
  }
  handleChangeSecondLastName(e) {
    this.setState({userSecondLastName: e.target.value});
    //this.validateEmpty(e.target.value);
    console.log('name '  + e.target.value);
  }


  handleSave(e){
    console.log('save');

  }

  validatePristine(value){
    switch (value){
      case 'inputname':
        this.setState({userNamePristine: false});
        this.ValidLenghtName();
      break;

      case 'inputFirstLastName':
        this.setState({userFirstLastPristine: false});
        this.validLengthFirstLastName();
      break;

      case 'inputSecondLastName':
        this.setState({userSecondLastPristine: false});
        this.validLengthSecondLastName();
      break;

      default:
        console.log('no se input');
      break;
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
  validateString(value){
    var valid = false;
    if(typeof value === "string"){
      valid = true;
    }
    return valid;
  }
  ValidLenghtName(){
    if(!this.state.userNamePristine ){
      if (this.state.userName.length >= 3) return 'success';
      else if (this.state.userName.length === 2) return 'warning';
      else if (this.state.userName.length < 1) return 'error';
    }
  }
  validLengthFirstLastName(){
    if(!this.state.userFirstLastPristine ){
      if (this.state.userFirstLastName.length >= 3) return 'success';
      else if (this.state.userFirstLastName.length === 2) return 'warning';
      else if (this.state.userFirstLastName.length < 1) return 'error';
    }
  }
  validLengthSecondLastName(){
    if(!this.state.userSecondLastPristine ){
      if (this.state.userSecondLastName.length >= 3) return 'success';
      else if (this.state.userSecondLastName.length === 2) return 'warning';
      else if (this.state.userSecondLastName.length < 1) return 'error';
    }
  }


  render() {
    return (
			<div className="left-form-container">
				<Row className="show-grid">
          <Col xs={6} md={4}>
            <Form horizontal >
    					<FormGroup validationState={this.ValidLenghtName()}>
    						<Col componentClass={ControlLabel} sm={4}>Nombre</Col>
    							<Col sm={12}>
    								<FormControl
                      type="text"
                      placeholder="Nombre"
                      value={this.state.userName}
                      onChange={this.handleChangeUserName}
                      onBlur={this.validatePristine.bind(this,'inputname')}
                    />
                      <FormControl.Feedback/>
    							</Col>
    					</FormGroup>
            </Form>
          </Col>

          <Col xs={6} md={4}>
            <Form horizontal>
              <FormGroup validationState={this.validLengthFirstLastName()}>
                <Col componentClass={ControlLabel} sm={6}>Apellidos</Col>
                <Col sm={12}>
                  <FormControl
                    type="text"
                    placeholder="Primer apellido"
                    value={this.state.userFirstLastName}
                    onChange={this.handleChangeFirstLastName}
                    onBlur={this.validatePristine.bind(this,'inputFirstLastName')}
                  />
                  <FormControl.Feedback/>
                </Col>
              </FormGroup>
            </Form>
          </Col>

            <Col xs={6} md={4}>
              <Form horizontal>
                <FormGroup validationState={this.validLengthSecondLastName()}>
                  <Col componentClass={ControlLabel} sm={6}>Apellidos</Col>
                  <Col sm={12}>
                    <FormControl
                      type="text"
                      placeholder="Segundo apellido"
                      value={this.state.userSecondLastName}
                      onChange={this.handleChangeSecondLastName}
                      onBlur={this.validatePristine.bind(this,'inputSecondLastName')}
                    />
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
            <Form horizontal >
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={4}>Email</Col>
                <Col sm={12}>
                    <FormControl type="email" placeholder="Correo electronico" />
                </Col>
              </FormGroup>
            </Form>
          </Col>

          <Col xs={6} md={4}>
            <Form horizontal >
              <FormGroup >
                <Col componentClass={ControlLabel} sm={4}>Nacimiento</Col>
                <Col sm={12}>
                    <FormControl
                      type="date"

                    />

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
            <Form horizontal >
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={4}>Residencia</Col>
                <Col sm={12}>
                    <FormControl type="text" placeholder="Lugar de residencia" />
                </Col>
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
          <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Resumen del caso</ControlLabel>
          <FormControl componentClass="textarea" />
          </FormGroup>
          </Col>

          <Col md={4}>
            <Radio readOnly>
              Es cristiano?
            </Radio>

            <Row className="show-grid">
              <Button className="bottom-btn" bsStyle="info" onClick={this.handleSave}>Guardar</Button>
            </Row>

            <br></br>
            <Row className="show-grid">
              <Button className="bottom-btn"  bsStyle="info">Limpiar</Button>
            </Row>
          </Col>
        </Row>





			</div>
    )
  }
}
export default Leftform;
