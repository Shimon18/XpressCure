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


class PatientDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="page-wrapper">
                <div
                className="row ml-3 mt-3"
               
              >
                <div className="col-md-12">
                <Link to={"/Patient"}><i className="fa fa-arrow-left back_btn"></i></Link>
                  <h4 class="page-title">Patient Details</h4>
                </div>
              
            </div>

<div className="row">
  <div className="col-md-2">
    <img src="" />
  </div>
  <div className="col-md-8">
    <div className="row">
      <div className="col-md-4">
        <p className="head_det">
          Name
        </p>
        <p className="cnt_det">
          Shimon chouhan
        </p>
      </div>
      <div className="col-md-4">
        <p className="head_det">
          Age
        </p>
        <p className="cnt_det">
          24
        </p>
      </div>
      <div className="col-md-4">
        <p className="head_det">
          Gender
        </p>
        <p className="cnt_det">
          Male
        </p>
      </div>
      <div className="col-md-4">
        <p className="head_det">
          Height
        </p>
        <p className="cnt_det">
          5'11
        </p>
      </div>
      <div className="col-md-4">
        <p className="head_det">
          Weight
        </p>
        <p className="cnt_det">
          65
        </p>
      </div>
      <div className="col-md-4">
        <p className="head_det">
          Blood Pressure
        </p>
        <p className="cnt_det">
          108
        </p>
      </div>
      <div className="col-md-4">
        <p className="head_det">
          Location
        </p>
        <p className="cnt_det">
          Indore
        </p>
      </div>
    </div>
  </div>
</div>
<div className="d-flex align-items-center">
<h4 class="page-title mt-4 ml-4">Consultation History</h4>
</div>
            <div className="row">
            
            <CardBody>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Consultation date</th>
                      <th>Doctor Name</th>
                      <th>Doctor Mitra Name</th>
                      <th>Specialisation</th>
                      <th>View Prescription</th>
                      <th>View Records</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                        <tr>
                          <td>01/01/2021</td>
                          
                          <td>
                            Shimon Chouhan
                          </td>
                          <td>Shimon Chouhan</td>
                          
                          <td>Specialization</td>
                          
                  
                         
                          <td>
                            <Row>
                              <div className="d-flex align-items-center ml-auto mr-auto">
                              <Link to={""}>
                                  <Button
                                    color="info"
                                    size="sm"
                                    className="btn-pill mr-2"
                                    // onClick={() => this.onEdit()}
                                  >
                                    <i className="fa fa-edit" />
                                  </Button>
                                </Link>

                                
                              </div>
                             
                            </Row>
                          </td>
                          <td>
                            <Row>
                              <div className="d-flex align-items-center ml-auto mr-auto">
                              <Link to={""}>
                                  <Button
                                    color="info"
                                    size="sm"
                                    className="btn-pill mr-2"
                                    // onClick={() => this.onEdit()}
                                  >
                                    <i className="fa fa-edit" />
                                  </Button>
                                </Link>

                                
                              </div>
                             
                            </Row>
                          </td>
                        </tr>
                     
                  </tbody>
                </Table>
                
              </CardBody>
            
            </div>

            </div>
                    
        );
    }
}
 
export default PatientDetail;