import React, { Component } from "react";
import { Link } from "react-router-dom";
import SunEditor,{buttonList} from "suneditor-react";
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
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

class EditXpressWorld extends Component {
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
              <Link to={"/XpressWorld"}><i className="fa fa-arrow-left back_btn"></i></Link>
                <h4 class="page-title">Edit Xpress World Blog </h4>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <form>
                  <div class="row mt-3">
                  <div class="col-md-4">
                      <div class="form-group">
                        <label> Blog Title</label>
                        <input
                          class="form-control"
                          type="text"
                          name="Speciality_name"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Subtitle</label>
                        <input
                          class="form-control"
                          type="text"
                          name="Speciality_name"
                        />
                      </div>
                    </div>
                    

                    
                    <div class="col-md-12">
                    <SunEditor setOptions={{
				    height: 500,
				   	buttonList:  [['font','fontColor', 'fontSize','align', 'bold','underline','italic','blockquote','strike','outdent','indent'],
            ['align', 'horizontalRule', 'list', 'lineHeight','table'],
            ['image'],
            ['video' ,'link','codeView'],
          ]
			}} />
                      
                    </div>

                  
                    
                    
                  </div>
                </form>
                <div class="m-t-20 text-center">
                  <button class="btn btn-danger submit-btn mr-3">Cancel</button>
                  <button class="btn btn-primary submit-btn">Save & Update</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditXpressWorld;
