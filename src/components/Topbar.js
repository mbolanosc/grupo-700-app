import React, {Component} from 'react';
import { Navbar, FormGroup, FormControl, Button, Radio, Col} from 'react-bootstrap';

class Topbar extends Component {

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
              <FormControl type="text" placeholder="Número de casa" />
            </FormGroup>
            {' '}

            <FormGroup>
              <FormControl type="text" placeholder="Número de celular" />
            </FormGroup>
             {' '}

            <FormGroup>
              <FormControl type="text" placeholder="Número de oficina" />
            </FormGroup>
             {' '}
            <Button type="submit">Buscar</Button>
          </Navbar.Form>

          <Col id="navbar-cronometer">
            <div>
              Aqui va el cronometro
            </div>
          </Col>
        </Navbar.Collapse>
      </Navbar>

    )
  }
}
export default Topbar;
