import React from 'react';
import Modal, { closeStyle } from 'simple-react-modal'
import 'bootstrap/dist/css/bootstrap.css';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
export default class Modex extends React.Component {

  constructor() {
    super()
    this.state = {}
  }

  show() {
    this.setState({ show: true })
  }

  close() {
    this.setState({ show: false })
  }


  render() {
    const bu = {
      width: '350px',
      height: '50px'

    }
    return (
      <div>
        <a onClick={this.show.bind(this)}>Open Modal</a>
        <Modal
          className="test-class" //this will completely overwrite the default css completely
          style={{ background: 'red' }} //overwrites the default background
          containerStyle={{ background: 'blue' }} //changes styling on the inner content area
          containerClassName="test"
          closeOnOuterClick={true}
          show={this.state.show}
          onClose={this.close.bind(this)}>

          <a style={closeStyle} onClick={this.close.bind(this)}>X</a>

          <FacebookLogin
            style={bu}
            appId="1088597931155576"
            autoLoad={true}
            fields="name,email,picture"
          />

          <p>
          </p>

          <GoogleLogin
            style={bu}
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
          <p>
          </p>
          <button style={bu} type="submit" id="search" className="btn btn-primary" >Log in</button>

        </Modal>
      </div>
    )
  }
}
