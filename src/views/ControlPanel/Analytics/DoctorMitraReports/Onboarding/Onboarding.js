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

class MitraOnboarding extends Component {
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
              <h4 class="page-title">Doctor Mitra Onboarding</h4>
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
                  <th className="onboard_width">Doctor Mitra Onboarding</th>
                  <th>View Chart</th>
                </tr>
              </thead>
              <tbody>
              
                <tr>
                  <td>Total number of downloads</td>
                  <td>
                  <Link to={"./MitraTotalDownloads"}>
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
                  <td>Month-wise download trend</td>
                  <td>
                  <Link to={"./MitraMonthWiseDownload"}>
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
                  <td>Total number of applications</td>
                  <td>
                  <Link to={"./MitraTotalApplicants"}>
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
                  <td>Month-wise application trend</td>
                  <td>
                  <Link to={"./MitraMonthWiseApplication"}>
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
                  <td>Total Number of applications pending for approval</td>
                  <td>
                  <Link to={"./MitraTotalApplicationPending"}>
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
                  <td>Total number of registration</td>
                  <td>
                  <Link to={"./MitraTotalRegisteration"}>
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
                  <td>Month-wise registration trend</td>
                  <td>
                  <Link to={"./MitraMonthWiseRegistration"}>
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
                  <td>Average Age of DMs </td>
                  <td>
                  <Link to={"./AverageAgeDM"}>
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
                  <td>Gender-Diversity of DM</td>
                  <td>
                  <Link to={"./GenderDM"}>
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
                  <td>Duration Served by DM</td>
                  <td>
                  <Link to={"./DurationServedDM"}>
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
                  <td>Demographic Diversity of DMs</td>
                  <td>
                  <Link to={"./DemographicDiversityDM"}>
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

export default MitraOnboarding;
