import { connect } from 'react-redux';
import FormTable from '../components/FormTable';
import React from 'react';
import { addTableProduct } from '../actionCreators';

class FormContainer extends React.Component {
  render() {
    return (
      <FormTable {...this.props}/>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  addTableProduct: () => dispatch(addTableProduct()),
});

export default connect(
  () => ({}),
  mapDispatchToProps,
)(FormContainer);
