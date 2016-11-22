import React, {Component} from 'react';
import {Row,Col,FormGroup,Form,FormControl,ControlLabel,Tabs,Tab} from 'react-bootstrap';
import Multiselect from 'react-widgets/lib/Multiselect';


class Rightform extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  ValidateLengthTema(){
    var x=this.props.userTema.length;
    if(x < 0){
      console.log('es menor que 0');
      return 'error';
    }else if(x >= 1){
      return 'success';
    }else if (this.props.userTemaErrorState) {
      return 'error';
    }
  }
  ValidateLengthMotivo(){
    var x=this.props.userMotivo.length;
    if(x < 0){
      console.log('es menor que 0');
      return 'error';
    }else if(x >= 1){
      return 'success';
    }else if (this.props.userMotivoErrorState) {
      return 'error';
    }
  }

  render() {
    console.log('PROPS' , this.props);
    return (
      <div className="rigth-form-container">
        <Row className="show-grid">
          <Col md={6}>
            <Form horizontal>
              <FormGroup validationState={this.ValidateLengthTema()}>
              <ControlLabel>Tema</ControlLabel>
              <Multiselect
                data={this.props.dataTema}
                placeholder="Tema"
                onChange={this.props.TemaOnChange}
              />
            </FormGroup>
            </Form>
          </Col>

          <Col md={6}>
            <Form horizontal>
              <FormGroup validationState={this.ValidateLengthMotivo()}>
              <ControlLabel>Motivo</ControlLabel>
                <Multiselect
                  data={this.props.dataMotivo}
                  onChange={this.props.MotivoOnChange}
                  placeholder="Motivo"
                />
              </FormGroup>
              </Form>
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
              <FormControl componentClass="select">
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
