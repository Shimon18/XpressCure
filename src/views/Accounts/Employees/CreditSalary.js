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


class CreditSalary extends Component {
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
                <Link to={"/SalaryMgmt"}><i className="fa fa-arrow-left back_btn"></i></Link>
                  <h4 class="page-title">Credit Salary</h4>
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
          Department
        </p>
        <p className="cnt_det">
          24
        </p>
      </div>
      <div className="col-md-4">
        <p className="head_det">
          Joined On
        </p>
        <p className="cnt_det">
          Male
        </p>
      </div>
      <div className="col-md-4">
        <p className="head_det">
          Last salary credited on
        </p>
        <p className="cnt_det">
          5'11
        </p>
      </div>
      <div className="col-md-4">
        <p className="head_det">
          Last salary amount
        </p>
        <p className="cnt_det">
          65
        </p>
      </div>
      
    </div>
  </div>
</div>

<div class="row">
              <div class="col-lg-12">
                <form>
                  <div class="row mt-3">
                  <div class="col-md-4">
                      <div class="form-group">
                        <label>Year</label>
                        <Input
                        type="select"
                        name="Blood_group"
                        
                      >
                            <option value="1">Please Select</option>
                      </Input>
                        
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Month</label>
                        <Input
                        type="select"
                        name="Blood_group"
                        
                      >
                            <option value="1">Please Select</option>
                      </Input>
                        
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Gross Salary Amount</label>
                        <input
                          class="form-control"
                          type="text"
                          name="Speciality_name"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Incentives</label>
                        <input
                          class="form-control"
                          type="text"
                          name="Speciality_name"
                        />
                      </div>
                    </div>
                    
                   
                  </div>
                </form>
                </div>
                <div class="m-t-20 text-center">
                  <button class="btn btn-danger submit-btn mr-3">Cancel</button>
                  <button class="btn btn-primary submit-btn">Credit salary</button>
                </div>
                </div>
           

            </div>
                    
        );
    }
}
 
export default CreditSalary;