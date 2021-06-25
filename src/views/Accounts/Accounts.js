
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Accounts extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="page-wrapper">
                <div
                className="row "
                style={{ marginInlineStart: "7px", marginTop: "20px" }}
              >
                <div className="col-md-5 d-flex align-items-center">
                  <h4 class="page-title">Accounts</h4>
                </div>
                <div className="col-md-7 d-flex"></div>
            </div>

            <div className="row mt-4">
                <div className="col-md-4">
                    <Link to={"./DoctorAccount"} className="links">
                    <div className="control_menu_div">
                        <i className="fa fa-address-card-o mr-3"></i>
                        Doctor Account
                    </div>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to={"./DoctorMitraAccount"} className="links">
                    <div className="control_menu_div">
                        <i className="fa fa-gear mr-3"></i>
                        Doctor Mitra Account
                    </div>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to={"./PatientAccount"} className="links">
                    <div className="control_menu_div">
                        <i className="fa fa-hospital-o mr-3"></i>
                        Patient Account
                    </div>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to={"./SalaryMgmt"} className="links">
                    <div className="control_menu_div">
                        <i className="fa fa-hospital-o mr-3"></i>
                        Employees
                    </div>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to={"./xpost"} className="links">
                    <div className="control_menu_div">
                        <i className="fa fa-hospital-o mr-3"></i>
                        X post Subscription
                    </div>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to={"./ExpensesMgmt"} className="links">
                    <div className="control_menu_div">
                        <i className="fa fa-hospital-o mr-3"></i>
                        Expense Management
                    </div>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to={"./TransectionHistoryAccount"} className="links">
                    <div className="control_menu_div">
                        <i className="fa fa-hospital-o mr-3"></i>
                        Transaction History Account
                    </div>
                    </Link>
                </div>
              
                











            </div>
            </div>
         );
    }
}
 
export default Accounts;