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

class AddPayment extends Component {
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

                <h4 class="page-title">Add Payment</h4>
              </div>
            </div>
            <div class="select mt-3 ml-3">
  <select name="slct" id="slct">
    <option selected disabled>Select Doctor name</option>
    <option value="1">Catagory</option>
    <option value="2">Sub Catagory</option>
  </select>
</div>
            <div className="row my-5">
              
  
  <div className="col-md-12">
  
    <div className="row">
      <div className="col-md-3">
        <p className="head_det">
          Specialization
        </p>
        <p className="cnt_det">
        Demo
                </p>
      </div>
      <div className="col-md-3">
        <p className="head_det">
          Category
        </p>
        <p className="cnt_det">
          demo
        </p>
      </div>
      <div className="col-md-3">
        <p className="head_det">
          Sub-Category
        </p>
        <p className="cnt_det">
          Demo
        </p>
      </div>
      <div className="col-md-3">
        <p className="head_det">
          Registered On
        </p>
        <p className="cnt_det">
          demo
        </p>
      </div>
      <div className="col-md-3">
        <p className="head_det">
          Monthly payment Due
        </p>
        <p className="cnt_det">
          Demo
        </p>
      </div>
     
    </div>
  </div>
</div>
            <div class="row">
              <div class="col-lg-12">
                <form>
                  <div class="row mt-3">
                    <div class="col-md-3">
                    <div class="select mt-4">
                      <label  className="d-block"></label>
  <select name="slct" id="slct">
    <option selected disabled>New Payment to be added</option>
    <option value="1">Catagory</option>
    <option value="2">Sub Catagory</option>
  </select>
</div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <label>Amount to be Credited</label>
                        <input
                          class="form-control"
                          type="text"
                          name="Speciality_name"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label></label>
                        <button className="btn btn-primary d-block mt-2">Credit Amount</button>
                      </div>
                    </div>
                    
                  
                    
                   
                  </div>
                </form>
                
                <div class="m-t-20 text-center mt-5">
                  <button class="btn btn-danger submit-btn mr-3">Cancel</button>
                  <button class="btn btn-primary submit-btn">Add Amount</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddPayment;
