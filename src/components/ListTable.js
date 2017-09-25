import React from 'react';
import Tables from './Tables';
import { CardDeck} from 'reactstrap';

const ListTable = ({ tables }) => {

  console.log(tables);

  const tablesNodes = tables.map(table => (
      <Tables
          key={table.id_product_table}
          {...table}
      />
  ));

  return (

         <CardDeck>
              {tablesNodes}
          </CardDeck>

  );
};

ListTable.propTypes = {
  tables: React.PropTypes.arrayOf(
      React.PropTypes.shape({
          firstname: React.PropTypes.string.isRequired,

      }).isRequired
  ).isRequired,
};

export default ListTable;
