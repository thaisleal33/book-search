import React from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';
import { AboutContent, AboutWrapper, IconContainer, ReactIcon } from './styles';

function About() {
  return (
    <>
      <Container className="mt-5">
        <Row className="justify-content-md-center pb-5">
          <Col xs lg={8} className="text-center">
            <AboutWrapper>
              <AboutContent>
                <h3>About the app</h3>
                <IconContainer>
                  <p className="lead"> Made with</p>
                  <ReactIcon /> React
                </IconContainer>
                <a variant="warning" className="my-4 btn-warning" href="https://github.com/thaisleal33/book-search" target="_blank" rel="noreferrer">Learn more</a>
              </AboutContent>
            </AboutWrapper>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default About;
