import React, { Component } from "react";
import { Link } from "react-router-dom";

class DoctorMitraReport extends Component {
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
            <h4 class="page-title">Doctor Mitra Reports</h4>
            </div>
            </div>
            </div>

        <div className="row mt-4">
          <div className="col-md-4">
            <Link to={"./MitraOnboarding"} className="links">
              <div className="control_menu_div">
                <i className="fa fa-address-card-o mr-3"></i>
                Onboarding
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to={"./Training"} className="links">
              <div className="control_menu_div">
                <i className="fa fa-gear mr-3"></i>
                Training
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to={"./Recharge"} className="links">
              <div className="control_menu_div">
                <i className="fa fa-gear mr-3"></i>
                Recharge
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to={"./MitraConsultations"} className="links">
              <div className="control_menu_div">
                <i className="fa fa-gear mr-3"></i>
                Consultations
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to={"./MitraTAT"} className="links">
              <div className="control_menu_div">
                <i className="fa fa-gear mr-3"></i>
                TAT
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to={"./MitraIncomeGenerated"} className="links">
              <div className="control_menu_div">
                <i className="fa fa-gear mr-3"></i>
                Income Generated
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to={"./MitraFollowUps"} className="links">
              <div className="control_menu_div">
                <i className="fa fa-gear mr-3"></i>
                Follow-Ups
              </div>
            </Link>
          </div>
          
          <div className="col-md-4">
            <Link to={"./CreditPointsEarnedMitra"} className="links">
              <div className="control_menu_div">
                <i className="fa fa-gear mr-3"></i>
                Credit Points Earned Mitra
              </div>
            </Link>
          </div>

          <div className="col-md-4">
            <Link to={"./PatientMitraReport"} className="links">
              <div className="control_menu_div">
                <i className="fa fa-gear mr-3"></i>
                Patient
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to={"./KeyInsightsMitra"} className="links">
              <div className="control_menu_div">
                <i className="fa fa-gear mr-3"></i>
                KeyInsights 
              </div>
            </Link>
          </div>
          
          
         
          
        </div>
      </div>
    );
  }
}

export default DoctorMitraReport;
