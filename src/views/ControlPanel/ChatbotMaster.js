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

class ChatbotMaster extends Component {
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
                  <h4 class="page-title">ChatbotMaster Master</h4>
                </div>
                <div className="col-md-7 d-flex align-items-center justify-content-end">
                <Link to={"/AddQuestion"}>
                                  <Button
                                    color="info"
                                    size="sm"
                                    className=" mr-2 ml-3 custom_search_btn px-4"
                                    
                                  >
                                    Add New Question
                                  </Button>
                                </Link>
                                
                                  <Link to={"/ChatBoxAssistant"}>
                                  <Button
                                    color="info"
                                    size="sm"
                                    className=" mr-2 ml-3 custom_search_btn px-4"
                                    
                                  >
                                    ChatBox Assistant
                                  </Button>
                                  </Link>
                </div>
            </div>

            <div className="row mt-4">
            <div class="select ml-3 mb-4">
  <select name="slct" id="slct">
    <option selected disabled>Select Speciality</option>
    <option value="1">Catagory</option>
    <option value="2">Sub Catagory</option>
  </select>
</div>
<div class="select ml-5 mb-4">
  <select name="slct" id="slct">
    <option selected disabled>Select Complaint</option>
    <option value="1">Catagory</option>
    <option value="2">Sub Catagory</option>
  </select>
</div>
                <div className="col-md-12">
                <Table>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th> Speciality</th>
                      <th>Complaint</th>
                      <th>Question</th>
                      <th>Options</th>
                      <th>Status</th>
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
                              Demo
                          </td>
                          <td>
                              Demo
                          </td>
                          <td>
                            <Badge color="success">Active</Badge>
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

export default ChatbotMaster;