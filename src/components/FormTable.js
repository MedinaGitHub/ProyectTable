import React from 'react'
import { reduxForm } from 'redux-form'
import { Button, Form, Label, Input,  } from 'reactstrap';

const validate = (values) => {

  console.log(values);
  const errors = {};

  if (!values.name) {
    errors.name = 'Por favor escriba un nombre';
  }



  return errors;
}


const FormTable = ({ addTableProduct, fields: { name, price , characteristic ,entry_date , type_table , maker}, handleSubmit }) => {
  console.log(addTableProduct);
  return (
      <Form

      onSubmit={handleSubmit(addTableProduct)}
      >
        <div>
          <Input
          type="text"
          placeholder="Nombre Mesa"
          {...name}
          />
          {name.touched && name.error && <div >{name.error}</div>}

        </div>
        <div>
          <Input
          type="number"
          placeholder="Precio"
          {...price}
          />
        </div>
        <div>
          <Input
          type="text"
          placeholder="Caracteristica"
          {...characteristic}
          />
        </div>
        <div>
          <Input
          type="date"
          placeholder="Fecha Ingreso"
          {...entry_date}
          />

        </div>

       <div>
        <Label for="examplePassword">Tipo De Mesa</Label>
        <Input type="select" name="select" id="exampleSelect"   {...type_table}>
          <option>Madera</option>
          <option>Plastico</option>

        </Input>
        </div>

        <div>
         <Label for="examplePassword">Fabricante</Label>
         <Input type="select" name="select" id="exampleSelect2"   {...maker}>
           <option>Open Desk</option>
           <option>Studio Martell</option>
         </Input>
         </div>

        <Button
        type="submit"
        >
        Submit
        </Button>
      </Form>
  )
}




export default reduxForm({
    form: 'tables',
    fields: ['name', 'price','characteristic','entry_date','type_table','maker'],
    validate,
})(FormTable);//Para que el componente de formulario se comunique con el store, necesitamos envolverla con reduxForm().
// Proporcionará los apoyos sobre el estado del formulario y la función para manejar el proceso de envío.
