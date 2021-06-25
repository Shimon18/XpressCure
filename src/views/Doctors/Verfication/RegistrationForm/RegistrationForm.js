import React, { Component } from "react";
import { Link } from "react-router-dom";

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
} from "../../../../apis/usehttps";
import { GET, PUT } from "../../../../apis/constants";
import { DoctorInfo, stateList,getArea, DoctorInfoUpdate } from "../../../../apis/Network";

class AddDoctor extends Component {
  constructor() {
    super();
    this.state = {
      doctor: {},
      errors: {},
      stateListData:[]
    };
  }
  componentDidMount = () => {
    // const { match: { params },} = this.props;
    // this.setState({ doctorId: params.id }, () => {
    //   this.getDoctor();
    // });
    this.getAreaList();
    this.getStateList()
  };
  handleChange = (event) => {
    let doctor = this.state.doctor;
    doctor[event.target.name] = event.target.value;
    this.setState({ doctor }, () => {
      console.log("input data", this.state.doctor);
    });
  };
  getAreaList = () => {
    HttpCallGet(`${getArea}`, GET)
      .then((res) => {
        this.setState({ areaList: res.data.msg });
      })
      .catch((err) => {
        handleError(err);
      });
  };
  getStateList = () => {
    HttpCallGet(`${stateList}`, GET)
      .then((res) => {
        this.setState({ stateListData: res.data.state });
      })
      .catch((err) => {
        handleError(err);
      });
  };
  getCityList = () => {
    const userdata = localStorage.getItem("token");
    HttpCallGet(`${DoctorInfo}/6068453d8a864506bebe73f9`, GET, userdata)
      .then((res) => {
        this.setState({ doctor: res.data[0] });
      })
      .catch((err) => {
        handleError(err);
      });
  };

  validate = () => {
    // let course = this.state.fullname;
    let couresShortName = this.state.shortname;
    console.log("doctor", this.state.doctor.full_name);
    let errors = {};
    let isValid = true;

    if (!this.state.doctor.first_name) {
      isValid = false;
      errors["first_name"] = "Please enter First Name.";
    }
    if (!this.state.doctor.last_name) {
      isValid = false;
      errors["last_name"] = "Please enter Last Name.";
    }
    if (!this.state.doctor.email) {
      isValid = false;
      errors["email"] = "Please enter Email.";
    }
    if (!this.state.doctor.mobile_number) {
      isValid = false;
      errors["mobile_number"] = "Please enter Mobile Number.";
    }
    if (!this.state.doctor.Gender) {
      isValid = false;
      errors["Gender"] = "Please enter Gender.";
    }
    if (!this.state.doctor.Blood_group) {
      isValid = false;
      errors["Blood_group"] = "Please enter Blood group.";
    }
    if (!this.state.doctor.State) {
      isValid = false;
      errors["State"] = "Please enter  State.";
    }
    if (!this.state.doctor.City) {
      isValid = false;
      errors["City"] = "Please enter  City.";
    }
    if (!this.state.doctor.first_name) {
      isValid = false;
      errors["pincode"] = "Please enter pincode.";
    }
    if (!this.state.doctor.select_bank) {
      isValid = false;
      errors["select_bank"] = "Please enter Bank Name.";
    }
    if (!this.state.doctor.Account_No) {
      isValid = false;
      errors["Account_No"] = "Please enter Account Number";
    }
    if (!this.state.doctor.IFSC_Code) {
      isValid = false;
      errors["IFSC_Code"] = "Please enter IFSC Code.";
    }
    if (!this.state.doctor.Account_holder_name) {
      isValid = false;
      errors["Account_holder_name"] = "Please enter  Account holder name.";
    }
    if (!this.state.doctor.present_place) {
      isValid = false;
      errors["present_place"] = "Please enter place of practice.";
    }
    if (!this.state.doctor.Address) {
      isValid = false;
      errors["Address"] = "Please enter  Address.";
    }
    if (!this.state.doctor.UGCollege_University) {
      isValid = false;
      errors["UGCollege_University"] = "Please enter  Under Graduate College University.";
    }
    if (!this.state.doctor.ug_clg) {
      isValid = false;
      errors["ug_clg"] = "Please enter  Under Graduate college.";
    }
    if (!this.state.doctor.Course) {
      isValid = false;
      errors["Course"] = "Please enter  Course.";
    }
    if (!this.state.doctor.UGCollege_University) {
      isValid = false;
      errors["UGCollege_University"] = "Please enter  Under Graduate college University.";
    }
    if (!this.state.doctor.PGCollege_or_University) {
      isValid = false;
      errors["PGCollege_or_University"] =
        "Please enter  Post graduate College_or_University.";
    }
    if (!this.state.doctor.pg_clg) {
      isValid = false;
      errors["pg_clg"] = "Please enter  Post graduate college.";
    }
    if (!this.state.doctor.UGCollege_University) {
      isValid = false;
      errors["UGCollege_University"] = "Please enter  Under graduate University.";
    }
    if (!this.state.doctor.p_pass_year) {
      isValid = false;
      errors["p_pass_year"] = "Please enter passing year.";
    }
    if (!this.state.doctor.Specialization) {
      isValid = false;
      errors["Specialization"] = "Please enter  Specialization.";
    }
    if (!this.state.doctor.select_identity) {
      isValid = false;
      errors["select_identity"] = "Please enter identity proof.";
    }
    if (!this.state.doctor.identity_Number) {
      isValid = false;
      errors["identity_Number"] = "Please enter  identity proof number.";
    }
    if (!this.state.doctor.Lincense_no) {
      isValid = false;
      errors["Lincense_no"] = "Please enter  Medical licencing number.";
    }
    if (!this.state.doctor.Experience) {
      isValid = false;
      errors["Experience"] = "Please enter  Experience.";
    }
    if (!this.state.doctor.area_of_interest) {
      isValid = false;
      errors["area_of_interest"] = "Please enter  area of interest.";
    }
    if (!this.state.doctor.certificate_Img) {
      isValid = false;
      errors["certificate_Img"] = "Please enter Highest qualification certificate.";
    }
    if (!this.state.doctor.License_img_front_side) {
      isValid = false;
      errors["License_img_front_side"] =
        "Please enter Medical License front image.";
    }
    if (!this.state.doctor.License_img_back_side ) {
      isValid = false;
      errors["License_img_back_side"] = "Please enter Medical License back image";
    }
    if (!this.state.doctor.passing_year_certificate ) {
      isValid = false;
      errors["passing_year_certificate"] = "Please enter  passing certificate.";
    }
    if (!this.state.doctor.identity_front_side_img ) {
      isValid = false;
      errors["identity_front_side_img"] = "Please enter identity proof front image.";
    }
    if (!this.state.doctor.identity_back_side_img ) {
      isValid = false;
      errors["identity_back_side_img"] = "Please enter identity proof back image.";
    }
    this.setState({
      errors: errors,
    });

    return isValid;
  };

