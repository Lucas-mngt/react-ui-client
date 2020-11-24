/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Header = () => {
  return (
    <div className="header">
        <Container fluid>
            <Row>
                <Col>
                    <h3 className='header-title'>RELATED ARTICLES</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className='text-header'> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla metus a magna volutpat vehicula. Nulla congue tincidunt nisi, et rutrum lorem suscipit eu. Etiam ac egestas leo. Nam eget quam sit amet ex ullamcorper tempus. Aenean ex ex, vestibulum vel leo et, consequat sodales nisi. Fusce faucibus interdum ipsum, ullamcorper viverra dui.
                    </p>
                </Col>
            </Row>
        </Container>
    </div>
  );
};

export default Header;
