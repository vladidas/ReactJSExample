import React from 'react';
import Error404 from './screens/Errors/Error404';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomeRouter from './routes/Home';
import DashboardRoute from './routes/Dashboard';
import BusinessRoute from './routes/Business';
import DashboardMiddleware from "./middleware/Dashboard";
import HomeMiddleware from "./middleware/Home";
import BusinessMiddleware from "./middleware/Business";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            {HomeRouter.map((props, key) => <HomeMiddleware {...props} key={key} props={props}/>)}
            {BusinessRoute.map((props, key) => <BusinessMiddleware {...props} key={key} props={props}/>)}
            {DashboardRoute.map((props, key) => <DashboardMiddleware {...props} key={key} props={props}/>)}
            <Route path="*" component={Error404} status={404}/>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
