import { connect } from 'react-redux';
import ListTable from '../components/ListTable';
import React from 'react';
import { requestTables} from '../actionCreators';

class ListContainer extends React.Component {
  componentWillMount() {

    //
    console.log('WILL');



  }

  render() {
    return (
      <ListTable {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => ({
  tables: state.main.tables,
});

const mapDispatchToProps = (dispatch) => ({
  requestTables: () => dispatch(requestTables()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListContainer);
