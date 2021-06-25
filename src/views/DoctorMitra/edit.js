import React, { Component } from "react";
import { Link } from 'react-router-dom';

import {
  Card,
  CardBody,
  Col,
  Row,
  Table,
  Button,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import {
  HttpCallPost,
  HttpCallGet,
  HttpCallDelete,
  handleError,
} from "../../apis/usehttps";
import { GET, PUT } from "../../apis/constants";
import { DoctorInfo, DoctorInfoUpdate } from "../../apis/Network";
class DoctorMitraEdit extends Component {
  constructor() {
    super();
    this.state = {
      doctorId:'',
      doctor: { full_name: "" },
      errors: {},
    };
  }
  componentDidMount = () => {
    const {
      match: { params },
    } = this.props;
    console.log("params", params);
    this.setState({ doctorId: params.id },()=>{
      // this.getDoctor();
    })
  };

  getDoctor = () => {
    console.log("this.state.doctorId",this.state.doctorId)
    const userdata = localStorage.getItem("token");
    HttpCallGet(`${DoctorInfo}/${this.state.doctorId}`, GET, userdata)
      .then((res) => {
        this.setState({ doctor: res.data[0] });
      })
      .catch((err) => {
        handleError(err);
      });
  };
  getCityList = () => {
    const userdata = localStorage.getItem("token");
    HttpCallGet(`${DoctorInfo}/6068453d8a864506bebe73f9`, GET, userdata)
      .then((res) => {
        console.log("jsyad0", res.data[0]);
        this.setState({ doctor: res.data[0] });
      })
      .catch((err) => {
        handleError(err);
      });
  };
  handleChange = (event) => {
    let doctor = this.state.doctor;
    doctor[event.target.name] = event.target.value;
    this.setState({ doctor });
  };

  onUpdate = (event) => {
    event.preventDefault();
    if (this.validate()) {
      let formData = new FormData(); //formdata object

      formData.append("full_name", "ABC"); //append the values with key, value pair
      formData.append("last_name", "patel");
      HttpCallPost(
        `${DoctorInfoUpdate}/${this.state.doctorId}`,
        PUT,
        formData
      )
        .then((res) => {
          console.log("add coures", res.data);
          // this.props.history.push('doctor');
        })
        .catch((err) => {
          // handleError(err)
          console.log("sjksdjbksajagk.jsdskhu", err);
        });
    }
  };
  validate = () => {
    // let course = this.state.fullname;
    let couresShortName = this.state.shortname;
    console.log("doctor", this.state.doctor.full_name);
    let errors = {};
    let isValid = true;

    if (!this.state.doctor.full_name) {
      isValid = false;
      errors["course"] = "Please enter  name.";
    }
    this.setState({
      errors: errors,
    });

    return isValid;
  };

  render() {
    return (
      <div>
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardBody>
                <Row>
                  <Col xs="6">
                    <FormGroup>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        type="text"
                        id="full_name"
                        name="full_name"
                        placeholder="Enter your name"
                        required
                        defaultValue={this.state.doctor.full_name}
                        onChange={this.handleChange}
                      />
                      <div className="text-danger">
                        {this.state.errors.course}
                      </div>
                    </FormGroup>
                  </Col>
                  <Col xs="6">
                    <FormGroup>
                      <Label htmlFor="name">Email</Label>
                      <Input
                        type="text"
                        name="email"
                        placeholder="Enter your email"
                        required
                        defaultValue={this.state.doctor.email}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="6">
                    <FormGroup>
                      <Label htmlFor="ccnumber">Phone Number</Label>
                      <Input
                        type="text"
                        name="mobile_number"
                        placeholder="Enter your mobile number"
                        required
                        defaultValue={this.state.doctor.mobile_number}
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="6">
                    <FormGroup>
                      <Label htmlFor="ccnumber">Specility</Label>
                      <Input
                        type="text"
                        name="Specialization"
                        placeholder="Enter your specility"
                        required
                        defaultValue={this.state.doctor.Specialization}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="6">
                    <FormGroup>
                      <Label>City</Label>
                      <Input
                        type="select"
                        name="ccmonth"
                        id="ccmonth"
                        defaultValue={"7"}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xs="6">
                    <FormGroup>
                      <Label>Area</Label>
                      <Input type="select" name="ccyear" id="ccyear">
                        <option>2017</option>
                        <option>2018</option>
                        <option>2019</option>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                        <option>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                        <option>2026</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="6">
                    <FormGroup>
                      <Label>Doctor Liencience No</Label>
                      <Input
                        type="text"
                        name="Lincense_no"
                        placeholder="Enter your Doctor Liencience No"
                        required
                        defaultValue={this.state.doctor.Lincense_no}
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="6">
                    <FormGroup>
                      <Label>Practice Form</Label>
                      <Input
                        type="text"
                        id="ccnumber"
                        name="mobile_number"
                        placeholder="Enter your practice form"
                        required
                        defaultValue={this.state.doctor.mobile_number}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="6">
                    <FormGroup>
                      <Label>Experience</Label>
                      <Input
                        type="textarea"
                        Experience
                        placeholder=""
                        required
                        value={this.state.doctor.Experience}
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="6">
                    <FormGroup>
                      <Label htmlFor="cvv">Experience</Label>
                      <Input type="file" id="cvv" placeholder="" required />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="6">
                    <FormGroup>
                      <Label htmlFor="cvv">Experience</Label>
                      <Input type="file" id="cvv" placeholder="" required />
                    </FormGroup>
                  </Col>
                  <Col xs="6">
                    <FormGroup>
                      <Label htmlFor="cvv">Experience</Label>
                      <Input type="file" id="cvv" placeholder="" required />
                    </FormGroup>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col xs="1">
                    <Button
                      className="btn btn-info"
                      onClick={(event) => this.onUpdate(event)}
                    >
                      Update
                    </Button>
                  </Col>
                  <Col xs="1">
                  <Link to={`/doctor`}>
                    <Button className="pr">Cancel</Button>
                    </Link>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DoctorMitraEdit;
