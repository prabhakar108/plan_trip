import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

export default class Planbox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            startDate: moment(),
            states:[]
        }
        this.handleChange = this.handleChange.bind(this);
        this.renderStateOptions = this.renderStateOptions.bind(this);
    }
    componentDidMount(){
      let state= "20";
      let stateName= "Delhi";
      let url= "http://localhost:9080/TripPlanner/cities?state="+ state +"&origin="+stateName;
      let that =this;
      debugger;
      axios.get(url)
        .then(function (response) {
          debugger;
          console.log(response);
          that.setState({states:response.data});
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    renderStateOptions(){
    return  this.state.states.map(function(item){
        return <option value={item}>{item}</option>
      })
    }

    handleChange(date) {
        this.setState({
        startDate: date
       });
   }

    firstMethod(e) {
        const re = /[a-zA-Z:]+/g;
        if (!re.test(e.key)) {
        e.preventDefault();
     }
   }

   secondMethod(e) {
        const re = /[0-9:]+/g;
        if (!re.test(e.key)) {
        e.preventDefault();
    }
  }


    setAge(event){
        this.setState({lastName : event.target.value});
    }
    displayUser(event){
        let data = this.state.firstName + this.state.lastName;
        document.getElementById("display").innerHTML=data;
    }
    render(){
        const ser={
        width: '28em',
        height: '3em',
        textAlign: 'center',
        padding : '0px',
        marginTop : '10px',
        marginBottom: '10px'
      }

   return <div id="total1" className="container-fluid">
   <h4 id="cen">PLAN</h4>
   <div className="row">
   <div className="col col-lg-6">
   <div className="input-group">
   <div className="input-group-addon">
   <span className="glyphicon glyphicon-map-marker" id="basic-addon1"></span>
   </div>
     <select>
          <option value="">Select City</option>
          {this.renderStateOptions()}
     </select>
 </div>
   <p>
   </p>

   <div className="input-group">
   <div className="input-group-addon">
   <span className="glyphicon glyphicon-map-marker" id="basic-addon1"></span>
   </div>
   <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        placeholderText="Start Date"
    />
  </div>
  <p>
  </p>

  <div className="input-group">
  <div className="input-group-addon">
  <span className="glyphicon glyphicon-map-marker" id="basic-addon1"></span>
  </div>
  <input type="text"  placeholder="No of Days"   onKeyPress={(e) => this.secondMethod(e)} aria-describedby="basic-addon1"/>
  </div>
  <p>
  </p>

  <div className="input-group">
  <div className="input-group-addon">
  <span className="glyphicon glyphicon-map-marker" id="basic-addon1"></span>
  </div>
  <input type="text"  placeholder="Number of Members" class="form-control" onKeyPress={(e) => this.firstMethod(e)}  id="pwd"/>
  </div>
  <p>
  </p>

  <div className="input-group">
  <div className="input-group-addon">
  <span className="glyphicon glyphicon-map-marker" id="basic-addon1"></span>
  </div>
    <select type="text"  placeholder="Males"  onKeyPress={(e) => this.secondMethod(e)}>
         <option value="" disabled selected>Select State</option>
         <option value="val1">0 city</option>
         <option value="val2">1 city</option>
         <option value="val3">2 city</option>
         <option value="val4">3 city</option>
    </select>
</div>

  <button type="Plan" style={ser} id="search" className="btn btn-primary" onClick={this.displayUser.bind(this)}>PLAN</button>
                </div>
               </div>
              </div>


    }
}
