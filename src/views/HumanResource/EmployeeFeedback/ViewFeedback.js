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

class ViewFeedback extends Component {
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
                <h4 class="page-title">View Feedback</h4>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <form>
                  <div class="row mt-3">
                    
    
                   
<div className="col-md-2">
    <img src="" />
  </div>
  <div className="col-md-10 mt-3">
    <div className="row">
      <div className="col-md-4">
        <p className="head_det">
          Employee Name
        </p>
        <p className="cnt_det">
          Shimon chouhan
        </p>
      </div>
      <div className="col-md-4">
        <p className="head_det">
          Employee ID
        </p>
        <p className="cnt_det">
          24
        </p>
      </div>
      <div className="col-md-4">
        <p className="head_det">
          Department
        </p>
        <p className="cnt_det">
          Male
        </p>
      </div>
      <div className="col-md-4">
        <p className="head_det">
          Feedback On
        </p>
        <p className="cnt_det">
          5'11
        </p>
      </div>
      <div className="col-md-4">
        <p className="head_det">
          Feedback Given on
        </p>
        <p className="cnt_det">
          5'11
        </p>
      </div>
      
    </div>
  </div>
  <div class="col-md-12">
                      <div class="form-group">
                        <label>Feedback</label>
                       <textarea className="input_textarea"></textarea>
                      </div>
                    </div>

                   </div>
                </form>
                <div class="m-t-20 text-center">
                  <button class="btn btn-danger submit-btn mr-3">Cancel</button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewFeedback;
