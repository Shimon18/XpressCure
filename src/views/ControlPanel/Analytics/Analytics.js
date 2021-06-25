import React, { Component } from "react";
import { Link } from "react-router-dom";

class Analytics extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="page-wrapper">
        <div
          className="row "
          style={{ marginInlineStart: "7px", marginTop: "20px" }}
        >
          <div className="col-md-12 d-flex align-items-center justify-content-Start ml-3">
            
            <div>
            <h4 class="page-title">Analytics</h4>
            </div>
            </div>
            </div>

        <div className="row mt-4">
          <div className="col-md-4">
            <Link to={"./DoctorReport"} className="links">
              <div className="control_menu_div">
                <i className="fa fa-address-card-o mr-3"></i>
                Doctor Reports
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to={"./DoctorMitraReport"} className="links">
              <div className="control_menu_div">
                <i className="fa fa-gear mr-3"></i>
                Doctor Mitra Reports
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to={"./PatientAccount"} className="links">
              <div className="control_menu_div">
                <i className="fa fa-hospital-o mr-3"></i>
                Patient Reports
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Analytics;
