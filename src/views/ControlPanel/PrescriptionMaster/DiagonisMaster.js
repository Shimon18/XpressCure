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

class DiagonisMaster extends Component {
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
                  <h4 class="page-title">Diagnosis Master</h4>
                </div>
                <div className="col-md-7 d-flex align-items-center justify-content-end">
                <Link to={"/AddDiagonisMaster"}>
                                  <Button
                                    color="info"
                                    size="sm"
                                    className=" mr-2 ml-3 custom_search_btn px-4"
                                    
                                  >
                                    Add New Diagnosis
                                  </Button>
                                </Link>
                                <Button
                                    color="info"
                                    size="sm"
                                    className=" mr-2 ml-3 custom_search_btn px-4"
                                    
                                  >
                                    Upload Diagnosis
                                  </Button>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-12">
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Serial Number</th>
                      <th>ICD-10 Code</th>
                      <th>Disease Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                   
                        <tr>
                          <td>1</td>
                          <td>
                            Demo
                          </td>
                          
                          <td>
                          Demo
                          </td>
                          <td>
                            <Row>
                              <div className="d-flex align-items-center ml-auto mr-auto">
                              <Link to={""}>
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

export default DiagonisMaster;