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
class AddDoctorCategory extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <Row>
              <Col xs="6">
              <FormGroup>
                      <Label htmlFor="ccmonth">Category</Label>
                      <Input type="select" name="ccmonth" id="ccmonth">
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
            </Row>
            <Row>
              <Col xs="6">
              <FormGroup>
                      <Label htmlFor="ccmonth">Sub Category</Label>
                      <Input type="select" name="ccmonth" id="ccmonth">
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
            </Row>
            <Row>
              <Col xs="1">
              <Link to={`/addDoctorCategory`}>
                <Button
                  className="btn btn-info"
                  // onClick={(event) => this.onUpdate(event)}
                >
                  Submit
                </Button>
                </Link>
              </Col>
              <Col xs="1">
                <Link to={`/home`}>
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

export default AddDoctorCategory;
