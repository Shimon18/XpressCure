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

class AddFeedback extends Component {
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
              <Link to={"/EmployeeFeedback"}>
                  <i className="fa fa-arrow-left back_btn"></i>
                </Link>
                <h4 class="page-title">Add Feedback</h4>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <form>
                  <div class="row mt-3">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Feedback for</label>
                        <Input
                        type="select"
                        name="Blood_group"
                        onChange={this.handleChange}
                      >
                            <option value="1">Please Select</option>
                      </Input>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Department</label>
                        <Input
                        type="select"
                        name="Blood_group"
                        onChange={this.handleChange}
                      >
                            <option value="1">Please Select</option>
                      </Input>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Employee Name</label>
                        <input
                          name="identity_front_side_img"
                          class="form-control"
                          type="text"
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        {/* <label>Kidney</label> */}
                       <textarea className="input_textarea"></textarea>
                      </div>
                    </div>
                  </div>
                </form>
                <div class="m-t-20 text-center">
                  <button class="btn btn-danger submit-btn mr-3">Cancel</button>
                  <button class="btn btn-primary submit-btn">Add</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddFeedback;
