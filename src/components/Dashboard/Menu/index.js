import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

export class Menu extends React.Component {
  handleClick() {
    // Some actions.
  }

  render() {
    const {menu} = this.props;

    return (
      <ul>
        {
          menu.map((item, key) => (
            <li className="menu-dropdown-item" key={key}>
              <a href="#" onClick={this.handleClick}
                 className="menu-dropdown-link">{item}
              </a>
            </li>
          ))
        }
      </ul>
    );
  }
}

const props = (state, props) => {
  return {
    menu: state.home.menu,
  };
};

const methods = (state) => {
  return {
    getMenu: bindActionCreators(getMenuAction, state),
  };
};

export default connect(props, methods)(Menu)
