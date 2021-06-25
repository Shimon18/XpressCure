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

class FollowUps extends Component {
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
              <Link to={"/DoctorReport"}><i className="fa fa-arrow-left back_btn"></i></Link>
              <h4 class="page-title">Follow ups</h4>
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
                  <th className="onboard_width">Follow Ups</th>
                  <th>View Chart</th>
                </tr>
              </thead>
              <tbody>
              
                <tr>
                  <td>Total number of follow-ups in a month for each speciality  </td>
                  <td>
                  <Link to={"./TotalFollowSpeciality"}>
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
                  <td>Doctor with highest number of follow-ups in a month</td>
                  <td>
                  <Link to={"./DoctorHighestFollowMonth"}>
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
                  <td>Speciality wise follow-up trends - each speciality</td>
                  <td>
                  <Link to={"./SpecialityWiseFollowup"}>
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

export default FollowUps;
