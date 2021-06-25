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

class AddAppraisal extends Component {
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
                <Link to={"/Appraisal"}>
                  <i className="fa fa-arrow-left back_btn"></i>
                </Link>
                <h4 class="page-title">Add Appraisal</h4>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <form>
                  <div class="row mt-3">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Employee Id</label>
                        <input
                          class="form-control"
                          type="text"
                          name="Speciality_name"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label> Employee Name</label>
                        <input
                          class="form-control"
                          type="text"
                          name="Speciality_name"
                        />
                      </div>
                    </div>
                    
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Appraising Name</label>
                        <input
                          class="form-control"
                          type="text"
                          name="Speciality_name"
                        />
                      </div>
                    </div>
    
                   
<div className="col-md-2">
    <img src="" />
  </div>
  <div className="col-md-10 mt-3">
    <div className="row">
      <div className="col-md-4">
        <p className="head_det">
          Name
        </p>
        <p className="cnt_det">
          Shimon chouhan
        </p>
      </div>
      <div className="col-md-4">
        <p className="head_det">
          Department
        </p>
        <p className="cnt_det">
          24
        </p>
      </div>
      <div className="col-md-4">
        <p className="head_det">
          Joined On
        </p>
        <p className="cnt_det">
          Male
        </p>
      </div>
      <div className="col-md-4">
        <p className="head_det">
          Last Appraised On
        </p>
        <p className="cnt_det">
          5'11
        </p>
      </div>
      
    </div>
  </div>
  <div class="col-md-12">
                      <div class="form-group">
                        <label>Appraisee Comments</label>
                       <textarea className="input_textarea"></textarea>
                      </div>
                    </div>

                    <div class="col-lg-12 mt-3">
                      {/* <h4 class="page-title">Bank account </h4> */}
                    </div>
                    <div class="col-md-4 mt-3">
                      <div class="form-group">
                        <label>Final rating</label>
                        <Input
                        type="select"
                        name="Blood_group"
                        onChange={this.handleChange}
                      >
                            <option value="1">Please Select</option>
                      </Input>
                        
                      </div>
                    </div>
                  </div>
                </form>
                <div class="m-t-20 text-center">
                  <button class="btn btn-danger submit-btn mr-3">Cancel</button>
                  <button class="btn btn-primary submit-btn">
                    add Appraisal
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

export default AddAppraisal;
