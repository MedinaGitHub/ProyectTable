import { connect } from 'react-redux';
import FormTable from '../components/FormTable';
import React from 'react';
import { addTableProduct, requestTables } from '../actionCreators';

class FormContainer extends React.Component {
  render() {
    return (
      <FormTable {...this.props}/>
    )
  }
}


const mapStateToProps = (state) => ({
  tables: state.main.tables,
});

const mapDispatchToProps = (dispatch) => ({
  addTableProduct: () => dispatch(addTableProduct()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormContainer);
