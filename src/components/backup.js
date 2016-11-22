import React, {Component} from 'react';
import {Row,Col,FormGroup,ControlLabel,FormControl,Form,Radio,Panel,Button} from 'react-bootstrap';

class Leftform extends Component {
  constructor(props) {
    super(props);
    this.state = { //igual a un objeto
      userName:'',
      userNamePristine: true,
      userNameEmpty: true,
      userNameErrorState : false,

      userFirstLastName: '',
      userFirstLastPristine: true,
      userFirstLastEmpty: true,
      userFirstLastNameErrorState: false,

      userSecondLastName: '',
      userSecondLastPristine: true,
      userSecondLastEmpty: true,
      userSecondLastNameErrorState: false,

      userEmail: '',
      userEmailPristine: true,
      userEmailEmpty: true,
      userEmailErrorState: false,

      userBornDate: '',
      userBornDatePristine: true,
      userBornDateEmpty: true,
      userBornDateErrorState: false,

      userResidence: '',
      userResidencePristine: true,
      userResidenceEmpty: true,
      userResidenceErrorState: false,

      userResumeCase: '',
      userResumeCasePristine: true,
      userResumeCaseEmpty: true,
      userResumeErrorState: false,

      userChristianRadioChecked: false,


    };
      this.handleChangeUserName = this.handleChangeUserName.bind(this);
      this.handleChangeFirstLastName = this.handleChangeFirstLastName.bind(this);
      this.handleChangeSecondLastName = this.handleChangeSecondLastName.bind(this);

      this.handleChangeEmail = this.handleChangeEmail.bind(this);
      this.handleChangeBornDate = this.handleChangeBornDate.bind(this);
      this.handleChangeResidence = this.handleChangeResidence.bind(this);
      this.handleChangeResumeCase = this.handleChangeResumeCase.bind(this);
      this.handleChangeChristianRadio = this.handleChangeChristianRadio.bind(this);

      this.handleSave = this.handleSave.bind(this);
  }
  handleChangeUserName(e) {
    this.setState({userName: e.target.value});
    console.log('name '  + e.target.value);
  }
  handleChangeFirstLastName(e) {
    this.setState({userFirstLastName: e.target.value});
    console.log('name '  + e.target.value);
  }
  handleChangeSecondLastName(e) {
    this.setState({userSecondLastName: e.target.value});
    console.log('name '  + e.target.value);
  }
  handleChangeEmail(e) {
    this.setState({userEmail: e.target.value});
    console.log('email '  + e.target.value);
  }
  handleChangeBornDate(e) {
    this.setState({userBornDate: e.target.value});
    console.log('fecha '  + e.target.value);
  }
  handleChangeResidence(e){
    this.setState({userResidence: e.target.value});
    console.log('residencia '  + e.target.value);
  }
  handleChangeResumeCase(e){
    this.setState({userResumeCase: e.target.value});
    console.log('resumen caso '  + e.target.value);
  }

  handleChangeChristianRadio(e){
    this.setState({userChristianRadioChecked: true});
    if (this.state.userChristianRadioChecked) {
      this.setState({userChristianRadioChecked: false});
    }
  }

