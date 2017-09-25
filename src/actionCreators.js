import axios from 'axios';


export function requestTables() {
  return (dispatch) => {
 console.log('holaa')
  return axios.get("https://infinite-garden-29669.herokuapp.com/table") // se retorna una promesa
  .then(response => {
    console.log('asfasfasf')
    console.log(response);
    dispatch({
      type:"REQUEST_TABLE",
      tables : response.data.results
    })
  })



  }
}


export function addTableProduct() {

  return (dispatch, getState) => {
    const form = getState().form;
    console.log(form);
    const addTable = {
      name: form.addTable.name.value,
      price: form.addTable.price.value,
      characteristic : form.addTable.characteristic.value,
      entry_date : form.addTable.entry_date.value,
      type_table : form.addTable.type_table.value,
      maker : form.addTable.maker.value,

    };

    console.log(addTable);

    var headers = {
           'Content-Type': 'application/json'
       }

    return axios.post("https://infinite-garden-29669.herokuapp.com/insertTable", addTable, headers )
  .then(function (response) {
    dispatch({
      type: 'ADD_TABLE',
      addTable,
    });
  })
  .catch(function (error) {
    console.log(error);
  });


  }
}
