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

class TransectionHistoryAccount extends Component {
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
          <div className="col-md-12 d-flex align-items-center justify-content-between">
              <div><h4 class="page-title">Transaction History</h4></div>
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
            
            <Link to={"/AddPayment"}>
              
              <Button
                color="info"
                size="sm"
                className=" mr-2 ml-2 custom_search_btn px-4"
              >
                Download
              </Button>
            </Link>
            </div>
            
          </div>
          <div className="d-flex align-items-end justify-content-end w-100 mt-3 mr-3">
              <div className="d-flex align-items-center mr-3">
                  <p className="mb-0">FROM:</p>
              <input type="date" id="date" required/>
              </div>
              <div className="d-flex align-items-center">
                  <p className="mb-0">TO:</p>
              <input type="date" id="date" required/>
              </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-12">
            <Table responsive>
              <thead>
                <tr>
                  <th>Serial No.</th>
                  <th>Date & Time</th>
                
                  <th>Category of payment</th>
                 
                  <th>Amount</th>
                 
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
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

export default TransectionHistoryAccount;
