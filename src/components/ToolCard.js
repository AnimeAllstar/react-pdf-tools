import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ToolCard = ({ title, text, route }) => {
  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title as={Link} to={route}>
            {title}
          </Card.Title>
          <Card.Text>{text} </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ToolCard;
