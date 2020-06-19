import React, { Component, Fragment } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

class Confirm extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = (e) => {
        this.props.previousStep();
    };

    render() { 
        const { values: { firstName, lastName, email, phone, occupation, city, bio } } = this.props;
        return ( 
            <MuiThemeProvider>
                <Fragment>
                    <AppBar 
                        title="Confirm Details"
                    />
                    <List>
                        <ListItem 
                            primaryText="First Name"
                            secondaryText={ firstName }
                        />
                        <ListItem 
                            primaryText="Last Name"
                            secondaryText={ lastName }
                        />
                        <ListItem 
                            primaryText="Email"
                            secondaryText={ email }
                        />
                        <ListItem 
                            primaryText="Phone"
                            secondaryText={ phone }
                        />
                        <ListItem 
                            primaryText="Occupation"
                            secondaryText={ occupation }
                        />
                        <ListItem 
                            primaryText="City"
                            secondaryText={ city }
                        />
                        <ListItem 
                            primaryText="Bio"
                            secondaryText={ bio }
                        />
                    </List>
                    <br />
                    <RaisedButton 
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                    <RaisedButton 
                        label="Confirm & Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                </Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}
 
export default Confirm;