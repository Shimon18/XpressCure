
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Marketing extends Component {
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
                  <h4 class="page-title">Marketing</h4>
                </div>
                <div className="col-md-7 d-flex"></div>
            </div>

            <div className="row mt-4">
                <div className="col-md-4">
                    <Link to={"./TheCureBlog"} className="links">
                    <div className="control_menu_div">
                        <i className="fa fa-address-card-o mr-3"></i>
                        The Cure Blog
                    </div>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to={"./TheXPost"} className="links">
                    <div className="control_menu_div">
                        <i className="fa fa-gear mr-3"></i>
                        The X post
                    </div>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to={"./XpressWorld"} className="links">
                    <div className="control_menu_div">
                        <i className="fa fa-hospital-o mr-3"></i>
                        Xpress World
                    </div>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to={"./MedicalDictionary"} className="links">
                    <div className="control_menu_div">
                        <i className="fa fa-hospital-o mr-3"></i>
                        Medical Dictionary
                    </div>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to={"./InspirationalStories"} className="links">
                    <div className="control_menu_div">
                        <i className="fa fa-hospital-o mr-3"></i>
                        Inspirational Stories
                    </div>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to={"./TheXChannel"} className="links">
                    <div className="control_menu_div">
                        <i className="fa fa-hospital-o mr-3"></i>
                        The X Channel
                    </div>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to={"./HealthInformatics"} className="links">
                    <div className="control_menu_div">
                        <i className="fa fa-hospital-o mr-3"></i>
                        Health Informatics
                    </div>
                    </Link>
                </div>
                

                











            </div>
            </div>
         );
    }
}
 
export default Marketing;