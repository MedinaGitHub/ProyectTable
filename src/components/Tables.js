import React  from 'react';


const ListTable = ({ name }) => {
  return (
    <li>
        {name}
    </li>
  );
};

ListTable.propTypes = {
  name: React.PropTypes.string.isRequired,
};

export default ListTable;
