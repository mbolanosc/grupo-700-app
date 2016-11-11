import React, {Component} from 'react';
import {Row,Col,FormGroup,FormControl,ControlLabel,Tabs,Tab,Panel} from 'react-bootstrap';
import Multiselect from 'react-widgets/lib/Multiselect';

class Rightform extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const  MultiselectDataTema =
      ['Familiar','Adicciones','Finanzas','Sanidad','Problemas emocionales','Vida cristiana'];
    const MultiselectDataMotivo = [
        'Oración','Testimonio','Ofrenda','Consejería','Otro'];

    return (
			<div className="rigth-form-container">
				<Row className="show-grid">
					<Col xs={6} md={4}>
           <ControlLabel>Tema</ControlLabel>
            <Multiselect data={MultiselectDataTema} placeholder="Tema" />
					</Col>

					<Col xs={6} md={4}>
					 <ControlLabel>Motivo</ControlLabel>
             <Multiselect data={MultiselectDataMotivo} placeholder="Motivo" />
           </Col>


					<Col xsHidden md={4}>
						<ControlLabel>Cronometro va aqui</ControlLabel>
            <Panel>
              CRONOMETRO
            </Panel>
					</Col>
				</Row>

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
