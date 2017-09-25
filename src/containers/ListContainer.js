import { connect } from 'react-redux';
import ListTable from '../components/ListTable';
import React from 'react';
import { requestTables} from '../actionCreators';

class ListContainer extends React.Component {
  componentWillMount() {
    if (!this.props.tables || !this.props.tables.length) {
      console.log( this.props  )
      this.props.requestTables();
      //this.setState({ tables: requestTables() })
    }
  }

  render() {
    return (
      <ListTable {...this.props}/>
    )
  }
}

const mapStateToProps = state => {
  return {//este objeto se entrega como props Representacional
    tables: state.tables//cart como estado compartido de redux
  };
}
const mapDispatchToProps = (dispatch) => ({
  requestTables: () => dispatch(requestTables()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListContainer);
