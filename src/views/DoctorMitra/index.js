import React, { Component, lazy, Suspense } from "react";
import { Link } from 'react-router-dom';
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
import { getDoctorMitra,DoctorInfo } from "../../apis/Network";
import "./index.css";
export default class DoctorMitra extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctorMitraList: [],
      modal:false,
      doctorId:''
    };
  }
  componentDidMount = () => {
    this.getDoctorMitraList();

  };
  getDoctorMitraList = () => {
    var id = this.state.subject_id;
    HttpCallGet(`${getDoctorMitra}`, GET)
      .then((res) => {
        this.setState({ doctorMitraList: res.data });
      })
      .catch((err) => {
        // handleError(err)
      });
  };

 toggle = (id) => {
   this.setState({modal:!this.state.modal,doctorId:id},()=>{
     this.getDoctor()
   })
 };

  render() {
    return (
      <div>
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <div
                className="row "
                style={{ marginInlineStart: "50px", marginTop: "20px" }}
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
                  <Button color="primary" size="lg" className="btn-search">
                    Search
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
                      <th>Age</th>
                      <th>Blood Group</th>
                      <th>Gender</th>
                      <th>Review</th>
                      <th>Specialisation</th>
                      <th>City</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.doctorMitraList.map((item, i) => {
                      return (
                        <tr>
                          <td>{i + 1}</td>
                          <td>
                            <div className="profile-img">
                              <img
                                className="profile-pic"
                                src={item.photo}
                              ></img>
                            </div>
                          </td>
                          <td>
                            {item.username}
                          </td>
                          <td>{item.mobile}</td>
                          <td>{item.email}</td>
                          <td>20</td>
                          <td>{item.blood_group}</td>
                          <td>{item.gender}</td>
                          <td>{item.rating}</td>
                          <td>{item.Specialization}</td>
                          <td>{item.City}</td>
                          <td>
                            <Badge color="success">{item.status}</Badge>
                          </td>
                          <td>
                            <Row>
                              <Col col="1" className="mb-3 mb-xl-0 text-center">
                                <Button
                                  color="info"
                                  size="sm"
                                  className="btn-pill"
                                  onClick={() => this.toggle(item._id)}
                                >
                                  View
                                </Button>
                              </Col>
                              <Col col="1" className="mb-3 mb-xl-0 text-center">
                              <Link to={`/editDoctorMitra/${item._id}`}>
                                <Button
                                  color="info"
                                  size="sm"
                                  className="btn-pill"
                                >
                                  Edit
                                </Button>
                                </Link>
                              </Col>
                              <Col col="1" className="mb-3 mb-xl-0 text-center">
                                <Button
                                  color="danger"
                                  size="sm"
                                  className="btn-pill"
                                >
                                  Delete
                                </Button>
                              </Col>
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
          <Modal isOpen={this.state.modal} toggle={this.toggle} className=''>
            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
            <ModalBody>
            </ModalBody>
         <Table>
      <tr>
        <td>Name</td>
        <td>jay</td>
      </tr>
         </Table>
          </Modal>
        </div>
      </div>
    );
  }
}
