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

class SubscriptionManagement extends Component {
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
          <div className="col-md-12 d-flex align-items-center justify-content-between ml-4">
              <div>
              <Link to={"/DoctorMitraAccount"}><i className="fa fa-arrow-left back_btn"></i></Link>

                <h4 class="page-title">Subscription Management</h4></div>
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
            
            <Link to={"/AddNewSubscription"}>
              <Button
                color="info"
                size="sm"
                className=" mr-2 ml-3 custom_search_btn px-4"
              >
                Add New Subscription
              </Button>
              
            </Link>
            </div>
            
          </div>
         
        </div>

        <div className="row mt-4">
          <div className="col-md-12">
            <Table responsive>
              <thead>
                <tr>
                  <th>Serial No.</th>
                  <th>Doctor Mitra Name</th>
                  <th>Location</th>
                  <th>Subscribed On</th>
                  <th>Subscription Type</th>
                  <th>Subscription Amount Paid</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>

                 
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default SubscriptionManagement;
