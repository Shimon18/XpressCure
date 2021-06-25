import React, { Component } from "react";
import { Link } from "react-router-dom";
import Chart from 'react-apexcharts';


import {
  Table,
} from "reactstrap";

class ConsultationCategoryDoctor extends Component {
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
  
  render() {
    return (
      <div>
        <div class="page-wrapper">
          <div class="content">
            <div class="row">
              <div class="col-lg-12">
                <Link to={"/Consultations"}>
                  <i className="fa fa-arrow-left back_btn"></i>
                </Link>
                <h4 class="page-title">Total Number of Consultations across each category of doctors - A,B,C,D,E</h4>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-md-12">
              <Chart options={this.state.options} series={this.state.series} type="bar" width={"100%"} height={320} />
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

export default ConsultationCategoryDoctor;
