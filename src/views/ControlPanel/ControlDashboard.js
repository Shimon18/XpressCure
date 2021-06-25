
import React, { Component } from "react";
import { Link } from "react-router-dom";

class ControlDashboard extends Component {
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
                  <h4 class="page-title">Control Panel Dashboard</h4>
                </div>
                <div className="col-md-7 d-flex"></div>
            </div>

            <div className="row mt-4">
                <div className="col-md-4">
                    <Link to={"./SpecialityMaster"} className="links">
                    <div className="control_menu_div">
                        <i className="fa fa-address-card-o mr-3"></i>
                        Speciality Master
                    </div>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to={"./ComplaintMaster"} className="links">
                    <div className="control_menu_div">
                        <i className="fa fa-gear mr-3"></i>
                        Complaint Master
                    </div>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to={"./MedicalCollege"} className="links">
                    <div className="control_menu_div">
                        <i className="fa fa-hospital-o mr-3"></i>
                        Medical College
                    </div>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to={"./MedicalDegreeMaster"} className="links">
                    <div className="control_menu_div">
                        <i className="fa fa-stethoscope mr-3"></i>
                        Medical degree Master
                    </div>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to={"./HealthWorker"} className="links">
                    <div className="control_menu_div">
                        <i className="fa fa-h-square mr-3"></i>
                        Health Worker
                    </div>
                    </Link>
                </div>
                
                <div className="col-md-4">
                    <Link to={"./DoctorCategory"} className="links">
                    <div className="control_menu_div">
                        <i className="fa fa-user-md mr-3"></i>
                        Doctor Category
                    </div>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to={"./DoctorSubcategory"} className="links">
                    <div className="control_menu_div">
                        <i className="fa fa-user-md mr-3"></i>
                        Doctor SubCategory
                    </div>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to={"./DistrictMaster"} className="links">
                    <div className="control_menu_div">
                        <i className="fa fa-building-o mr-3"></i>
                        District Master
                    </div>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to={"./StateMaster"} className="links">
                    <div className="control_menu_div">
                        <i className="fa fa-building mr-3"></i>
                        State Master
                    </div>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to={"./ChatbotMaster"} className="links">
                    <div className="control_menu_div">
                        <i className="fa fa-comments-o mr-3"></i>
                        Chatbot Master
                    </div>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to={"./FeesMaster"} className="links">
                    <div className="control_menu_div">
                        <i className="fa fa-money mr-3"></i>
                        Fees Master
                    </div>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to={"./DoctorMitraService"} className="links">
                    <div className="control_menu_div">
                        <i className="fa fa-credit-card mr-3"></i>
                        Doctor Mitra Service Charge Master
                    </div>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to={"./DoctorFeesMaster"} className="links">
                    <div className="control_menu_div">
                        <i className="fa fa-money mr-3"></i>
                        Doctor Fees Master
                    </div>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to={"./PrescriptionMaster"} className="links">
                    <div className="control_menu_div">
                        <i className="fa fa-sticky-note-o mr-3"></i>
                        Presciption Master
                    </div>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to={"./ExpenseMgmtMaster"} className="links">
                    <div className="control_menu_div">
                        <i className="fa fa-sticky-note-o mr-3"></i>
                        Expense Management Master
                    </div>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to={"./XpostMaster"} className="links">
                    <div className="control_menu_div">
                        <i className="fa fa-sticky-note-o mr-3"></i>
                        X Post Subscription Master
                    </div>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to={"./DoctorCreditPoint"} className="links">
                    <div className="control_menu_div">
                        <i className="fa fa-sticky-note-o mr-3"></i>
                        Doctor Credit Point Master
                    </div>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to={"./DoctorMitraCreditPoint"} className="links">
                    <div className="control_menu_div">
                        <i className="fa fa-sticky-note-o mr-3"></i>
                        Doctor Mitra Credit Point Master
                    </div>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to={"./XpostVideo"} className="links">
                    <div className="control_menu_div">
                        <i className="fa fa-sticky-note-o mr-3"></i>
                        X Post Video Master
                    </div>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to={"./FAQ"} className="links">
                    <div className="control_menu_div">
                        <i className="fa fa-question-circle-o mr-3"></i>
                        FAQ
                    </div>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to={"./UserRole"} className="links">
                    <div className="control_menu_div">
                        <i className="fa fa-user-md mr-3"></i>
                        User Role
                    </div>
                    </Link>
                </div>
                
                <div className="col-md-4">
                    <Link to={"./DocumentMaster"} className="links">
                    <div className="control_menu_div">
                        <i className="fa fa-book mr-3"></i>
                        Document Master
                    </div>
                    </Link>
                </div>
                











            </div>
            </div>
         );
    }
}
 
export default ControlDashboard;