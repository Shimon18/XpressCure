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

class TheCureBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="page-wrapper">
        <div
          className="row "
          style={{ marginInlineStart: "7px", marginTop: "20px" }}
        >
          <div className="col-md-12 d-flex align-items-center justify-content-between ml-3">
              <div>
              <Link to={"/Marketing"}><i className="fa fa-arrow-left back_btn"></i></Link>

<h4 class="page-title">The Cure Blog</h4></div>
              <div className="d-flex">
            <FormGroup className="mb-0">
              <Input
                size="lg"
                type="text"
                id="name"
                placeholder="Search with Name, Phone And Email"
                required
                // style={{width:"30%", }}
              />
            </FormGroup>
            <Button
              color="primary"
              size="lg"
              className="custom_search_btn ml-3 px-4"
            >
              <i className="fa fa-search mr-2" />
              Search
            </Button>
            
            <Link to={"/AddTheCureBlog"}>
              <Button
                color="info"
                size="sm"
                className=" mr-2 ml-3 custom_search_btn px-4"
              >
                Add Blog
              </Button>
             
            </Link>
            </div>
            
          </div>
         
        </div>

        <div className="row mt-4">
          <div className="col-md-12">
            <Table responsive>
              <thead>
                <tr>
                  <th>Serial No.</th>
                  <th> Category</th>
                  <th>Child category</th>
                  <th>Blog Name</th>
                  <th>Blog Thumbnail</th>
                  <th>Blog Link</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>

                  <td>
                    <Row>
                      <div className="d-flex align-items-center ml-auto mr-auto">
                        <Link to={"./ViewTheCureBlog"}>
                          <Button
                            color="info"
                            size="sm"
                            className="btn-pill mr-2"
                          >
                           <i className="fa fa-edit" />
                          </Button>
                        </Link>
                        <Link to={""}>
                          <Button
                            color="info"
                            size="sm"
                            className="btn-pill mr-2 bg-danger"
                          >
                           <i className="fa fa-trash" />
                          </Button>
                        </Link>
                      </div>
                    </Row>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default TheCureBlog;
