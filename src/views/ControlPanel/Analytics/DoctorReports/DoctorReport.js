import React, { Component } from "react";
import { Link } from "react-router-dom";

class DoctorReport extends Component {
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
            <Link to={"/Analytics"}><i className="fa fa-arrow-left back_btn"></i></Link>
            <h4 class="page-title">Doctor Reports</h4>
            </div>
            </div>
            </div>

        <div className="row mt-4">
          <div className="col-md-4">
            <Link to={"./Onboarding"} className="links">
              <div className="control_menu_div">
                <i className="fa fa-address-card-o mr-3"></i>
                Onboarding
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to={"./Consultations"} className="links">
              <div className="control_menu_div">
                <i className="fa fa-gear mr-3"></i>
                Consultations
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to={"./TAT"} className="links">
              <div className="control_menu_div">
                <i className="fa fa-hospital-o mr-3"></i>
                TAT
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to={"./IncomeGenerated"} className="links">
              <div className="control_menu_div">
                <i className="fa fa-hospital-o mr-3"></i>
                Income Generated
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to={"./FollowUps"} className="links">
              <div className="control_menu_div">
                <i className="fa fa-hospital-o mr-3"></i>
                  Follow Ups
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to={"./CreditPoints"} className="links">
              <div className="control_menu_div">
                <i className="fa fa-hospital-o mr-3"></i>
                  Credit Points Earned
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to={"./PatientReport"} className="links">
              <div className="control_menu_div">
                <i className="fa fa-hospital-o mr-3"></i>
                Patient Report
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to={"./KeyInsights"} className="links">
              <div className="control_menu_div">
                <i className="fa fa-hospital-o mr-3"></i>
                Key Insights
              </div>
            </Link>
          </div>
          
        </div>
      </div>
    );
  }
}

export default DoctorReport;
