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
import { HttpCallPost, HttpCallGet, handleError } from "../../apis/usehttps";
import { GET, POST, PUT } from "../../apis/constants";
import { Doctors, DoctorInfo } from "../../apis/Network";
import './index.css'

class VerifyDoctor extends Component {
  constructor() {
    super();
    this.state = {
      doctorList:[
        {
          "first_name": "jjjjj",
          "last_name": "patel",
          "Gender": "male",
          "DOB": "10/11/2000",
          "Blood_group": "b+",
          "UGCollege_University": "davv",
          "ug_clg": " ",
          "Course": "bsc",
          "u_pass_year": "2021",
          "PGCollege_or_University": "davv",
          "pg_clg": " ",
          "Courses": "msc",
          "p_pass_year": "2027",
          "Certificate_University": "davv",
          "certificate_course": "diploma",
          "c_pass_year": "2030",
          "super_clg": "test clg",
          "super_course": "test course",
          "super_pass_year": "2021",
          "certificate_Img": [
              {
                  "url": "http://res.cloudinary.com/dha2sjb75/image/upload/v1622282193/doctor/1622282193594.jpg",
                  "imgId": "8e921b3c74c32230683867679823da54"
              }
          ],
          "Employment_status": "active",
          "Specialization": "test",
          "area_of_interest": [
              "dibotology"
          ],
          "Experience": "1",
          "State": "mp",
          "City": "indore",
          "Address": "demo add",
          "pincode": "452010",
          "Lincense_no": "123456",
          "issued_date": "10/10/2020",
          "issue_auth": "medical auth",
          "License_img_front_side": [
              {
                  "url": "http://res.cloudinary.com/dha2sjb75/image/upload/v1622290260/doctor/1622290260342.png",
                  "imgId": "156318c038b4eeae9d040ac318267da2"
              }
          ],
          "License_img_back_side": [
              {
                  "url": "http://res.cloudinary.com/dha2sjb75/image/upload/v1622202511/doctor/1622202509885.png",
                  "imgId": "5c2b41bab66be80ce7effbf0bd8f0ca7"
              }
          ],
          "select_identity": "adhar card",
          "identity_Number": "1234567891",
          "identity_back_side_img": [
              ""
          ],
          "identity_front_side_img": [
              {
                  "url": "http://res.cloudinary.com/dha2sjb75/image/upload/v1622202513/doctor/1622202512578.jpg",
                  "imgId": "eb9b4992eca451d63922d3e65174ce9b"
              }
          ],
          "select_bank": "axis bank",
          "Account_No": "9876543210",
          "IFSC_Code": "10101",
          "phone_number": "6267743107",
          "mobile_number": " ",
          "Account_holder_name": "rony",
          "status": "active",
          "present_place": " ",
          "register": "1",
          "profile_pic": "https://image.freepik.com/free-vector/doctor-character-background_1270-84.jpg",
          "certificate": [],
          "fees": 200,
          "rating": 4,
          "notification_count": 0,
          "online_status": "0",
          "algorithm_index": 2,
          "total_cases": 0,
          "patient_status": "0",
          "_id": "60b0d88a796f356d2bef21e9",
          "__v": 0,
          "updatedAt": "2021-05-31T17:15:01.944Z"
      }
      ]
    };
  }

  onView=()=>{

  }
  render() {
    return <div>
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
                            <div className="profile-img">
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
                              <Col col="1" className="mb-3 mb-xl-0 text-center">
                                <Link to={`/verifyDoctors/${item._id}`}>
                                <Button
                                  color="info"
                                  size="sm"
                                  className="btn-pill"
                                  onClick={() => this.onView(item._id)}
                                >
                                  View
                                </Button>
                                </Link>
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

    </div>;
  }
}

export default VerifyDoctor;
