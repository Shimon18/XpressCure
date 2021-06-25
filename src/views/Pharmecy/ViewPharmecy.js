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

class ViewPharmecy extends Component {
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
              <Link to={"/Pharmecy"}><i className="fa fa-arrow-left back_btn"></i></Link>
                <h4 class="page-title">View Pharmacy Detail</h4>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <form>
                  <div class="row mt-3">
                  <div class="col-md-4">
                      <div class="form-group">
                        <label> Name</label>
                        <input
                          class="form-control"
                          type="text"
                          name="Speciality_name"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label> Image</label>
                        <div className="d-flex">
                        <input
                          name="identity_front_side_img"
                          class="form-control"
                          type="file"
                        />
                        <button className="btn btn-primary text-center ml-2 c-btn">View</button>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Manufacturer Name</label>
                        <input
                          class="form-control"
                          type="text"
                          name="Speciality_name"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Salt</label>
                        <input
                          class="form-control"
                          type="text"
                          name="Speciality_name"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>MRP</label>
                        <input
                          class="form-control"
                          type="text"
                          name="Speciality_name"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Pack Size</label>
                        <input
                          class="form-control"
                          type="text"
                          name="Speciality_name"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Introduction Text</label>
                       <textarea className="input_textarea"></textarea>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Uses</label>
                       <textarea className="input_textarea"></textarea>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Side effects</label>
                       <textarea className="input_textarea"></textarea>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>How to use</label>
                       <textarea className="input_textarea"></textarea>
                      </div>
                    </div><div class="col-md-6">
                      <div class="form-group">
                        <label>Alcohol ?</label>
                       <textarea className="input_textarea"></textarea>
                      </div>
                    </div><div class="col-md-6">
                      <div class="form-group">
                        <label>Pregnancy?</label>
                       <textarea className="input_textarea"></textarea>
                      </div>
                    </div><div class="col-md-6">
                      <div class="form-group">
                        <label>Feeding</label>
                       <textarea className="input_textarea"></textarea>
                      </div>
                    </div><div class="col-md-6">
                      <div class="form-group">
                        <label>Driving</label>
                       <textarea className="input_textarea"></textarea>
                      </div>
                    </div><div class="col-md-6">
                      <div class="form-group">
                        <label>Kidney</label>
                       <textarea className="input_textarea"></textarea>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Liver</label>
                       <textarea className="input_textarea"></textarea>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Alternate Brands</label>
                       <textarea className="input_textarea"></textarea>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Tips</label>
                       <textarea className="input_textarea"></textarea>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Interactions</label>
                       <textarea className="input_textarea"></textarea>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>FAQ</label>
                       <textarea className="input_textarea"></textarea>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Lab test</label>
                       <textarea className="input_textarea"></textarea>
                      </div>
                    </div>
                   
                  
                    
                    
                  </div>
                </form>
                <div class="m-t-20 text-center">
                  <button class="btn btn-danger submit-btn mr-3">Cancel</button>
                  <button class="btn btn-primary submit-btn">Save & Update</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewPharmecy;
