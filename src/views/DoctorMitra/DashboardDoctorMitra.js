import React, { Component, lazy, Suspense } from "react";
import Chart from "react-apexcharts";

class DashboardDoctorMitra extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [44, 55, 13, 43, 22],
      options: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  }

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">
        <div class="page-wrapper">
          <div class="content">
            <div class="row">
              <div class="col-md-4">
                <div class="dash-widget">
                  <span class="dash-widget-bg1">
                    <i class="fa fa-stethoscope" aria-hidden="true"></i>
                  </span>
                  <div class="dash-widget-info text-right">
                    <h3>98</h3>
                    <span class="widget-title1">
                      Total Registerd Doctor Mitra{" "}
                      <i class="fa fa-check" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="dash-widget">
                  <span class="dash-widget-bg3">
                    <i class="fa fa-user-md" aria-hidden="true"></i>
                  </span>
                  <div class="dash-widget-info text-right">
                    <h3>72</h3>
                    <span class="widget-title3">
                      Number of new applications{" "}
                      <i class="fa fa-check" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="dash-widget">
                  <span class="dash-widget-bg4">
                    <i class="fa fa-heartbeat" aria-hidden="true"></i>
                  </span>
                  <div class="dash-widget-info text-right">
                    <h3>618</h3>
                    <span class="widget-title4">
                      Average Recharge Value <i class="fa fa-check" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </div>
             
            </div>
            <div class="row">
              <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                <div class="card">
                  <div class="card-body">
                    <div class="chart-title">
                      <h4>Gender Diversity</h4>
                      {/* <span class="float-right"><i class="fa fa-caret-up" aria-hidden="true"></i> 15% Higher than Last Month</span> */}
                    </div>
                    <Chart
                      options={this.state.options}
                      series={this.state.series}
                      type="pie"
                      width={"100%"}
                      height={320}
                    />
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                <div class="card">
                  <div class="card-body">
                    <div class="chart-title">
                      <h4>Demographic Diversity</h4>
                    </div>
                    <Chart
                      options={this.state.options}
                      series={this.state.series}
                      type="pie"
                      width={"100%"}
                      height={320}
                    />
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                <div class="card">
                  <div class="card-body">
                    <div class="chart-title">
                      <h4>Daily Recharges</h4>
                    </div>
                    <Chart
                      options={this.state.options}
                      series={this.state.series}
                      type="bar"
                      width={"100%"}
                      height={320}
                    />
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                <div class="card">
                  <div class="card-body">
                    <div class="chart-title">
                      <h4>Number of consultations each day</h4>
                    </div>
                    <Chart
                      options={this.state.options}
                      series={this.state.series}
                      type="bar"
                      width={"100%"}
                      height={320}
                    />
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                <div class="card">
                  <div class="card-body">
                    <div class="chart-title">
                      <h4>Turn around time</h4>
                    </div>
                    <Chart
                      options={this.state.options}
                      series={this.state.series}
                      type="bar"
                      width={"100%"}
                      height={320}
                    />
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                <div class="card">
                  <div class="card-body">
                    <div class="chart-title">
                      <h4>Income Generated</h4>
                    </div>
                    <Chart
                      options={this.state.options}
                      series={this.state.series}
                      type="bar"
                      width={"100%"}
                      height={320}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* table */}
            <div class="row">
              <div class="col-12 col-md-6 col-lg-8 col-xl-8">
                <div class="card">
                  <div class="card-header">
                    <h4 class="card-title d-inline-block">
                      State Wise Doctor
                    </h4>
                  </div>
                  <div class="card-body p-0">
                    <div class="table-responsive update_table">
                      <table class="table mb-0">
                        <thead class="">
                          <tr>
                            <th>State</th>
                            <th>Number of Doctors Mitra</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Demo</td>
                            <td>Demo</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4 col-xl-4">
                <div class="card member-panel">
                  <div class="card-header bg-white">
                    <h4 class="card-title mb-0">Online Doctor Mitra</h4>
                  </div>
                  <div class="card-body">
                    <ul class="contact-list">
                      <li>
                        <div class="contact-cont">
                          <div class="float-left user-img m-r-10">
                            <a href="profile.html" title="John Doe">
                              <img
                                src="assets/img/user.jpg"
                                alt=""
                                class="w-40 rounded-circle"
                              />
                              <span class="status online"></span>
                            </a>
                          </div>
                          <div class="contact-info">
                            <span class="contact-name text-ellipsis">
                              John Doe <span class="contact-date">Degree</span>
                            </span>
                            <span class="contact-date">Specialization</span>
                          </div>
                          <button className="btn btn-primary dashBoard_chat_btn">
                            Chat
                          </button>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="card-footer text-center bg-white">
                    <a href="#" class="text-muted">
                      View all Doctors
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* table ends */}

           
            <div class="row">
              <div class="col-md-4">
                <div class="dash-widget">
                  <span class="dash-widget-bg1">
                    <i class="fa fa-stethoscope" aria-hidden="true"></i>
                  </span>
                  <div class="dash-widget-info text-right">
                    <h3>98</h3>
                    <span class="widget-title1">
                      Highest income of the day{" "}
                      <i class="fa fa-check" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-4 ">
                <div class="dash-widget">
                  <span class="dash-widget-bg3">
                    <i class="fa fa-user-md" aria-hidden="true"></i>
                  </span>
                  <div class="dash-widget-info text-right">
                    <h3>72</h3>
                    <span class="widget-title3">
                    Highest FollowUp in a month
                      <i class="fa fa-check" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="dash-widget">
                  <span class="dash-widget-bg1">
                    <i class="fa fa-stethoscope" aria-hidden="true"></i>
                  </span>
                  <div class="dash-widget-info text-right">
                    <h3>98</h3>
                    <span class="widget-title1">
                      Highest income previous month{" "}
                      <i class="fa fa-check" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardDoctorMitra;
