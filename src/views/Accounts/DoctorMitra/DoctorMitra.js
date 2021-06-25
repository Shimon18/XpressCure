import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
    Badge,
    Card,
    CardBody,
    CardHeader,
    Col,
    Pagination,
    PaginationItem,
    PaginationLink,
    Row,
    Table,
    Button,
    FormGroup,
    Label,
    Input,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
  } from "reactstrap";

class DoctorMitra extends Component {
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
                  <h4 class="page-title">Accounts Doctor Mitra</h4>
                </div>
               
            </div>

            <div className="row row_custom">
                
                    <div className="col-md-3">
                        <Link to= {"./CurrentMonthRecordsMitra"}>
                        <div className="Account_menu_div">
                           
                            <i className="fa fa-user-md Big_icon"></i>
                            <p className="Bi_head">Current Month</p>
                            
                        </div>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to= {"./RechargeMgmt"}>
                        <div className="Account_menu_div">
                            
                            <i className="fa fa-user-md Big_icon"></i>
                            <p className="Bi_head">Recharge Management</p>
                            
                        </div>
                        </Link>
                    </div><div className="col-md-3">
                        <Link to= {"./SubscriptionManagement"}>
                        <div className="Account_menu_div">
                            
                            <i className="fa fa-user-md Big_icon"></i>
                            <p className="Bi_head">Subscription Management</p>
                            
                        </div>
                        </Link>
                    </div>
                    <div className="col-md-3">
                    <Link to= {"./TransectionHistoryMitra"}>
                        <div className="Account_menu_div">
                            
                            <i className="fa fa-exchange  Big_icon"></i>
                            <p className="Bi_head">Transection History</p>
                            
                        </div>
                        </Link>
                    </div>
                
            </div>
            </div>

);
}
}

export default DoctorMitra;