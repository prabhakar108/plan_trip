import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import DatePicker from 'react-datepicker';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: moment()
        }
        this.handleChange = this.handleChange.bind(this);
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


    setAge(event) {
        this.setState({ lastName: event.target.value });
    }
    displayUser(event) {
        let data = this.state.firstName + this.state.lastName;
        document.getElementById("display").innerHTML = data;
    }
    render() {
        const ser = {
            width: '28em',
            height: '3em',
            textAlign: 'center',
            padding: '0px',
            marginTop: '10px',
            marginBottom: '10px'
        }

        return <div id="total" className="container-fluid">
            <h4 id="cen">Login to TripPlanner</h4>
            <div className="row">
                <div className="col col-lg-6">

                    <FacebookLogin
                        appId="1088597931155576"
                        autoLoad={true}
                        fields="name,email,picture"
                    />

                    <p>
                    </p>

                    <GoogleLogin
                        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                        buttonText="LOGIN WITH GOOGLE"

                    />

                    <p>
                    </p>
                    <div className="input-group">
                        <input type="text" placeholder=" Email or Username" onKeyPress={(e) => this.firstMethod(e)} aria-describedby="basic-addon1" />
                    </div>
                    <p>
                    </p>

                    <div className="input-group">
                        <input type="text" placeholder=" Password" onKeyPress={(e) => this.firstMethod(e)} aria-describedby="basic-addon1" />
                    </div>
                    <p>
                    </p>



                    <a className="blue-link" ng-click="">Forgot Password?</a>
                    <button type="submit" style={ser} id="search" className="btn btn-primary" onClick={this.displayUser.bind(this)}>Log in</button>

                </div>
            </div>
        </div>


    }
}
