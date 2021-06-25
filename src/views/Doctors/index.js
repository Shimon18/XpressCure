import React, { Component, lazy, Suspense } from "react";
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
import { HttpCallPost, HttpCallGet, handleError } from "../../apis/usehttps";
import { GET, POST, PUT } from "../../apis/constants";
import { Doctors, DoctorInfo } from "../../apis/Network";
import "./index.css";
export default class Doctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctorList: [],
      modal: false,
      doctorId: "",
      doctor: {},
    };
  }
  componentDidMount = () => {
    this.getDoctorsList();
  };
  getDoctorsList = () => {
    const userdata = localStorage.getItem("token");
    HttpCallGet(`${Doctors}`, GET, userdata)
      .then((res) => {
        console.log("getTestList", res.data);
        this.setState({ doctorList: res.data, AllData: res.data.data });
      })
      .catch((err) => {
        // handleError(err)
      });
  };

  toggle = (id) => {
    this.setState({ modal: !this.state.modal, doctorId: id }, () => {
      if (this.state.modal === true) {
        this.getDoctor();
      }
    });
  };
  getDoctor = () => {
    console.log("this.state.doctorId", this.state.doctorId);
    HttpCallGet(`${DoctorInfo}/${this.state.doctorId}`, GET)
      .then((res) => {
        this.setState({ doctor: res.data[0] });
        console.log("data doctor", res.data);
      })
      .catch((err) => {
        handleError(err);
      });
  };
  render() {
    return (
      <div className="page-wrapper">
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <div
                className="row "
                style={{ marginInlineStart: "7px", marginTop: "20px" }}
              >
                <div className="col-md-4">
                  <FormGroup>
                    <Input
                      size="lg"
                      type="text"
                      id="name"
                      placeholder="Search with Name, Phone And Email"
                      required
                      // style={{width:"30%", }}
                    />
                  </FormGroup>
                </div>
                <div>
                  <Button color="primary" size="lg" className="custom_search_btn">
                    <i className="fa fa-search mr-2" />Search
                  </Button>
                </div>
              </div>
              <CardBody>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Profile Icon</th>
                      <th>Name</th>
                      <th>Phone Number</th>
                      <th>Email</th>
                      <th>Specialisation</th>
                      <th>City</th>
                      <th>Area</th>
                      <th>Payment Status</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.doctorList.map((item, i) => {
                      console.log("item".item);
                      return (
                        <tr>
                          <td>{i + 1}</td>
                          <td>
                            <div>
                              <img
                                className="profile-pic"
                                src={item.profile_pic}
                              ></img>
                            </div>
                          </td>
                          <td>
                            {item.first_name} {item.last_name}
                          </td>
                          <td>{item.mobile_number}</td>
                          <td>{item.email}</td>
                          <td>{item.Specialization}</td>
                          <td>{item.City}</td>
                          <td>{item.Address}</td>
                          <td>"done"</td>
                          <td>
                            <Badge color="success">Active</Badge>
                          </td>
                          <td>
                            <Row>
                              <div className="d-flex align-items-center">
                              <Link to={`/editDoctor/${item._id}`}>
                                  <Button
                                    color="info"
                                    size="sm"
                                    className="btn-pill mr-2"
                                    // onClick={() => this.onEdit()}
                                  >
                                    <i className="fa fa-edit" />
                                  </Button>
                                </Link>

                                <Button
                                  color="danger"
                                  size="sm"
                                  className="btn-pill"
                                >
                                   <i className="fa fa-trash" />
                                </Button>
                              </div>
                             
                            </Row>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
                <Pagination>
                  <PaginationItem>
                    <PaginationLink previous tag="button"></PaginationLink>
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  {/* <PaginationItem>
                    <PaginationLink tag="button">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">4</PaginationLink>
                  </PaginationItem> */}
                  <PaginationItem>
                    <PaginationLink next tag="button"></PaginationLink>
                  </PaginationItem>
                </Pagination>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <div>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className="">
            <ModalHeader toggle={this.toggle}>Doctor Details</ModalHeader>
            <ModalBody>
              <table class="table table-bordered">
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td colspan="3">{this.state.doctor.username}</td>
                  </tr>
                  <tr>
                    <td>Phone</td>
                    <td colspan="3">{this.state.doctor.mobile_number}</td>
                  </tr>
                  <tr>
                    <td>Experience</td>
                    <td colspan="3">{this.state.doctor.Experience}</td>
                  </tr>
                  <tr>
                    <td>Specility</td>
                    <td colspan="3">{this.state.doctor.Specialization}</td>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td colspan="3">{this.state.doctor.Address}</td>
                  </tr>
                  <tr>
                    <td>State</td>
                    <td colspan="3">{this.state.doctor.State}</td>
                  </tr>{" "}
                  <tr>
                    <td>City</td>
                    <td colspan="3">{this.state.doctor.City}</td>
                  </tr>{" "}
                  <tr>
                    <td>Zipcode</td>
                    <td colspan="3">{this.state.doctor.pincode}</td>
                  </tr>{" "}
                  <tr>
                    <td>Education</td>
                    <td colspan="3">{this.state.doctor.username}</td>
                  </tr>{" "}
                  <tr>
                    <td>Licence No</td>
                    <td colspan="3">{this.state.doctor.Lincense_no}</td>
                  </tr>{" "}
                  <tr>
                    <td>Practice from</td>
                    <td colspan="3">{this.state.doctor.username}</td>
                  </tr>
                  <tr>
                    <td>Degree</td>
                    <td colspan="3">
                      {this.state.doctor.Certificate_University}
                    </td>
                  </tr>
                  <tr>
                    <td>Passing Year</td>
                    <td colspan="3">{this.state.doctor.super_pass_year}</td>
                  </tr>
                  <tr>
                    <td>Practice from</td>
                    <td colspan="3">{this.state.doctor.username}</td>
                  </tr>
                  <tr>
                    <td>Adhar Photo</td>
                    <td colspan="3">
                      <Button
                        color="info"
                        size="sm"
                        className="btn-pill"
                        // onClick={() => this.toggle(item._id)}
                      >
                        View
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Education Certificate</td>
                    <td colspan="3">
                      <Button
                        color="info"
                        size="sm"
                        className="btn-pill"
                        // onClick={() => this.toggle(item._id)}
                      >
                        View
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Doctor Cerficate</td>
                    <td colspan="3">
                      <Button
                        color="info"
                        size="sm"
                        className="btn-pill"
                        // onClick={() => this.toggle(item._id)}
                      >
                        View
                      </Button>
                    </td>
                  </tr>{" "}
                  <tr>
                    <td>PAN No</td>
                    <td colspan="3"></td>
                  </tr>{" "}
                  <tr>
                    <td>Adhar No</td>
                    {/* <td colspan="3">{this.state.doctor.username}</td> */}
                  </tr>{" "}
                  <tr>
                    <td>About</td>
                    <td colspan="3">{this.state.doctor.username}</td>
                  </tr>
                </tbody>
              </table>
            </ModalBody>
          </Modal>
        </div>
      </div>
    );
  }
}
