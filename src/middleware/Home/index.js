import React from 'react'
import {Route} from 'react-router-dom';
import {connect} from "react-redux";

class HomeMiddleware extends React.Component {
  render() {
    const {path, props} = this.props;

    return (
      <Route path={path} component={() => (
        <>
          {React.createElement(props.component, {routeProps: props})}
        </>
      )}/>
    )
  }
}

const props = (state, props) => {
  return {
    //
  };
};

const methods = (state) => {
  return {
    //
  };
};

export default connect(props, methods)(HomeMiddleware)
