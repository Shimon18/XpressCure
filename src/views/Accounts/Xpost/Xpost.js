import React, { Component } from "react";
import { Link } from "react-router-dom";

class Xpost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="page-wrapper">
        <div
          className="row "
      
        >
          <div className="col-md-12 d-flex align-items-center justify-content-between mx-4 py-3">
            <div>
              <Link to={"/Accounts"}>
                <i className="fa fa-arrow-left back_btn"></i>
              </Link>

              <h4 class="page-title">X Post Subscription Management</h4>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-4">
            <Link to={"./XpostSubscriptionMgmt"} className="links">
              <div className="control_menu_div">
                <i className="fa fa-address-card-o mr-3"></i>
                Subscription Management
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to={"./XpostTransectionHistory"} className="links">
              <div className="control_menu_div">
                <i className="fa fa-gear mr-3"></i>
                Transaction History
              </div>
            </Link>
          </div>
         
        </div>
      </div>
    );
  }
}

export default Xpost;
