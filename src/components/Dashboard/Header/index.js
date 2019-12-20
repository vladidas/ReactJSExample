import React from 'react'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class Header extends React.Component {
  render() {
    const {history} = this.props;

    return (
      <header className="header">
        <div className="container">
          <p>{history}</p>
        </div>
      </header>
    )
  }
}

const props = (state) => {
  return {
    history: state.dashboard.history,
  };
};

const methods = (state) => {
  return {
    getHistory: bindActionCreators(getHistoryAction, state),
  };
};

export default connect(props, methods)(Header);
