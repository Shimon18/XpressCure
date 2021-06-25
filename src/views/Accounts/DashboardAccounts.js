import React, { Component, lazy, Suspense } from "react";
import Chart from 'react-apexcharts';


class DashboardAccounts extends Component {
  constructor(props) {
    super(props);

    this.state = {
   
        options: {
            chart: {
              id: 'apexchart-example'
            },
            xaxis: {
              categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
          },
          series: [{
            name: 'series-1',
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
          }]

      
    };
  }

 

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">

     <div class="page-wrapper bg_lav">
            <div class="content">
                <div class="row">
                    <div class="col-md-4">
                        <div class="dash-widget">
							<span class="dash-widget-bg1"><i class="fa fa-stethoscope" aria-hidden="true"></i></span>
							<div class="dash-widget-info text-right">
								<h3>98</h3>
								<span class="widget-title1">Doctors Mitra Subscribers <i class="fa fa-check" aria-hidden="true"></i></span>
							</div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="dash-widget">
                            <span class="dash-widget-bg3"><i class="fa fa-user-md" aria-hidden="true"></i></span>
                            <div class="dash-widget-info text-right">
                                <h3>72</h3>
                                <span class="widget-title3">XPost Subscribers <i class="fa fa-check" aria-hidden="true"></i></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="dash-widget">
                            <span class="dash-widget-bg4"><i class="fa fa-heartbeat" aria-hidden="true"></i></span>
                            <div class="dash-widget-info text-right">
                                <h3>618</h3>
                                <span class="widget-title4">Net Profit <i class="fa fa-check" aria-hidden="true"></i></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="dash-widget">
                            <span class="dash-widget-bg4 bg-olive"><i class="fa fa-heartbeat" aria-hidden="true"></i></span>
                            <div class="dash-widget-info text-right">
                                <h3>618</h3>
                                <span class="widget-title4 bg-olive">Monthly turnover <i class="fa fa-check" aria-hidden="true"></i></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="dash-widget">
							<span class="dash-widget-bg1"><i class="fa fa-stethoscope" aria-hidden="true"></i></span>
							<div class="dash-widget-info text-right">
								<h3>98</h3>
								<span class="widget-title1">Dues to Doctor <i class="fa fa-check" aria-hidden="true"></i></span>
							</div>
                        </div>
                    </div>
                    <div class="col-md-4 ">
                        <div class="dash-widget">
                            <span class="dash-widget-bg3"><i class="fa fa-user-md" aria-hidden="true"></i></span>
                            <div class="dash-widget-info text-right">
                                <h3>72</h3>
                                <span class="widget-title3">Dues to Doctor Mitra<i class="fa fa-check" aria-hidden="true"></i></span>
                            </div>
                        </div>
                    </div>
               
               
                </div>
				<div class="row">
					<div class="col-12 col-md-6 col-lg-6 col-xl-6">
						<div class="card">
							<div class="card-body">
								<div class="chart-title">
									<h4>Month Wise Turnover</h4>
									{/* <span class="float-right"><i class="fa fa-caret-up" aria-hidden="true"></i> 15% Higher than Last Month</span> */}
								</div>
              <Chart options={this.state.options} series={this.state.series} type="bar" width={"100%"} height={320} />
              </div>
						</div>
					</div>
					<div class="col-12 col-md-6 col-lg-6 col-xl-6">
						<div class="card">
							<div class="card-body">
								<div class="chart-title">
									<h4>Profits</h4>
								</div>
                                <Chart options={this.state.options} series={this.state.series} type="line" width={"100%"} height={320} />
							</div>
						</div>
					</div>
                    <div class="col-12 col-md-6 col-lg-6 col-xl-6">
						<div class="card">
							<div class="card-body">
								<div class="chart-title">
									<h4>Total Expenses</h4>
								</div>
                                <Chart options={this.state.options} series={this.state.series} type="bar" width={"100%"} height={320} />
							</div>
						</div>
					</div>
                    <div class="col-12 col-md-6 col-lg-6 col-xl-6">
						<div class="card">
							<div class="card-body">
								<div class="chart-title">
									<h4>Recharges</h4>
								</div>
                                <Chart options={this.state.options} series={this.state.series} type="line" width={"100%"} height={320} />
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

export default DashboardAccounts;
