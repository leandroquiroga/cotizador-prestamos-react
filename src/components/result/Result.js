import { Card, CardBody, CardText, CardTitle } from 'reactstrap';

const Result = (props) => {
    const {mount, methodMount, total} = props
    return (
        <Card className="w-75 shadow-lg rounded p-2">
        <CardTitle tag='h2' className="text-center"> Resumen a pagar </CardTitle>
        <CardBody className="d-flex flex-column justify-content-center align-items-center">
          <CardText>Tu Prestamo fue de : ${ mount }</CardText>
          <CardText >Cantidad de cuotas: {methodMount} cuotas</CardText>
          <CardText className="fw-bold" >Total a pagar : ${ total }</CardText>
        </CardBody>
      </Card>
    )
}

export default Result;