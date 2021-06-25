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

class ViewAppraisal extends Component {
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
                <h4 class="page-title">View Appraisal</h4>
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
                        <label>Name</label>
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
                          <button className="btn btn-primary text-center ml-2 c-btn">
                            View
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Reporting to</label>
                        <input
                          class="form-control"
                          type="text"
                          name="Speciality_name"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Last Appraisal date</label>
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
                            <th>Appraisal date</th>
                            <th>Approved by</th>
                            <th>Final rating</th>

                            <th>Appraised Records</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>01/01/2021</td>

                            <td>Shimon Chouhan</td>
                            <td>Shimon Chouhan</td>

                            <td>
                              <Row>
                                <div className="d-flex align-items-center ml-auto mr-auto">
                                  <Link to={""}>
                                    <Button
                                      color="info"
                                      size="sm"
                                      className="btn-pill mr-2"
                                      // onClick={() => this.onEdit()}
                                    >
                                      <i className="fa fa-edit" />
                                    </Button>
                                  </Link>
                                </div>
                              </Row>
                            </td>
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

export default ViewAppraisal;
