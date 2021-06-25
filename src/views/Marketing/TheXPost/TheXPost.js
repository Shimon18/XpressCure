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

class TheXPost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="page-wrapper">
        <div
          className="row ml-3 "
          style={{ marginInlineStart: "7px", marginTop: "20px" }}
        >
                          

          <div className="col-md-12 d-flex align-items-center justify-content-between">
            
              <div>
              <Link to={"/Marketing"}><i className="fa fa-arrow-left back_btn"></i></Link>
              <h4 class="page-title">The XPost</h4>
              </div>
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
            
            <Link to={"/AddXPost"}>
              <Button
                color="info"
                size="sm"
                className=" mr-2 ml-3 custom_search_btn px-4"
              >
                Add Post
              </Button>
              <Button
                color="info"
                size="sm"
                className=" mr-2 ml-2 custom_search_btn px-4"
              >
                Download
              </Button>
            </Link>
            </div>
            
          </div>
          <div className="d-flex align-items-end justify-content-end w-100 mt-3 mr-3">
              <div className="d-flex align-items-center mr-3">
                  <p className="mb-0">FROM:</p>
              <input type="date" id="date" required/>
              </div>
              <div className="d-flex align-items-center">
                  <p className="mb-0">TO:</p>
              <input type="date" id="date" required/>
              </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-12">
            <Table responsive>
              <thead>
                <tr>
                 
                  <th>Doctor Name</th>
                  <th>Specialization</th>
                  <th>Subscription Type</th>
                  <th>Valid Upto</th>
                  <th>Next Xpost due on</th>
                  <th>Amount Paid</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>

                  <td>
                    <Row>
                      <div className="d-flex align-items-center ml-auto mr-auto">
                        <Link to={"./ViewXPost"}>
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

export default TheXPost;
