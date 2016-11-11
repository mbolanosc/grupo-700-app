import React, {Component} from 'react';
import {Row,Col,FormGroup,ControlLabel,FormControl,Form,Radio,Panel,} from 'react-bootstrap';

class Leftform extends Component {

  render() {
    return (
			<div className="left-form-container">
				<Row className="show-grid">
					<Col xs={6} md={4}>
						<Form horizontal >
							<FormGroup controlId="formHorizontalEmail">
								<Col componentClass={ControlLabel} sm={4}>
									Nombre
								</Col>
								<br></br>
								<Col sm={12}>
									<FormControl type="text" placeholder="Nombre" />
								</Col>
							</FormGroup>

							<FormGroup controlId="formHorizontalEmail">
								<Col componentClass={ControlLabel} sm={4}>
									Email
								</Col>
								<br></br>
								<Col sm={12}>
									<FormControl type="email" placeholder="Correo electronico" />
								</Col>
							</FormGroup>

							<FormGroup controlId="formHorizontalEmail">
								<Col componentClass={ControlLabel} sm={4}>
									Residencia
								</Col>
								<br></br>
								<Col sm={12}>
									<FormControl type="text" placeholder="Lugar de residencia" />
								</Col>
							</FormGroup>

							<FormGroup controlId="formControlsSelect">
								<Col componentClass={ControlLabel} sm={4}>
									Medio
								</Col>
								<Col sm={12}>
									<FormControl componentClass="select" placeholder="select">
										<option value="Club 700 Hoy Enlace">Club 700 Hoy Enlace</option>
									</FormControl>
								</Col>
							</FormGroup>
						</Form>
					</Col>

				<Col xs={6} md={4}>
					<Form horizontal >
						<FormGroup controlId="formHorizontalEmail">
							<Col componentClass={ControlLabel} sm={6}>
								Apellidos
							</Col>
							<br></br>
							<Col sm={12}>
								<FormControl type="text" placeholder="Primer apellido" />
							</Col>
						</FormGroup>

						<FormGroup controlId="formHorizontalEmail">
							<Col componentClass={ControlLabel} sm={4}>
								Nacimiento
							</Col>
							<br></br>
							<Col sm={12}>
								<FormControl type="date" placeholder="" />
							</Col>
						</FormGroup>

						<FormGroup controlId="formControlsSelect">
				      <ControlLabel>Provincia</ControlLabel>
				      <FormControl componentClass="select" placeholder="select">
				        <option value="San José">San José</option>
				        <option value="Cartago">Cartago</option>
								<option value="Heredia">Heredia</option>
								<option value="Limón">Limón</option>
								<option value="Guanacaste">Guanacaste</option>
								<option value="Alajuela">Alajuela</option>
				      </FormControl>
				    </FormGroup>

						<FormGroup controlId="formControlsSelect">
							<ControlLabel>Quiere ser socio?</ControlLabel>
							<FormControl componentClass="select" placeholder="select">
								<option value="Si">Si</option>
								<option value="No">No</option>
							</FormControl>
						</FormGroup>
					</Form>
				</Col>

				<Col xsHidden md={4}>
				<Form horizontal >
					<FormGroup controlId="formHorizontalEmail">
						<Col componentClass={ControlLabel} sm={6}>
							Apellidos
						</Col>
						<br></br>
						<Col sm={12}>
							<FormControl type="text" placeholder="Segundo apellido" />
						</Col>
					</FormGroup>

					<FormGroup controlId="formControlsSelect">
			      <ControlLabel>Estado civil</ControlLabel>
			      <FormControl componentClass="select" placeholder="select">
			        <option value="Soltero">Soltero</option>
			        <option value="Casado">Casado</option>
			      </FormControl>
			    </FormGroup>

					<FormGroup controlId="formControlsSelect">
						<ControlLabel>Como obtuvo número</ControlLabel>
						<FormControl componentClass="select" placeholder="select">
							<option value="TV">TV</option>
						</FormControl>
					</FormGroup>

					<FormGroup controlId="formControlsSelect">
						<ControlLabel>Género</ControlLabel>
						<FormControl componentClass="select" placeholder="select">
							<option value="Femenino">Femenino</option>
							<option value="Masculino">Masculino</option>
						</FormControl>
					</FormGroup>

				</Form>
				</Col>
			</Row>

			<Row className="show-grid">
				<Col md={6} mdPush={6}>
					<Radio checked readOnly>
						Es cristiano?
					</Radio>
		    <Panel header="Estadisticas de contacto">
		      Panel content
		    </Panel>
				</Col>
				<Col md={6} mdPull={6}>
					<FormGroup controlId="formControlsTextarea">
						<ControlLabel>Resumen del caso</ControlLabel>
						<FormControl componentClass="textarea" />
					</FormGroup>
    
				</Col>
			 </Row>
			</div>
    )
  }
}
export default Leftform;
