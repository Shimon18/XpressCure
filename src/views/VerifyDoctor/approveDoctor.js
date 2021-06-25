import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row,
} from "reactstrap";
class ApproveDoctor extends Component {
  constructor() {
    super();
    this.state = {
      doctorId: "",
      stateListData: [],
    };
  }
  componentDidMount = () => {
    const {
      match: { params },
    } = this.props;
    this.setState({ doctorId: params.id }, () => {
      // this.getDoctor();
    });
  };
  onView=()=>{

  }
  render() {
    return (
      <div>
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
                    // defaultValue={this.state.doctor.full_name}
                    // onChange={this.handleChange}
                  />
                  {/* <div className="text-danger">
                        {this.state.errors.course}
                      </div> */}
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
                    // defaultValue={this.state.doctor.email}
                    // onChange={this.handleChange}
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
                    // defaultValue={this.state.doctor.mobile_number}
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
                    // defaultValue={this.state.doctor.Specialization}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs="6">
                <FormGroup>
                  <Label>State</Label>
                  <Input
                    type="select"
                    name="ccmonth"
                    id="ccmonth"
                    // defaultValue={this.state.doctor.State}
                  >
                    {this.state.stateListData.map((item) => {
                      return <option value="1">{item}</option>;
                    })}
                  </Input>
                </FormGroup>
              </Col>
              <Col xs="6">
                <FormGroup>
                  <Label>Area</Label>
                  <Input type="select" name="ccyear" id="ccyear">
                    {/* {this.state.areaList.map((item,i)=>{
                         return (
                          <option value="12">{item.disease_name}</option>
                         )
                       })} */}
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
                    // defaultValue={this.state.doctor.Lincense_no}
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
                    // defaultValue={this.state.doctor.mobile_number}
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
                    // value={this.state.doctor.Experience}
                  />
                </FormGroup>
              </Col>
              <Col xs="6">
                <FormGroup>
                  <Label htmlFor="cvv">Identity front side img</Label>
                  {/* <Input type="file" id="cvv" placeholder="" required /> */}
                  <Button
                    color="info"
                    size="sm"
                    className="btn-pill"
                    onClick={() => this.onView()}
                  >
                    View
                  </Button>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs="6">
                <FormGroup>
                  <Label htmlFor="cvv">License img front side</Label>
                  <Button
                    color="info"
                    size="sm"
                    className="btn-pill"
                    onClick={() => this.onView()}
                  >
                    View
                  </Button>
                  {/* <Input type="file" id="cvv" placeholder="" required /> */}
                </FormGroup>
              </Col>
              <Col xs="6">
                <FormGroup>
                  <Label htmlFor="cvv">License img back side]</Label>
                  <Button
                    color="info"
                    size="sm"
                    className="btn-pill"
                    onClick={() => this.onView()}
                  >
                    View
                  </Button>
                  {/* <Input type="file" id="cvv" placeholder="" required /> */}
                </FormGroup>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col xs="1">
              <Link to={`/addDoctorCategory`}>
                <Button
                  className="btn btn-info"
                  // onClick={(event) => this.onUpdate(event)}
                >
                  Approve
                </Button>
                </Link>
              </Col>
              <Col xs="1">
                <Link to={`/doctor`}>
                  <Button className="pr">Cancel</Button>
                </Link>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default ApproveDoctor;
