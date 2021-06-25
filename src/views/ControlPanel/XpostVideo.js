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

class XpostVideo extends Component {
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
                <Link to={"/ControlDashboard"}>
                  <i className="fa fa-arrow-left back_btn"></i>
                </Link>
                <h4 class="page-title">X Post Video Master</h4>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <form>
                  <div class="row mt-3">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Length of Video</label>
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
                  <button class="btn btn-primary submit-btn">
                    Add Update
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

export default XpostVideo;
