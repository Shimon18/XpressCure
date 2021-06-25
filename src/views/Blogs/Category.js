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
import Swal from "sweetalert2/dist/sweetalert2.js";
import { HttpCallPost, HttpCallGet, handleError } from "../../apis/usehttps";
import { GET, POST, PUT } from "../../apis/constants";
import { addBlogCategory, getBlogCategory } from "../../apis/Network";
class Category extends Component {
  constructor() {
    super();
    this.state = {
      categoryList: [1],
      modal: false,
      errors: {},
      category: { name: "" },
    };
  }
  componentDidMount = () => {
    this.getCategory();
  };

  toggle = (id) => {
    this.setState({ modal: !this.state.modal, doctorId: id });
  };
  handleChange = (event) => {
    let category = this.state.category;
    category[event.target.name] = event.target.value;
    this.setState({ category }, () => {});
  };
  validate = () => {
    // let course = this.state.fullname;
    let errors = {};
    let isValid = true;

    if (!this.state.category.name) {
      isValid = false;
      errors["category"] = "Please enter Category.";
    }
    this.setState({
      errors: errors,
    });

    return isValid;
  };
  onAddCategory = (event) => {
    event.preventDefault();
    if (this.validate()) {
      let body = {
        blog_cat_name: this.state.category.name,
      };
      HttpCallPost(`${addBlogCategory}`, POST, body)
        .then((res) => {
          this.getCategory()
          console.log("categoryList", res);
          Swal.fire({
            position: "center",
            type: "success",
            title: "successfully added",
          });
        })
        .catch((err) => {
          handleError(err);
        });
    }
  };

  getCategory = () => {
    HttpCallGet(`${getBlogCategory}`, GET)
      .then((res) => {
        this.setState({ categoryList: res.data.msg });
        console.log("categoryList", res.data);
      })
      .catch((err) => {
        handleError(err);
      });
  };
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
                  Add Category
                </Button>
              </div>
              <CardBody>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th> Category Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.categoryList.map((item, i) => {
                      return (
                        <tr>
                          <td>{i + 1}</td>
                          <td>{item.blog_cat_name}</td>
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

        <Modal
          isOpen={this.state.modal}
          style={{ marginTop: "20%" }}
          toggle={this.toggle}
          className=""
        >
          <ModalHeader toggle={this.toggle}>Add Category</ModalHeader>
          <ModalBody>
            <div>
              <FormGroup>
                <Input
                  size="lg"
                  type="text"
                  id="name"
                  placeholder="add category"
                  name="name"
                  onChange={this.handleChange}
                  required
                />
                <div className="text-danger">{this.state.errors.category}</div>
              </FormGroup>
              <Button
                color="info"
                size="sm"
                className="btn"
                onClick={(event) => this.onAddCategory(event)}
              >
                Add Category
              </Button>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Category;
