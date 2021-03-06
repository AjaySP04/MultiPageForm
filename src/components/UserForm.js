import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'
import Success from './Success'

class UserForm extends Component {
    state = { 
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        occupation: '',
        city: '',
        bio: ''
    }

    // proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    // back to previous step
    previousStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    // handle field change.
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    };

    render() { 
        const {step} = this.state;
        const { firstName, lastName, email, phone, occupation, city, bio } = this.state;
        const values = { firstName, lastName, email, phone, occupation, city, bio };
        switch ( step ) {
            case 1:
                return (
                    <FormUserDetails 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <FormPersonalDetails 
                        previousStep={this.previousStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <Confirm 
                        previousStep={this.previousStep}
                        nextStep={this.nextStep}
                        values={values}
                    />
                );
            case 4:
                return (
                    <Success />
                );
            default:
                return <h1> Default </h1>
        }
    }
}
 
export default UserForm;