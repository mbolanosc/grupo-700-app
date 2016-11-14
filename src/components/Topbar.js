import React, {Component} from 'react';
import { Navbar, FormGroup, FormControl, Button, Radio, Col,Glyphicon} from 'react-bootstrap';

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {userHomePhone: ' '};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({userHomePhone: event.target.value});
    console.log(event.target.value);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.userPhone);
    event.preventDefault();
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

            <FormGroup>
              <FormControl
                type="text"
                placeholder="Número de casa"
                value={this.state.userHomePhone}
                onChange={this.handleChange}
              />
            </FormGroup>


            <FormGroup>
              <FormControl type="text" placeholder="Número de celular" required/>
            </FormGroup>
             {' '}

            <FormGroup>
              <FormControl type="text" placeholder="Número de oficina" />
            </FormGroup>
             {' '}
            <Button type="submit" onSubmit={this.handleSubmit}>Buscar</Button>
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
