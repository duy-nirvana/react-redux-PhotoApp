import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';

Header.propTypes = {
  
};

function Header(props) {
  return (
    <div className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <NavLink
              exact
              className="header__link"
              to="/photos"
              activeClassName="header__link--active"
            >
              Redux Project
            </NavLink>            
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;