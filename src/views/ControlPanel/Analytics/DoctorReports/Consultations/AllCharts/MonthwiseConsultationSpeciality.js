import React, { Component } from "react";
import { Link } from "react-router-dom";
import Chart from 'react-apexcharts';


import {
  Table,
} from "reactstrap";

class MonthwiseConsultationSpeciality extends Component {
  constructor(props) {
    super(props);
    this.state = {
        series: [{
            name: 'Marine Sprite',
            data: [44, 55, 41, 37, 22, 43, 21]
          }, {
            name: 'Striking Calf',
            data: [53, 32, 33, 52, 13, 43, 32]
          }, {
            name: 'Tank Picture',
            data: [12, 17, 11, 9, 15, 11, 20]
          }, {
            name: 'Bucket Slope',
            data: [9, 7, 5, 8, 6, 9, 4]
          }, {
            name: 'Reborn Kid',
            data: [25, 12, 19, 32, 25, 24, 10]
          }],
          options: {
            chart: {
              type: 'bar',
              height: 350,
              stacked: true,
            },
            plotOptions: {
              bar: {
                horizontal: true,
              },
            },
            stroke: {
              width: 1,
              colors: ['#fff']
            },
            title: {
              text: 'Fiction Books Sales'
            },
            xaxis: {
              categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
              labels: {
                formatter: function (val) {
                  return val + "K"
                }
              }
            },
            yaxis: {
              title: {
                text: undefined
              },
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return val + "K"
                }
              }
            },
            fill: {
              opacity: 1
            },
            legend: {
              position: 'top',
              horizontalAlign: 'left',
              offsetX: 40
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
                <Link to={"/Consultations"}>
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

export default MonthwiseConsultationSpeciality;