  handleSave(e){
    console.log('save');
    var nameValidState = this.ValidLenghtName(this.state.userName);
    var nameEmpty = this.validateEmpty(this.state.userName,'inputname');

    var firstLastNameState = this.validLengthFirstLastName(this.state.userFirstLastName);
    var firstLastNameEmpty = this.validateEmpty(this.state.userFirstLastName,'inputFirstLastName');

    var secondLastNameState = this.validLengthFirstLastName(this.state.userSecondLastName);
    var secondLastNameEmpty = this.validateEmpty(this.state.userSecondLastName,'inputSecondLastName');

    var bornDateValidState = this.ValidDate(this.state.userBornDate);
    var bornDateEmpty = this.validateEmpty(this.state.userBornDate,'inputDate');

    var userResidenceValidState = this.ValidResidence(this.state.userResidence);
    var userResidenceEmpty = this.validateEmpty(this.state.userResidence,'inputResidence');

    var userResumenCaseValidState = this.ValidResumen(this.state.userResumeCase);
    var userResumenCaseEmpty = this.validateEmpty(this.state.userResumeCase,'inputResumeCase');


    console.log("asdasdsad " + userResumenCaseValidState + " " + userResumenCaseEmpty);

    if( (nameValidState === 'success' && !nameEmpty)
        && (firstLastNameState === 'success' && !firstLastNameEmpty )
        && (secondLastNameState === 'success' && !secondLastNameEmpty )
        && (bornDateValidState === 'success' && !bornDateEmpty)
        && (userResidenceValidState === 'success' && !userResidenceEmpty)
        && (userResumenCaseValidState === 'success' && !userResumenCaseEmpty)
      ){
      console.log('base de datos');

    }else{
      console.log('no hay base de datos');
      this.setState({userNameErrorState: true});
      this.setState({userFirstLastNameErrorState: true});
      this.setState({userSecondLastNameErrorState: true});
      this.setState({userBornDateErrorState: true});
      this.setState({userResidenceErrorState: true});
      this.setState({userResumeErrorState: true});

      this.setState({userEmailErrorState: true});

    }
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

      case 'inputEmail':
        this.setState({userEmailPristine: false});

      break;

      case 'inputDate':
        this.setState({userBornDatePristine: false});
        this.ValidDate();
      break;

      case 'inputResidence':
        this.setState({userResidencePristine: false});
        this.ValidResidence();
      break;

      case 'inputResumeCase':
        this.setState({userResumeCasePristine: false});
        this.ValidResumen();
      break;

      default:
        console.log('no se input');
      break;
    }
  }
  validateEmpty(value,input){
    var valid = false;
    switch (input){
      case 'inputname':
        if(value === ''){
          console.log('hay espacios en el input');
          valid = true;
        }else{
          this.setState({userNameEmpty: false});
          console.log('el espacio esta lleno');
        }
      break;

      case 'inputFirstLastName':
        if(value === ''){
          console.log('hay espacios en el input');
          valid = true;
        }else{
          this.setState({userFirstLastEmpty: false});
          console.log('el espacio esta lleno');
        }
      break;

      case 'inputSecondLastName':
        if(value === ''){
          console.log('hay espacios en el input');
          valid = true;
        }else{
          this.setState({userSecondLastEmpty: false});
          console.log('el espacio esta lleno');
        }
      break;

      case 'inputDate':
        if(value === ''){
          console.log('hay espacios en el input');
          valid = true;
        }else{
          this.setState({userBornDateEmpty: false});
          console.log('el espacio esta lleno');
        }
      break;

      case 'inputResidence':
        if(value === ''){
          console.log('hay espacios en el input');
          valid = true;
        }else{
          this.setState({userResidenceEmpty: false});
          console.log('el espacio esta lleno');
        }
      break;

      case 'inputResumeCase':
        if(value === ''){
          console.log('hay espacios en el input');
          valid = true;
        }else{
          this.setState({userResumeCaseEmpty: false});
          console.log('el espacio esta lleno');
        }
      break;

      default:
        console.log('no se input');
      break;
    }
    return valid;
  }
  ValidLenghtName(){
    if(!this.state.userNamePristine ){
      if (this.state.userName.length >= 3) return 'success';
      else if (this.state.userName.length === 2) return 'warning';
      else if (this.state.userName.length < 1) return 'error';
    }else if (this.state.userNameErrorState){
      return 'error';
    }
  }
  validLengthFirstLastName(){
    if(!this.state.userFirstLastPristine ){
      if (this.state.userFirstLastName.length >= 3) return 'success';
      else if (this.state.userFirstLastName.length === 2) return 'warning';
      else if (this.state.userFirstLastName.length < 1) return 'error';
    }else if (this.state.userFirstLastNameErrorState) {
      return 'error';
    }
  }
  validLengthSecondLastName(){
    if(!this.state.userSecondLastPristine){
      if (this.state.userSecondLastName.length >= 3) return 'success';
      else if (this.state.userSecondLastName.length === 2) return 'warning';
      else if (this.state.userSecondLastName.length < 1) return 'error';
    }else if (this.state.userSecondLastNameErrorState) {
      return 'error';
    }
  }
  ValidDate(){
    if(!this.state.userBornDatePristine ){
      if (this.state.userBornDate.length > 1) return 'success';
      else if (this.state.userBornDate.length < 1) return 'error';
    }else if (this.state.userBornDateErrorState) {
      return 'error';
    }
  }
  ValidResidence(){
    if(!this.state.userResidencePristine){
      if (this.state.userResidence.length >= 3) return 'success';
      else if (this.state.userResidence.length === 2) return 'warning';
      else if (this.state.userResidence.length < 1) return 'error';
    }else if (this.state.userResidenceErrorState) {
      return 'error';
    }
  }
  ValidResumen(){
    if(!this.state.userResumeCasePristine){
      if (this.state.userResumeCase.length >= 3) return 'success';
      else if (this.state.userResumeCase.length === 2) return 'warning';
      else if (this.state.userResumeCase.length < 1) return 'error';
    }else if (this.state.userResumeErrorState) {
      return 'error';
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
            <Form horizontal>
              <FormGroup >
                <Col componentClass={ControlLabel} sm={4}>Email</Col>
                <Col sm={12}>
                    <FormControl
                      type="email"
                      placeholder="Correo electronico"
                      value={this.state.userEmail}
                      onChange={this.handleChangeEmail}
                      onBlur={this.validatePristine.bind(this,'inputEmail')}
                    />

                </Col>
              </FormGroup>
            </Form>
          </Col>

          <Col xs={6} md={4}>
            <Form horizontal >
              <FormGroup  validationState={this.ValidDate()}>
                <Col componentClass={ControlLabel} sm={4}>Nacimiento</Col>
                <Col sm={12}>
                    <FormControl
                      type="date"
                      value={this.state.userBornDate}
                      onChange={this.handleChangeBornDate}
                      onBlur={this.validatePristine.bind(this,'inputDate')}
                    />
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
            <Form horizontal >
              <FormGroup validationState={this.ValidResidence()}>
                <Col componentClass={ControlLabel} sm={4}>Residencia</Col>
                <Col sm={12}>
                    <FormControl
                      type="text"
                      placeholder="Lugar de residencia"
                      value={this.state.userResidence}
                      onChange={this.handleChangeResidence}
                      onBlur={this.validatePristine.bind(this,'inputResidence')}
                    />
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
          <FormGroup validationState={this.ValidResumen()}>
            <ControlLabel>Resumen del caso</ControlLabel>
            <FormControl
              componentClass="textarea"
              value={this.state.userResumeCase}
              onChange={this.handleChangeResumeCase}
              onBlur={this.validatePristine.bind(this,'inputResumeCase')}
              />
              <FormControl.Feedback/>
          </FormGroup>
          </Col>



          <Col md={4}>

            <Radio
              checked={this.state.userChristianRadioChecked}
              onChange={this.handleChangeChristianRadio}
            >
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
