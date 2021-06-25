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

class ViewSubscriptionMgmt extends Component {
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
                <h4 class="page-title">View Subscription Management</h4>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <form>
                  <div class="row mt-3">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Doctor name</label>
                        <input
                          class="form-control"
                          type="text"
                          name="Speciality_name"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Subscription type</label>
                        <input
                          class="form-control"
                          type="text"
                          name="Speciality_name"
                        />
                      </div>
                    </div>
                   
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Subscribed On</label>
                        <input
                          class="form-control"
                          type="text"
                          name="Speciality_name"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Subscription Expires on</label>
                        <input
                          class="form-control"
                          type="text"
                          name="Speciality_name"
                        />
                      </div>
                    </div>

                    <div class="col-lg-12 mt-3">
                      {/* <h4 class="page-title">Bank account </h4> */}
                    </div>
                    <CardBody>
                      <Table>
                        <thead>
                          <tr>
                            <th>Content Type</th>
                            <th>Content Link</th>
                            <th>Published date</th>

                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>01/01/2021</td>

                            <td>Shimon Chouhan</td>
                            <td>Shimon Chouhan</td>

                           
                          </tr>
                        </tbody>
                      </Table>
                    </CardBody>
                  </div>
                </form>
                <div class="m-t-20 text-center">
                  <button class="btn btn-danger submit-btn mr-3">Cancel</button>
                  <button class="btn btn-primary submit-btn">
                    Save & Update
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

export default ViewSubscriptionMgmt;
