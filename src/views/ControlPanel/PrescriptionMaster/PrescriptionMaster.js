
import React, { Component } from "react";
import { Link } from "react-router-dom";

class PresciptionMaster extends Component {
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
                  <h4 class="page-title">Presciption Master</h4>
                </div>
                <div className="col-md-7 d-flex"></div>
            </div>

            <div className="row">
                <div className="col-md-3">
                    <Link to={"./DiagonisMaster"} className="links">
                    <div className="control_menu_div">
                        <i className="fa fa-gear mr-3"></i>
                        Diagnosis Master
                    </div>
                    </Link>
                </div>
                <div className="col-md-3">
                    <Link to={"./DosageMaster"} className="links">
                    <div className="control_menu_div">
                        <i className="fa fa-gear mr-3"></i>
                        Dosage Master
                    </div>
                    </Link>
                </div>
                <div className="col-md-3">
                    <Link to={"./AllergiesMaster"} className="links">
                    <div className="control_menu_div">
                        <i className="fa fa-gear mr-3"></i>
                        Allergies Master
                    </div>
                    </Link>
                </div>
                <div className="col-md-3">
                    <Link to={"./DurationMaster"} className="links">
                    <div className="control_menu_div">
                        <i className="fa fa-gear mr-3"></i>
                        Duration Master
                    </div>
                    </Link>
                </div>


                











            </div>
            </div>
         );
    }
}
 
export default PresciptionMaster;