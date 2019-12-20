import React from 'react'
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from "redux";
import languages from '../../../constants/languages';

class MainPage extends React.Component {
  render() {
    return (
      <h1>{languages.welcome}</h1>
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
    showPreloader: bindActionCreators(showPreloader, state),
  };
};

export default connect(props, methods)(withRouter(MainPage))
