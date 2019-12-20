import React from 'react'
import {Link} from 'react-router-dom';
import languages from "../../constants/languages";

class Error404 extends React.Component {
  render() {
    return (
      <div className="error_wrap">
        <div className="error_page">
          <div className="text-404">4<div className="error-text_blue">0</div>4</div>
          <div className="sad_message">Article not found</div>
          <Link to='/' className="erro_btn">{languages.toHome}</Link>
        </div>
      </div>
    )
  }
}

export default Error404;
