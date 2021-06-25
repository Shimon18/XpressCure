    
import React, { Component, lazy, Suspense } from "react";
import SlimSelect from 'slim-select'

class SelectCatagory extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        

        return ( 
            <div>
        <div class="page-wrapper">
          <div class="content">
            <div class="row">
              <div class="col-lg-12 mb-3">
                <h4 class="page-title">Select Category</h4>
              </div>
              
              <div class="select ">
  <select name="slct" id="slct">
    <option selected disabled>Select Category</option>
    <option value="1">Category</option>
    <option value="2">Sub Category</option>
  </select>
</div>
<div class="select ml-5">
  <select name="slct" id="slct">
    <option selected disabled>Select Sub Category</option>
    <option value="1">Category</option>
    <option value="2">Sub Category</option>
  </select>
</div>
<button className="btn btn-primary submit_custm_btn d-block ml-4">
    Submit
</button>
            </div>
            </div>
            </div>
            </div>
            
         );
    }
}
 
export default SelectCatagory;