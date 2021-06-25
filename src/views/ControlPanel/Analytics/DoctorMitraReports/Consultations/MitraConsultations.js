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

class MitraConsultations extends Component {
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
              <Link to={"/DoctorMitraReport"}><i className="fa fa-arrow-left back_btn"></i></Link>
              <h4 class="page-title">Doctor Mitra Consultations</h4>
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
            
            
            </div>
            
          </div>
          
        </div>

        <div className="row mt-4">
          <div className="col-md-12">
            <Table>
              <thead>
                <tr>
                  <th className="onboard_width">Doctor Mitra Consultations</th>
                  <th>View Chart</th>
                </tr>
              </thead>
              <tbody>
              
                <tr>
                  <td>Total Number of consultations</td>
                  <td>
                  <Link to={"./MitraTotalConsultation"}>
                          <Button
                            color="info"
                            size="sm"
                            className="btn-pill mr-2"
                          >
                           <i className="fa fa-eye" />
                          </Button>
                        </Link>
                  </td>
                </tr>
                <tr>
                  <td>Total Number of consultations each day</td>
                  <td>
                  <Link to={"./MitraConsultationEachDay"}>
                          <Button
                            color="info"
                            size="sm"
                            className="btn-pill mr-2"
                          >
                           <i className="fa fa-eye" />
                          </Button>
                        </Link>
                  </td>
                </tr><tr>
                  <td>Month-wise consultation trend</td>
                  <td>
                  <Link to={"./MitraMonthwiseConsultation"}>
                          <Button
                            color="info"
                            size="sm"
                            className="btn-pill mr-2"
                          >
                           <i className="fa fa-eye" />
                          </Button>
                        </Link>
                  </td>
                </tr><tr>
                  <td>Total Number of Consultations across each speciality</td>
                  <td>
                  <Link to={"./ConsultationEachSpeciality"}>
                          <Button
                            color="info"
                            size="sm"
                            className="btn-pill mr-2"
                          >
                           <i className="fa fa-eye" />
                          </Button>
                        </Link>
                  </td>
                </tr><tr>
                  <td>Total Number of Consultations across each speciality each day</td>
                  <td>
                  <Link to={"./ConsultationEachSpecialityEachday"}>
                          <Button
                            color="info"
                            size="sm"
                            className="btn-pill mr-2"
                          >
                           <i className="fa fa-eye" />
                          </Button>
                        </Link>
                  </td>
                </tr><tr>
                  <td>Month-wise Consultation trend across each speciality</td>
                  <td>
                  <Link to={"./MonthWiseConsultationSpeciality"}>
                          <Button
                            color="info"
                            size="sm"
                            className="btn-pill mr-2"
                          >
                           <i className="fa fa-eye" />
                          </Button>
                        </Link>
                  </td>
                </tr><tr>
                  <td>Speciality with highest number of consultations</td>
                  <td>
                  <Link to={"./HighestSpecialityConsultation"}>
                          <Button
                            color="info"
                            size="sm"
                            className="btn-pill mr-2"
                          >
                           <i className="fa fa-eye" />
                          </Button>
                        </Link>
                  </td>
                </tr><tr>
                  <td>Speciality with highest number of consultations each day </td>
                  <td>
                  <Link to={"./HighestSpecialityConsultationEachday"}>
                          <Button
                            color="info"
                            size="sm"
                            className="btn-pill mr-2"
                          >
                           <i className="fa fa-eye" />
                          </Button>
                        </Link>
                  </td>
                </tr><tr>
                  <td>Speciality with lowest number of consultations</td>
                  <td>
                  <Link to={"./LowestSpecialityConsultation"}>
                          <Button
                            color="info"
                            size="sm"
                            className="btn-pill mr-2"
                          >
                           <i className="fa fa-eye" />
                          </Button>
                        </Link>
                  </td>
                </tr><tr>
                  <td>Speciality with lowest number of consultations each day</td>
                  <td>
                  <Link to={"./LowestSpecialityConsultationEachday"}>
                          <Button
                            color="info"
                            size="sm"
                            className="btn-pill mr-2"
                          >
                           <i className="fa fa-eye" />
                          </Button>
                        </Link>
                  </td>
                </tr><tr>
                  <td>DM with highest number of consultations in a month</td>
                  <td>
                  <Link to={"./DMHighestConsultationMonth"}>
                          <Button
                            color="info"
                            size="sm"
                            className="btn-pill mr-2"
                          >
                           <i className="fa fa-eye" />
                          </Button>
                        </Link>
                  </td>
                </tr>
                <tr>
                  <td>DM with highest number of consultations in a day</td>
                  <td>
                  <Link to={"./DMHighestConsultationDay"}>
                          <Button
                            color="info"
                            size="sm"
                            className="btn-pill mr-2"
                          >
                           <i className="fa fa-eye" />
                          </Button>
                        </Link>
                  </td>
                </tr><tr>
                  <td>DM with highest number of consultations across each speciality in a month</td>
                  <td>
                  <Link to={"./DMHighestConsultationSpecialityMonth"}>
                          <Button
                            color="info"
                            size="sm"
                            className="btn-pill mr-2"
                          >
                           <i className="fa fa-eye" />
                          </Button>
                        </Link>
                  </td>
                </tr><tr>
                  <td>DM with highest number of consultations across each speciality in a day</td>
                  <td>
                  <Link to={"./DMHighestConsultationSpecialityday"}>
                          <Button
                            color="info"
                            size="sm"
                            className="btn-pill mr-2"
                          >
                           <i className="fa fa-eye" />
                          </Button>
                        </Link>
                  </td>
                </tr><tr>
                  <td>Total number of consultations which were not completed</td>
                  <td>
                  <Link to={"./TotalMitraConsultationNotCompleted"}>
                          <Button
                            color="info"
                            size="sm"
                            className="btn-pill mr-2"
                          >
                           <i className="fa fa-eye" />
                          </Button>
                        </Link>
                  </td>
                </tr><tr>
                  <td>Month-wise trend of number of consultations which were not completed</td>
                  <td>
                  <Link to={"./MonthWiseConsultationNotCompleted"}>
                          <Button
                            color="info"
                            size="sm"
                            className="btn-pill mr-2"
                          >
                           <i className="fa fa-eye" />
                          </Button>
                        </Link>
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

export default MitraConsultations;
