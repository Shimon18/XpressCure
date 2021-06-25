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

class AddQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="page-wrapper">
                <div
                className="row "
                style={{ marginInlineStart: "7px", marginTop: "20px" }}
              >
                <div className="col-md-5 d-flex align-items-center">
                  <h4 class="page-title">Add New Question</h4>
                </div>
               
            </div>

            <div className="row mt-4">
            <div class="select ml-3 mb-4">
  <select name="slct" id="slct">
    <option selected disabled>Select Speciality</option>
    <option value="1">Catagory</option>
    <option value="2">Sub Catagory</option>
  </select>
</div>
<div class="select ml-5 mb-4">
  <select name="slct" id="slct">
    <option selected disabled>Select Complaint</option>
    <option value="1">Catagory</option>
    <option value="2">Sub Catagory</option>
  </select>
</div>
                <div className="col-md-12">
                <form>
                  <div class="row mt-3">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Question</label>
                        <input
                          class="form-control"
                          type="text"
                          name="Speciality_name"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Option</label>
                        <input
                          class="form-control"
                          type="text"
                          name="Speciality_name"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                    <div class="form-group">
                        <label>Status</label>
                        <input
                          class="form-control"
                          type="text"
                          name="Speciality_name"
                        />
                      </div>
                    </div>
                  </div>
                </form>

                <div class="m-t-20 text-center">
                  <button class="btn btn-danger submit-btn mr-3">Cancel</button>
                  <button class="btn btn-primary submit-btn">Add</button>
                </div>


                </div>
            </div>
            </div>

);
}
}

export default AddQuestion;