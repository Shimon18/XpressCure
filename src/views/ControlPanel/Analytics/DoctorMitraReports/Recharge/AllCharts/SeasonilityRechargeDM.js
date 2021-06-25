import React, { Component } from "react";
import { Link } from "react-router-dom";
import Chart from 'react-apexcharts';


import {
  Table,
} from "reactstrap";

class SeasonilityRechargeDM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [44, 55, 13, 43, 22],
      options: {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      }
        
  };
    
  }
  
  render() {
    return (
      <div>
        <div class="page-wrapper">
          <div class="content">
            <div class="row">
              <div class="col-lg-12">
                <Link to={"/Recharge"}>
                  <i className="fa fa-arrow-left back_btn"></i>
                </Link>
                <h4 class="page-title">Seasonality trend of recharge value per DM</h4>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-md-12">
              <Chart options={this.state.options} series={this.state.series} type="pie" width={"100%"} height={320} />
              </div>

              <div className="col-md-12 mt-5">
                <Table>
                  <thead>
                    <tr>
                      <th>Year</th>
                      <th>Month</th>
                      <th>Number Of Downloads</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Demo</td>
                      <td>Demo</td>
                      <td>Demo</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SeasonilityRechargeDM;
