import React, { Component } from "react";

import { Collapse, Button, CardBody, Card } from "reactstrap";

import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";
const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultAside extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
      isOpen: false,
    };
  }

  toggle(tab) {
    this.setState({
      isOpen: !this.state.isOpen,
    });
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
        isOpen: !this.state.isOpen,
      });
    }
  }
  onDoctor = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  onDoctorMitra = () => {
    this.setState({
      isOpenMitra: !this.state.isOpenMitra,
    });
  };
  onAccounts = () => {
    this.setState({
      isOpenAccounts: !this.state.isOpenAccounts,
    });
  };
  onMarketing = () => {
    this.setState({
      isOpenMarketing: !this.state.isOpenMarketing,
    });
  };
  onReview = () => {
    this.setState({
      isOpenReview: !this.state.isOpenReview,
    });
  };
  onHuman = () => {
    this.setState({
      isOpenHuman: !this.state.isOpenHuman,
    });
  };
  onAccount = () => {
    this.setState({
      isOpenAccount: !this.state.isOpenAccount,
    });
  };
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <div class="sidebar" id="sidebar">
          <div class="sidebar-inner slimscroll">
            <div id="sidebar-menu" class="sidebar-menu">
              <ul>
                <li class="menu-title"></li>
                <li class="active">
                  <a href="#">
                    <i class="fa fa-dashboard"></i> <span>Dashboard</span>
                  </a>
                </li>

                <li class="submenu">
                  <Link to={"doctor"} onClick={this.onDoctor}>
                    <i class="fa fa-user-md"></i> <span> Doctors </span>{" "}
                    <span class="menu-arrow"></span>
                  </Link>

                  <Collapse isOpen={this.state.isOpen}>
                  <Link
                      to={"/DashboardDoctor"}
                      className="sidebarLink sidebar_dropdown_link custom_sidelink mt-2"
                    >
                      Dashboard
                    </Link>
                    <Link
                      to={"/AllDoctors"}
                      className="sidebarLink sidebar_dropdown_link custom_sidelink"
                    >
                      All Doctors
                    </Link>
                    <Link
                      to={"/Verification"}
                      className="sidebarLink sidebar_dropdown_link custom_sidelink"
                    >
                      Verify Doctors
                    </Link>
                    <Link
                      to={"/OnlineDoctor"}
                      className="sidebarLink sidebar_dropdown_link custom_sidelink"
                    >
                      Chat with Doctors
                    </Link>
                  </Collapse>
                </li>
                <li class="submenu" onClick={this.onDoctorMitra}>
                 
                  <Link to={"/DashboardDoctorMitra"} onClick={this.onDoctorMitra}>
                    <i class="fa fa-user-md"></i> <span> Doctor Mitra </span>{" "}
                    <span class="menu-arrow"></span>
                  </Link>

                  <Collapse isOpen={this.state.isOpenMitra}>
                    <Link
                      to={"/AllMitradoctor"}
                      className="sidebarLink sidebar_dropdown_link"
                    >
                      All Doctors Mitra
                    </Link>
                    <Link
                      to={"/MitraVerification"}
                      className="sidebarLink sidebar_dropdown_link"
                    >
                      Verify Doctors Mitra
                    </Link>
                    <Link
                      to={"/MitraOnlineDoctor"}
                      className="sidebarLink sidebar_dropdown_link"
                    >
                      Chat with Doctors Mitra
                    </Link>
                  </Collapse>
                </li>

                <li>
                  <Link to={"/Patient"}>
                    <i class="fa fa-wheelchair"></i> <span>Patients</span>
                  </Link>
                </li>
                <li class="submenu">
                  <Link to={"doctor"} onClick={this.onHuman}>
                    <i class="fa fa-calendar"></i>{" "}
                    <span> Human Resources </span>{" "}
                    <span class="menu-arrow"></span>
                  </Link>

                  <Collapse isOpen={this.state.isOpenHuman}>
                    <Link
                      to={"/Employee"}
                      className="sidebarLink sidebar_dropdown_link custom_sidelink mt-2"
                    >
                      Employee
                    </Link>
                    <Link
                      to={"/Appraisal"}
                      className="sidebarLink sidebar_dropdown_link custom_sidelink"
                    >
                      Appraisal
                    </Link>
                    <Link
                      to={"/EmployeeFeedback"}
                      className="sidebarLink sidebar_dropdown_link custom_sidelink"
                    >
                      Employee feedback
                    </Link>
                  </Collapse>
                </li>

                
                <li>
                  <Link to={"/Marketing"}>
                    <i class="fa fa-calendar-check-o"></i> <span>Marketing</span>
                  </Link>
                </li>


                <li class="submenu">
                  <Link to={"/Accounts"} onClick={this.onAccount}>
                    <i class="fa fa-hospital-o"></i>
                    <span> Accounts </span>
                    <span class="menu-arrow"></span>
                  </Link>

                  <Collapse isOpen={this.state.isOpenAccount}>
                    <Link
                      to={"/DashboardAccounts"}
                      className="sidebarLink sidebar_dropdown_link custom_sidelink" >
                      Dashboard
                    </Link>
                  </Collapse>
                </li>
                {/* <li>
                  <Link to={"/Accounts"}>
                    <i class="fa fa-hospital-o"></i> <span>Accounts</span>
                  </Link>
                </li> */}
               

                <li>
                  <Link to={"/Pharmecy"}>
                    <i class="fa fa-user"></i> <span>Pharmecy</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/InvestigationLab"}>
                    <i class="fa fa-money"></i> <span>Investigation Lab</span>
                  </Link>
                </li>

                <li class="submenu" onClick={this.onReview}>
                  <a>
                    <i class="fa fa-book"></i>{" "}
                    <span> Reviews and Ratings </span>{" "}
                    <span class="menu-arrow"></span>
                  </a>

                  <Collapse isOpen={this.state.isOpenReview}>
                    <Link
                      to={"/DoctorReview"}
                      className="sidebarLink sidebar_dropdown_link"
                    >
                      Doctor
                    </Link>
                    <Link
                      to={"/DoctorMitraReview"}
                      className="sidebarLink sidebar_dropdown_link"
                    >
                      Doctor Mitra
                    </Link>
                    <Link
                      to={"/DoctorAppReview"}
                      className="sidebarLink sidebar_dropdown_link"
                    >
                      Doctor App
                    </Link>
                    <Link
                      to={"/DoctorMitraAppReview"}
                      className="sidebarLink sidebar_dropdown_link"
                    >
                      Doctor Mitra App
                    </Link>
                    <Link
                      to={"/PatientAppReview"}
                      className="sidebarLink sidebar_dropdown_link"
                    >
                       Patient App
                    </Link>
                  </Collapse>
                </li>
                <li class="submenu">
                  <Link to={"/Analytics"}>
                    <i class="fa fa-gear"></i> <span> Analytics </span>{" "}
                    <span class="menu-arrow"></span>
                  </Link>
                </li>
                <li class="submenu">
                  <Link to={"/ControlDashboard"}>
                    <i class="fa fa-gear"></i> <span> Control Panel </span>{" "}
                    <span class="menu-arrow"></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

DefaultAside.propTypes = propTypes;
DefaultAside.defaultProps = defaultProps;

export default DefaultAside;
