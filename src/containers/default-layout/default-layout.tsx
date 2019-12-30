import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import routes from '../../routes';



 function DefaultLayout() {
  return (
    <div className="default-layout">
      <div>
        <header>
          
        </header>
        <div className="main">
          
        </div>
        <footer>
          this is footer
        </footer>
      </div>
    </div>
  );
}


export default DefaultLayout;
