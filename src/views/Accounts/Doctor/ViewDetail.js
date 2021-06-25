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

class ViewDetailAccounts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div class="page-wrapper">
          <div class="content">
            <div class="row">
              <div class="col-lg-12">
              <Link to={"/CurrentMonthRecords"}><i className="fa fa-arrow-left back_btn"></i></Link>

                <h4 class="page-title">View Detail</h4>
              </div>
            </div>
            <div className="row">
            <div className="col-md-2">
    <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" className="patient_img" />
  </div>
  <div className="col-md-8">
    <div className="row">
      <div className="col-md-4">
        <p className="head_det">
          Doctor name
        </p>
        <p className="cnt_det">
          Demo
        </p>
      </div>
      <div className="col-md-4">
        <p className="head_det">
          Specialization
        </p>
        <p className="cnt_det">
          Demo
        </p>
      </div>
      <div className="col-md-4">
        <p className="head_det">
          Category
        </p>
        <p className="cnt_det">
          demo
        </p>
      </div>
      <div className="col-md-4">
        <p className="head_det">
          Sub-Category
        </p>
        <p className="cnt_det">
          demo
        </p>
      </div>
      <div className="col-md-4">
        <p className="head_det">
          Total fees due
        </p>
        <p className="cnt_det">
          demo
        </p>
      </div>
      <div className="col-md-4">
        <p className="head_det">
          Blood Pressure
        </p>
        <p className="cnt_det">
          108
        </p>
      </div>
      <div className="col-md-4">
        <p className="head_det">
          Total Consultation
        </p>
        <p className="cnt_det">
          Demo
        </p>
      </div>
      
    </div>
  </div>
  </div>

  
            <div class="row mt-5">
            <div class="col-lg-12">
                <h4 class="page-title">Earning History</h4>
              </div>
            <div className="col-md-12">
            <Table responsive>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Reason of payment</th>
                  <th>Amount paid</th>
                 
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Demo</td>
                  <td>Demo</td>
                </tr>
              </tbody>
            </Table>
          </div>
                    
                 
               
                <div class="m-t-20 text-center">
                  <button class="btn btn-danger submit-btn mr-3">Cancel</button>
                  <button class="btn btn-primary submit-btn">Save & Update</button>
                </div>
              </div>
            </div>
          </div>
        </div>
     
    );
  }
}

export default ViewDetailAccounts;