  onSubmit = (event) => {
    event.preventDefault();
    console.log("input data", this.state.doctor);

    if (this.validate()) {
      alert("hello");
    }
  };
  render() {
    return (
      <div>
        <div class="page-wrapper">
          <div class="content">
            <div class="row">
              <div class="col-lg-12">
                <Link to={"/AllDoctors"}><i className="fa fa-arrow-left back_btn"></i></Link>
                <h4 class="page-title">View Doctor Details </h4>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <form>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>First Name</label>
                        <input
                          class="form-control"
                          type="text"
                          name="first_name"
                          onChange={this.handleChange}
                        />
                        <div className="text-danger">
                          {this.state.errors.first_name}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Last Name</label>
                        <input
                          class="form-control"
                          type="text"
                          name="last_name"
                          onChange={this.handleChange}
                        />
                        <div className="text-danger">
                          {this.state.errors.last_name}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Email</label>
                        <input
                          name="email"
                          class="form-control"
                          type="Email"
                          onChange={this.handleChange}
                        />
                        <div className="text-danger">
                          {this.state.errors.email}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Password</label>
                        <input
                          name="email"
                          class="form-control"
                          type="Email"
                          onChange={this.handleChange}
                        />
                        <div className="text-danger">
                          {this.state.errors.email}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Date of Birth</label>
                        <input
                          name="email"
                          class="form-control"
                          type="Email"
                          onChange={this.handleChange}
                        />
                        <div className="text-danger">
                          {this.state.errors.email}
                        </div>
                      </div>
                    </div>
                  
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Phone No.</label>
                        <input
                          name="mobile_number"
                          class="form-control"
                          type="text"
                          onChange={this.handleChange}
                        />
                        <div className="text-danger">
                          {this.state.errors.mobile_number}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Gender</label>
                        <Input
                        type="select"
                        name="State"
                        id="ccmonth"
                      >
                            <option value="1">Please Select</option>
                      </Input>
                        <div className="text-danger">
                          {this.state.errors.Gender}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Blood Group</label>
                        <Input
                        type="select"
                        name="Blood_group"
                        onChange={this.handleChange}
                      >
                            <option value="1">Please Select</option>
                      </Input>
                        <div className="text-danger">
                          {this.state.errors.Blood_group}
                        </div>
                      </div>
                    </div>
                  
                    <div class="col-md-4">
                      <div class="form-group">
                        {/* <label>State</label>
                        <input
                          class="form-control"
                          type="text"
                          name="State"
                          onChange={this.handleChange}
                        /> */}
                        <FormGroup>
                      <Label>State</Label>
                      <Input
                        type="select"
                        name="State"
                        id="ccmonth"
                      >
                        {this.state.stateListData.map((item)=>{
                          return(
                            <option value="1">{item}</option>
                          )
                        })}
                      </Input>
                    </FormGroup>
                        <div className="text-danger">
                          {this.state.errors.State}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>City</label>
                        <Input
                        type="select"
                        name="City"
                        onChange={this.handleChange}
                      >
                            <option value="1">Please Select</option>
                      </Input>
                        <div className="text-danger">
                          {this.state.errors.City}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>pincode</label>
                        <Input
                        type="select"
                        name="pincode"
                        onChange={this.handleChange}
                      >
                            <option value="1">Please Select</option>
                      </Input>
                        <div className="text-danger">
                          {this.state.errors.pincode}
                        </div>
                      </div>
                    </div>
                 
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Bank Name</label>
                        <Input
                        type="select"
                        name="Blood_group"
                        onChange={this.handleChange}
                      >
                            <option value="1">Please Select</option>
                      </Input>
                        <div className="text-danger">
                          {this.state.errors.select_bank}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Account Number</label>
                        <input
                          name="Account_No"
                          class="form-control"
                          type="text"
                          onChange={this.handleChange}
                        />
                        <div className="text-danger">
                          {this.state.errors.Account_No}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>IFSC Code</label>
                        <input
                          name="IFSC_Code"
                          class="form-control"
                          type="text"
                          onChange={this.handleChange}
                        />
                        <div className="text-danger">
                          {this.state.errors.IFSC_Code}
                        </div>
                      </div>
                    </div>
                  
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Account Holder Name</label>
                        <input
                          name="Account_holder_name"
                          class="form-control"
                          type="text"
                          onChange={this.handleChange}
                        />
                        <div className="text-danger">
                          {this.state.errors.Account_holder_name}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Place of practice</label>
                        <input
                          name="present_place"
                          class="form-control"
                          type="text"
                          onChange={this.handleChange}
                        />
                        <div className="text-danger">
                          {this.state.errors.present_place}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Address</label>
                        <input
                          name="Address"
                          class="form-control"
                          type="text"
                          onChange={this.handleChange}
                        />
                        <div className="text-danger">
                          {this.state.errors.Address}
                        </div>
                      </div>
                    </div>
                 
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Under Graduate College University</label>
                        <Input
                        type="select"
                        name="Blood_group"
                        onChange={this.handleChange}
                      >
                            <option value="1">Please Select</option>
                      </Input>
                        <div className="text-danger">
                          {this.state.errors.UGCollege_University}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Under Graduate College</label>
                        <Input
                        type="select"
                        name="Blood_group"
                        onChange={this.handleChange}
                      >
                            <option value="1">Please Select</option>
                      </Input>
                        <div className="text-danger">
                          {this.state.errors.ug_clg}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Course</label>
                        <Input
                        type="select"
                        name="Blood_group"
                        onChange={this.handleChange}
                      >
                            <option value="1">Please Select</option>
                      </Input>
                        <div className="text-danger">
                          {this.state.errors.Course}
                        </div>
                      </div>
                    </div>
                 
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Under Graduate Passing Year</label>
                        <Input
                        type="select"
                        name="Blood_group"
                        onChange={this.handleChange}
                      >
                            <option value="1">Please Select</option>
                      </Input>
                        <div className="text-danger">
                          {this.state.errors.UGCollege_University}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Post Graduate College or University</label>
                        <Input
                        type="select"
                        name="Blood_group"
                        onChange={this.handleChange}
                      >
                            <option value="1">Please Select</option>
                      </Input>
                        <div className="text-danger">
                          {this.state.errors.PGCollege_or_University}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Post Graduate College</label>
                        <Input
                        type="select"
                        name="Blood_group"
                        onChange={this.handleChange}
                      >
                            <option value="1">Please Select</option>
                      </Input>
                        <div className="text-danger">
                          {this.state.errors.pg_clg}
                        </div>
                      </div>
                    </div>
                 
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Courses</label>
                        <Input
                        type="select"
                        name="Blood_group"
                        onChange={this.handleChange}
                      >
                            <option value="1">Please Select</option>
                      </Input>
                        <div className="text-danger">
                          {this.state.errors.UGCollege_University}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Post Graduate pass year</label>
                        <Input
                        type="select"
                        name="Blood_group"
                        onChange={this.handleChange}
                      >
                            <option value="1">Please Select</option>
                      </Input>
                        <div className="text-danger">
                          {this.state.errors.p_pass_year}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label> Specialization</label>
                        <Input
                        type="select"
                        name="Blood_group"
                        onChange={this.handleChange}
                      >
                            <option value="1">Please Select</option>
                      </Input>
                        <div className="text-danger">
                          {this.state.errors.Specialization}
                        </div>
                      </div>
                    </div>
                 
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Your Identity Proff</label>
                        <Input
                        type="select"
                        name="Blood_group"
                        onChange={this.handleChange}
                      >
                            <option value="1">Please Select</option>
                      </Input>
                        <div className="text-danger">
                          {this.state.errors.select_identity}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Identity Proff Number</label>
                        <input
                          name="identity_Number"
                          class="form-control"
                          type="text"
                          onChange={this.handleChange}
                        />
                        <div className="text-danger">
                          {this.state.errors.identity_Number}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Medical Licencing Authority</label>
                        <input
                          name="Lincense_no"
                          class="form-control"
                          type="text"
                          onChange={this.handleChange}
                        />
                        <div className="text-danger">
                          {this.state.errors.Lincense_no}
                        </div>
                      </div>
                    </div>
                  
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Experience</label>
                        <input
                          name="Experience"
                          class="form-control"
                          type="text"
                          onChange={this.handleChange}
                        />
                        <div className="text-danger">
                          {this.state.errors.Experience}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Area of Intrest</label>
                        <Input
                        type="select"
                        name="Blood_group"
                        onChange={this.handleChange}
                      >
                            <option value="1">Please Select</option>
                      </Input>
                      
                        <div className="text-danger">
                          {this.state.errors.area_of_interest}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Medical Licencing Number</label>
                        <input
                          name="Lincense_no"
                          class="form-control"
                          type="text"
                          onChange={this.handleChange}
                        />
                        <div className="text-danger">
                          {this.state.errors.Lincense_no}
                        </div>
                      </div>
                    </div>
                 
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Highest Qualification Certificate</label>
                        <button className="btn btn-primary d-block">View</button>
                        <div className="text-danger">
                          {this.state.errors.certificate_Img}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Medical Licence Front Image</label>
                        <button className="btn btn-primary d-block">View</button>
                        <div className="text-danger">
                          {this.state.errors.License_img_front_side}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Medical Licence Back Image</label>
                        <button className="btn btn-primary d-block">View</button>
                        <div className="text-danger">
                          {this.state.errors.License_img_back_side}
                        </div>
                      </div>
                    </div>
                  
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Passing certificate</label>
                        <button className="btn btn-primary d-block">View</button>
                        <div className="text-danger">
                          {this.state.errors.passing_year_certificate}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Identity Proof Front</label>
                        <button className="btn btn-primary d-block">View</button>
                        <div className="text-danger">
                          {this.state.errors.identity_front_side_img}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Identity Proof Back</label>
                        <button className="btn btn-primary d-block">View</button>
                        <div className="text-danger">
                          {this.state.errors.identity_back_side_img}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Profile Image</label>
                        <button className="btn btn-primary d-block">View</button>
                        <div className="text-danger">
                          {this.state.errors.identity_front_side_img}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Doctor Signature</label>
                        <button className="btn btn-primary d-block">View</button>
                        <div className="text-danger">
                          {this.state.errors.identity_front_side_img}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="m-t-20 text-center mt-5">
                  <button
                      class="btn btn-danger submit-btn mr-3"
                      
                    >
                      Cancel
                    </button>
                    
                    
                    
                   
                    <button
                      class="btn btn-primary submit-btn"
                    
                    >
                      Save & Update
                    </button>
                   
                   
                    
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
   
      </div>
    );
  }
}

export default AddDoctor;
