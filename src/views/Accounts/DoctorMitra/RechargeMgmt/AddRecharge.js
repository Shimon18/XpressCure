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

class AddRecharge extends Component {
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
                <h4 class="page-title">Add Recharge</h4>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <form>
                  <div class="row mt-3">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Doctor Name</label>
                        <input
                          class="form-control"
                          type="text"
                          name="Speciality_name"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Date</label>
                        <input
                          class="form-control"
                          type="text"
                          name="Speciality_name"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Location</label>
                        <input
                          class="form-control"
                          type="text"
                          name="Speciality_name"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Recharge amount</label>
                        <input
                          class="form-control"
                          type="text"
                          name="Speciality_name"
                        />
                      </div>
                    </div>
                   
                  
                  
                    
                   
                  </div>
                </form>
                
                <div class="m-t-20 text-center">
                  <button class="btn btn-danger submit-btn mr-3">Cancel</button>
                  <button class="btn btn-primary submit-btn">ADD</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddRecharge;
