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

class SpecialityMaster extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="page-wrapper">
                <div
                className="row "
                style={{ marginInlineStart: "7px", marginTop: "20px" }}
              >
                <div className="col-md-5 d-flex align-items-center">
                  <h4 class="page-title">Speciality Master</h4>
                </div>
                <div className="col-md-7 d-flex align-items-center justify-content-end">
                <Link to={"/AddSpeciality"}>
                                  <Button
                                    color="info"
                                    size="sm"
                                    className=" mr-2 ml-3 custom_search_btn px-4"
                                    
                                  >
                                    Add New Speciality
                                  </Button>
                                </Link>
                                <Button
                                    color="info"
                                    size="sm"
                                    className=" mr-2 ml-3 custom_search_btn px-4"
                                    
                                  >
                                    Upload Speciality
                                  </Button>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-12">
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Speciality Id</th>
                      <th> Speciality Name</th>
                      <th>Speciality Image</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                   
                        <tr>
                          <td>1</td>
                          <td>
                            Name
                          </td>
                          <td>
                            <div>
                              <img
                                className="profile-pic"
                                src=""
                              ></img>
                            </div>
                          </td>
                          <td>
                            <Badge color="success">Active</Badge>
                          </td>
                          <td>
                            <Row>
                              <div className="d-flex align-items-center ml-auto mr-auto">
                              <Link to={"/ViewSpeciality"}>
                                  <Button
                                    color="info"
                                    size="sm"
                                    className="btn-pill mr-2"
                                    
                                  >
                                    <i className="fa fa-edit" />
                                  </Button>
                                </Link>
                                <Button
                                    color="info"
                                    size="sm"
                                    className="btn-pill mr-2"
                                    
                                  >
                                    <i className="fa fa-trash" />
                                  </Button>

                              
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

export default SpecialityMaster;