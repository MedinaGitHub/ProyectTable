import React from 'react';
import Tables from './Tables';

const ListTable = ({ tables }) => {

  console.log(tables);

  const tablesNodes = tables.map(table => (
      <Tables
          key={table.name}
          {...tables}
      />
  ));

  return (
      <div>
          <ul

          >
              {tablesNodes}
          </ul>

      </div>
  );
};

ListTable.propTypes = {
  tables: React.PropTypes.arrayOf(
      React.PropTypes.shape({
          name: React.PropTypes.string.isRequired,

      }).isRequired
  ).isRequired,
};

export default ListTable;
