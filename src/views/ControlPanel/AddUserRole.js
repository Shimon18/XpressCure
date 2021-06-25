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

class AddUserRole extends Component {
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
            <h4 class="page-title"> Add New User Role</h4>
          </div>
          
        </div>

        <div className="row mt-4">
        <div class="col-md-4">
                      <div class="form-group">
                        <label>User Role Name</label>
                        <input
                          class="form-control"
                          type="text"
                          name="Speciality_name"
                        />
                      </div>
                    </div>
          <div className="col-md-12">
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
            </div>
           
        </div>
        <div class="m-t-20 text-center">
                  <button class="btn btn-danger submit-btn mr-3">Cancel</button>
                  <button class="btn btn-primary submit-btn">Add</button>
                </div>
      </div>
    );
  }
}

export default AddUserRole;
