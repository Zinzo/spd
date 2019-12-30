import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;
const Login:React.LazyExoticComponent<any> = React.lazy(() => import('./views/pages/login/login'));
const DefaultLayout:React.LazyExoticComponent<any> = React.lazy(() => import('./containers/default-layout/default-layout'));

const App:React.FC = () => {
  return (
    <Router>
      <React.Suspense fallback={loading()}>
        <Switch>
            <Route exact path="/login" name="Login Page" render={(props: any) => <Login {...props}/>} />
            <Route path="/home" name="Home Page" render={(props: any) => <DefaultLayout {...props}/>} />
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
