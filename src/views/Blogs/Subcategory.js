import React, { Component } from "react";
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
class SubCategory extends Component {
  constructor() {
    super();
    this.state = {
      categoryList: [1],
      modal: false,
      errors:{},
      category:{name:""}
    };
  }
  toggle = (id) => {
    this.setState({ modal: !this.state.modal, doctorId: id });
  };
  handleChange = (event) => {
    let category = this.state.category;
    category[event.target.name] = event.target.value;
    this.setState({ category },()=>{
    });

  };
  validate = () => {
    // let course = this.state.fullname;
    let errors = {};
    let isValid = true;

    if (!this.state.category.name) {
      isValid = false;
      errors["category"] = "Please enter sub Category.";
    }
    this.setState({
      errors: errors,
    });

    return isValid;
  };
   onAddCategory=(event)=>{
    event.preventDefault();
    if (this.validate()) {
    }
   }
  render() {
    return (
      <div>
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <div style={{ width: "95%" }}>
                <Button
                  color="info"
                  size="sm"
                  style={{ float: "right", marginTop: "20px" }}
                  className="btn"
                  onClick={() => this.toggle()}
                >
                  Add sub Category
                </Button>
              </div>
              <CardBody>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>sub Category Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.categoryList.map((item, i) => {
                      console.log("item".item);
                      return (
                        <tr>
                          <td>{i + 1}</td>
                          <td>Category</td>
                          <td>
                            <Button
                              color="danger"
                              size="sm"
                              className="btn-pill"
                            >
                              Delete
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Modal isOpen={this.state.modal} style={{marginTop:"20%"}} toggle={this.toggle} className="">
          <ModalHeader toggle={this.toggle}>Add Category</ModalHeader>
          <ModalBody>
            <div>
              <FormGroup>
                <Input
                  size="lg"
                  type="text"
                  id="name"
                  placeholder="add sub-category"
                  name ='name'
                  onChange={this.handleChange}
                  required
                />
                  <div className="text-danger">
                        {this.state.errors.category}
                      </div>
              </FormGroup>
              <Button color="info" size="sm" className="btn" onClick={(event)=>this.onAddCategory(event)}>
                Add Category
              </Button>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default SubCategory;
