import React, {Fragment, useState} from "react";
import { Button, Form, FormGroup, Input, Label, UncontrolledAlert } from "reactstrap";
import calculate from './../../helpers/helpers'

const Forms = (props) => {
    
    const { mount, saveMount, methodMount, saveMethodMount ,totalPay, loadSpinner } = props
    // State
    const [err, saveErr] = useState(false)

    const calculateMount = (e) => {
        e.preventDefault()
        let form = document.querySelector('#form')
        
        form.reset()
    
        // Check inpunts
        if (mount === 0 || methodMount === '') {
            saveErr(true)
            return
        }

        // spinner enabled
        loadSpinner(true)

        setTimeout(() => {
            saveErr(false)
            // Calculate
            const total = calculate(mount, methodMount);
            totalPay(total)

            // spinner disabled
            loadSpinner(false)
        }, 3000)
    }
    
    return (
        <Fragment>
            <Form onSubmit={calculateMount} id="form" className="w-100 px-2 row justify-content-center align-items-center">
                {/* {mount} */}
                <FormGroup>
                    <Label for='mount'>
                        Monto:
                    </Label>
                    <Input
                        name="mount"
                        placeholder="Ingrese un monto..."
                        type="number"
                        onChange= {e => saveMount(Number(e.target.value))}
                        autoFocus
                    >
                    </Input>
                </FormGroup>
                {/* {methodMount} */}
                <FormGroup>
                    <Label for='methodMount'>
                        Forma de pago:
                    </Label>
                    <Input
                        name="methodMount"
                        type="select"
                        onChange={e => saveMethodMount(Number(e.target.value))}
                    >
                    <option name="Escoja la cuotas" value=""> Escoja la cuotas</option>
                    <option value="3"> 3 Cuotas </option>
                    <option value="6"> 6 Cuotas </option>
                    <option value="12"> 12 Cuotas </option>
                    <option value="24"> 24 Cuotas </option>
                    </Input>
                </FormGroup>
                <Button
                    type="submit"
                    className="w-50 btn btn-danger"
                    id="btn_send"
                >
                    Caclular
                </Button>
            </Form>

            {(err) ? <UncontrolledAlert color="danger" className="my-3 w-75"> Todos los campos son obligatorios </UncontrolledAlert> : null }
        </Fragment>
    )
}
 
export default Forms;