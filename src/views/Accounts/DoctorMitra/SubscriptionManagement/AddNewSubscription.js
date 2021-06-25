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

class AddNewSubscription extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div class="page-wrapper">
          <div class="content">
            <div class="row">
              <div class="col-lg-12">
                <h4 class="page-title">Add Subscription</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
              <div class="select mt-3 ml-3">
  <select name="slct" id="slct">
    <option selected disabled>Select Doctor Mitra name</option>
    <option value="1">Catagory</option>
    <option value="2">Sub Catagory</option>
  </select>
</div>
              </div>
              <div className="col-md-4">
              <div class="select mt-3 ml-3">
  <select name="slct" id="slct">
    <option selected disabled>Subscription Type</option>
    <option value="1">Catagory</option>
    <option value="2">Sub Catagory</option>
  </select>
</div>
              </div>
              <div class="col-md-3">
                      <div class="form-group">
                        <label>Subscription Amount</label>
                        <input
                          class="form-control"
                          type="text"
                          name="Speciality_name"
                        />
                      </div>
                    </div>
            </div>
            

            {/* <div className="row my-5"> */}
              
  
  {/* <div className="col-md-12">
  
    <div className="row">
      <div className="col-md-3">
        <p className="head_det">
          Location
        </p>
        <p className="cnt_det">
        Demo
                </p>
      </div>
      <div className="col-md-3">
        <p className="head_det">
          Subscribed On
        </p>
        <p className="cnt_det">
          demo
        </p>
      </div>
      <div className="col-md-3">
        <p className="head_det">
          Subscription Type
        </p>
        <p className="cnt_det">
          Demo
        </p>
      </div>
     
     
    </div> */}
  {/* </div>
</div> */}
         
                    {/* <div class="col-md-4">
                      <div class="form-group">
                        <label></label>
                        <button className="btn btn-primary d-block mt-2">Credit Amount</button>
                      </div>
                    </div> */}
                    
                  
                    
                
                
                <div class="m-t-20 text-center mt-5">
                  <button class="btn btn-danger submit-btn mr-3">Cancel</button>
                  <button class="btn btn-primary submit-btn">Add Subscription</button>
                </div>
              </div>
            </div>
          </div>
     
     
    );
  }
}

export default AddNewSubscription;
