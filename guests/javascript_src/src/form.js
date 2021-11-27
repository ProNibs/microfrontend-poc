import React from 'react';
import Thanks from './thanks';

class GuestForm extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
          fname: '',
          lname: '',
          extraguests: 0,
          isSubmit: false
      };
  
      this.handleFnameChange = this.handleFnameChange.bind(this);
      this.handleLnameChange = this.handleLnameChange.bind(this);
      this.handleAddtionalGuestsChange = this.handleAddtionalGuestsChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleFnameChange(event) {
      this.setState({fname: event.target.value});
    }

    handleLnameChange(event) {
      this.setState({lname: event.target.value});
    }

    handleAddtionalGuestsChange(event) {
      this.setState({extraguests: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      // Simple POST request with a JSON body using fetch
      const formData = {
        firstName: this.state.fname,
        lastName: this.state.lname,
        additionalGuests: this.state.extraguests
      };
      this.postFormData(this.props.url, formData);
      //alert(this.state.fname + ' ' + this.state.lname + ' has ' + this.state.extraguests + ' extra guests.');
    } 
  
    postFormData(url, data) {
      console.log(data);
      console.log(JSON.stringify(data));
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      };
      fetch(url, requestOptions)
          .then(response => {
            if(!response.ok) {
              throw new Error(response.status);
            }
            else {
              console.log("200 response given!");
              this.setState({isSubmit: true});
            }
          })
          .catch(error => console.log("Error posting " + data));
    }
    
    render() {
      if (this.state.isSubmit === false) {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              First Name:
              <input type="text" value={this.state.fname} onChange={this.handleFnameChange} />
            </label>
            <br />
            <label>
              Last Name:
              <input type="text" value={this.state.lname} onChange={this.handleLnameChange} />
            </label>
            <br />
            <label>
              How many additional guests are you bringing?
              <input type="number" value={this.state.extraguests} onChange={this.handleAddtionalGuestsChange} />
            </label>
            <br />
            <input type="submit" value="RSVP" />
          </form>
      )}
      else {
          return <Thanks history={history} />;
      };
    }
}

GuestForm.defaultProps = {
  // Set default URL for posting data
  url: "http://localhost:8000/guests/"
}

export default GuestForm;