import React  from 'react';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle } from 'reactstrap';

const Tables = ({ firstname , characteristic , price }) => {
  return (


      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBlock>
          <CardTitle> {firstname}</CardTitle>
          <CardSubtitle>{price}</CardSubtitle>
          <CardText>{characteristic}</CardText>
        </CardBlock>
      </Card>

  );
};

Tables.propTypes = {
  firstname: React.PropTypes.string.isRequired,
};

export default Tables;
