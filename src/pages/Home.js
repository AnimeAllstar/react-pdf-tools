import React from 'react';
import ToolCard from '../components/ToolCard';
import { Row } from 'react-bootstrap';

const Home = () => {
  return (
    <Row xs={1} sm={2} md={3} className="g-4">
      <ToolCard title="Merge PDFs" text="Merge multiple PDFs into one PDF." route="/merge" />
      <ToolCard title="Split PDFs" text="Split a PDF into multiple PDFs." route="/split" />
      <ToolCard title="More coming soon" text="Visit GitHub to contribute." route="/" />
    </Row>
  );
};

export default Home;
