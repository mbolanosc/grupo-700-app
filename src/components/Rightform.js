import React, {Component} from 'react';
import {Row,Col,FormGroup,FormControl,ControlLabel,Tabs,Tab} from 'react-bootstrap';
import Multiselect from 'react-widgets/lib/Multiselect';

const  MultiselectDataTema =
  ['Familiar','Adicciones','Finanzas','Sanidad','Problemas emocionales','Vida cristiana'];
const MultiselectDataMotivo = [
    'Oración','Testimonio','Ofrenda','Consejería','Otro'];

class Rightform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handleChangeUserSubject: ['boro','fer'],
      testprop : 'hola soy otro prop desde otro componente'
  };
    this.handleChangeUserSubject = this.handleChangeUserSubject.bind(this);
  }
  handleChangeUserSubject(e) {
    this.setState({handleChangeUserSubject: e});
    console.log(this.state);
  }

  render() {
    return (
			<div className="rigth-form-container">
				<Row className="show-grid">
					<Col md={6}>
           <ControlLabel>Tema</ControlLabel>
                <Multiselect
                  data={MultiselectDataTema}
                  placeholder="Tema"
                  onChange={this.handleChangeUserSubject}
                />
					</Col>

					<Col md={6}>
					 <ControlLabel>Motivo</ControlLabel>
             <Multiselect
                data={MultiselectDataMotivo}
                placeholder="Motivo" />
           </Col>
				</Row>

        <br></br>

        <Row className="show-grid">
          <Col xs={6} md={4}>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Relación con Jesús</ControlLabel>
              <FormControl componentClass="select">
                <option value="Buena">Buena</option>
                <option value="Mala">Mala</option>
              </FormControl>
            </FormGroup>
          </Col>

          <Col xs={6} md={4}>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Resultado</ControlLabel>
              <FormControl componentClass="select" >
                <option value="Nada">Nada</option>
              </FormControl>
            </FormGroup>
          </Col>

          <Col xsHidden md={4}>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Requiere</ControlLabel>
              <FormControl componentClass="select">
                <option value="Nada">Nada</option>
              </FormControl>
            </FormGroup>
          </Col>

          <Col id="bottom-rigth-form" md={12}>
						<Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
							<Tab eventKey={1} title="Adicciones">Tab 1 content</Tab>
							<Tab eventKey={2} title="Familiar">Tab 2 content</Tab>
							<Tab eventKey={3} title="Finanzas">Tab 3 content</Tab>
						</Tabs>
					</Col>
        </Row>
			</div>
    )
  }
}
export default Rightform;
