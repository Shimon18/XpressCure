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
import "./../../index.css";
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
                  <div className="col-md-4 d-flex align-items-center">
                  <h4 class="page-title">Patients</h4>
                  </div>
                <div className="col-md-8 d-flex justify-content-end pr-4">
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
                
                <div>
                  <Button color="primary" size="lg" className="custom_search_btn ml-3 px-4">
                    <i className="fa fa-search mr-2" />Search
                  </Button>
              
                </div>
              </div>
              </div>
              <CardBody>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Patient Id</th>
                      <th>Profile Icon</th>
                      <th>Patient Name</th>
                      <th>Doctor Name</th>
                      <th>Specialisation</th>
                      <th>Doctor Mitra Name</th>
                      <th>Registered On</th>
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
                          <td>Demo name</td>
                          
                          <td>{item.Specialization}</td>
                          
                          <td>Demo Mitra</td>
                          <td>01/01/2021</td>
                          <td>
                            <Badge color="success">Active</Badge>
                          </td>
                          <td>
                            <Row>
                              <div className="d-flex align-items-center ml-auto mr-auto">
                              <Link to={"/PatientDetail"}>
                                  <Button
                                    color="info"
                                    size="sm"
                                    className="btn-pill mr-2"
                                    // onClick={() => this.onEdit()}
                                  >
                                    <i className="fa fa-edit" />
                                  </Button>
                                </Link>

                                {/* <Button
                                  color="danger"
                                  size="sm"
                                  className="btn-pill"
                                >
                                   <i className="fa fa-trash" />
                                </Button> */}
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
             
                  <PaginationItem>
                    <PaginationLink next tag="button"></PaginationLink>
                  </PaginationItem>
                </Pagination>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <div>
 
        </div>
      </div>
    );
  }
}
