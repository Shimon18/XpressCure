import React, { Component } from "react";
import { Link } from "react-router-dom";
import Chart from 'react-apexcharts';


import {
  Table,
} from "reactstrap";

class MonthWiseConsultationSpeciality extends Component {
  constructor(props) {
    super(props);
    this.state = {
        series: [{
            name: 'PRODUCT A',
            data: [44, 55, 41, 67, 22, 43]
          }, {
            name: 'PRODUCT B',
            data: [13, 23, 20, 8, 13, 27]
          }, {
            name: 'PRODUCT C',
            data: [11, 17, 15, 15, 21, 14]
          }, {
            name: 'PRODUCT D',
            data: [21, 7, 25, 13, 22, 8]
          }],
          options: {
            chart: {
              type: 'bar',
              height: 350,
              stacked: true,
              toolbar: {
                show: true
              },
              zoom: {
                enabled: true
              }
            },
            responsive: [{
              breakpoint: 480,
              options: {
                legend: {
                  position: 'bottom',
                  offsetX: -10,
                  offsetY: 0
                }
              }
            }],
            plotOptions: {
              bar: {
                horizontal: false,
                borderRadius: 10
              },
            },
            xaxis: {
              type: 'datetime',
              categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
                '01/05/2011 GMT', '01/06/2011 GMT'
              ],
            },
            legend: {
              position: 'right',
              offsetY: 40
            },
            fill: {
              opacity: 1
            }
          },
        
        
        };
    
  }
  
  render() {
    return (
      <div>
        <div class="page-wrapper">
          <div class="content">
            <div class="row">
              <div class="col-lg-12">
                <Link to={"/MitraConsultations"}>
                  <i className="fa fa-arrow-left back_btn"></i>
                </Link>
                <h4 class="page-title">Month-wise Consultation trend across each speciality</h4>
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

export default MonthWiseConsultationSpeciality;
