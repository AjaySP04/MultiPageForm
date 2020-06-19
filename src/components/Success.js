import React, { Component, Fragment } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class Success extends Component {
    render() { 
        return ( 
            <MuiThemeProvider>
                <Fragment>
                    <AppBar 
                        title="Success"
                    />
                    <div>
                        <h1>Thank you for your submission</h1>
                        <p>You will get an email for further instructions.</p>
                    </div>
                </Fragment>
            </MuiThemeProvider>
         )
    }
}

export default Success;