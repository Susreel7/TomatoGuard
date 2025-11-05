import { Container, Row, Col } from 'react-bootstrap';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <span className="tagline">TomatoGuard</span>
          </Col>
          <Col size={12} sm={6} className="text-sm-end text-center">
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
