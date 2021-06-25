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

class UserRole extends Component {
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
          <div className="col-md-5 d-flex align-items-center">
            <h4 class="page-title">User Role</h4>
          </div>
          
          <div className="col-md-7 d-flex align-items-center justify-content-end">
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
                  <Button color="primary" size="lg" className="custom_search_btn ml-3 px-4">
                    <i className="fa fa-search mr-2" />Search
                  </Button>
            <Link to={"/AddUserRole"}>
              <Button
                color="info"
                size="sm"
                className=" mr-2 ml-3 custom_search_btn px-4"
              >
                Add New UserRole
              </Button>
            </Link>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <Table>
              <thead>
                <tr>
                  <th className="big_tabhead">Doctors</th>
                  <th>Edit</th>
                  <th>View</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>All Doctors</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>Verified Doctors</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>Chat With Doctors</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
              </tbody>
            </Table>

            <Table>
              <thead>
                <tr>
                  <th className="big_tabhead">Doctor Mitra</th>
                  <th>Edit</th>
                  <th>View</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>All Doctors Mitra</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>Verified Doctors Mitra</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>Chat With Doctor Mitra</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
              </tbody>
            </Table>

            <Table>
              <thead>
                <tr>
                  <th className="big_tabhead">Patients</th>
                  <th>Edit</th>
                  <th>View</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Patient</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                
              </tbody>
            </Table>
            </div>
            <div className="col-md-6">
            <Table>
              <thead>
                <tr>
                  <th className="big_tabhead">Control Panel</th>
                  <th>Edit</th>
                  <th>View</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Speciality Master</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>Complaint Master</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>Medical College</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>Medical Degree Master</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>Health Worker</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>Doctor category</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>Doctor Subcategory</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>District Master</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>State Master</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>Chatbot Master</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>Fees Master</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>Doctor Mitra Service Charge Master</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>Doctor Fees Master</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>Prescription Master</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>FAQ</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>User Role</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>Document Master</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
              </tbody>
            </Table>
            
          </div>
        </div>
        <div class="m-t-20 text-center">
                  <button class="btn btn-danger submit-btn mr-3">Cancel</button>
                  <button class="btn btn-primary submit-btn">Save</button>
                </div>
      </div>
    );
  }
}

export default UserRole;
