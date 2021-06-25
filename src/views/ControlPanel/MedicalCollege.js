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

class MedicalCollege extends Component {
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
                  <h4 class="page-title">Medical College</h4>
                </div>
                <div className="col-md-7 d-flex align-items-center justify-content-end">
                <Link to={"/AddMedicalCollege"}>
                                  <Button
                                    color="info"
                                    size="sm"
                                    className=" mr-2 ml-3 custom_search_btn px-4"
                                    
                                  >
                                    Add New Medical College
                                  </Button>
                                </Link>
                                <Button
                                    color="info"
                                    size="sm"
                                    className=" mr-2 ml-3 custom_search_btn px-4"
                                    
                                  >
                                    Upload Medical College
                                  </Button>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-12">
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Medical College Id</th>
                      <th> Medical College Name</th>
                     
                    </tr>
                  </thead>
                  <tbody>
                   
                        <tr>
                          <td>1</td>
                          <td>
                            Name
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

export default MedicalCollege;