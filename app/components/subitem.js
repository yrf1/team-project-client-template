import React from 'react';

export default class SUBITEM extends React.Component {
  render() {
    return (
      <div className="col-md-3">
          <a href="#">
              <img className="img-responsive item" src={this.props.subitemimgsrc} alt="" />
              <h5 className="item-title-related">{this.props.subitemname}: {this.props.subitemcondition}</h5>
          </a>
      </div>
    )
  }
}
