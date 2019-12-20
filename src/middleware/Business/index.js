import React from 'react'
import {Route} from 'react-router-dom';
import {connect} from "react-redux";

class BusinessMiddleware extends React.Component {
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

const props = () => {
  return {
    //
  };
};

export default connect(props, null)(BusinessMiddleware)
