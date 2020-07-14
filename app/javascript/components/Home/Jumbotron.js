import React, { Component } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-color: #d74234;
  min-height: 550px;
  padding: 100px 0;
  color: #fff;
`

const Jumbotron = () => {
  return(
    <Section className="home-section--1" >
      <div className="container">
        <div className="row">
          <div className="col col-sm-12 col-md-5">
            <div className="pt-4 mt-4">
              <h2>Test test</h2>
              <p>sub text sub text</p>
            </div>
          </div>
          <div className="col col-sm-12 col-md-7">
            <div className="pt-4 mt-4 text-center">
              add an i frame here
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Jumbotron