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

class AddSubscriptionMgmt extends Component {
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
                <Link to={"/XpostSubscriptionMgmt"}>
                  <i className="fa fa-arrow-left back_btn"></i>
                </Link>
                <h4 class="page-title">Add Subscription</h4>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <form>
                  <div class="row mt-3">
                  <div class="col-md-4 mt-3">
                      <div class="form-group">
                        <label>Doctor</label>
                        <Input
                        type="select"
                        name="Blood_group"
                        onChange={this.handleChange}
                      >
                            <option value="1">Please Select</option>
                      </Input>
                        
                      </div>
                    </div>
                   
<div className="col-md-2">
    <img src="" />
  </div>
  <div className="col-md-10 mt-3">
    <div className="row">
      <div className="col-md-4">
        <p className="head_det">
          Doctor Name
        </p>
        <p className="cnt_det">
          Shimon chouhan
        </p>
      </div>
      <div className="col-md-4">
        <p className="head_det">
          Specialization
        </p>
        <p className="cnt_det">
          24
        </p>
      </div>
      <div className="col-md-4">
        <p className="head_det">
          Registered On
        </p>
        <p className="cnt_det">
          Male
        </p>
      </div>
      <div className="col-md-4">
        <p className="head_det">
          Category
        </p>
        <p className="cnt_det">
          5'11
        </p>
      </div>
      <div className="col-md-4">
        <p className="head_det">
          Sub-Category
        </p>
        <p className="cnt_det">
          5'11
        </p>
      </div>
      
    </div>
  </div>


                    <div class="col-lg-12 mt-3">
                      {/* <h4 class="page-title">Bank account </h4> */}
                    </div>
                    <div class="col-md-4 mt-3">
                      <div class="form-group">
                        <label>Choose your plan</label>
                        <Input
                        type="select"
                        name="Blood_group"
                        onChange={this.handleChange}
                      >
                            <option value="1">Please Select</option>
                      </Input>
                        
                      </div>
                    </div>
                    <div class="col-md-4 mt-3">
                      <div class="form-group">
                        <label>Amount to be paid</label>
                        <input
                          class="form-control"
                          type="text"
                          name="Speciality_name"
                        />
                      </div>
                    </div>
                    <div class="col-md-4 mt-5">
                        <button className="btn btn-primary">Add amount</button>
                    </div>
                  </div>
                </form>
                <div class="m-t-20 text-center">
                  <button class="btn btn-danger submit-btn mr-3">Cancel</button>
                  <button class="btn btn-primary submit-btn">
                    add Subscription
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddSubscriptionMgmt;
