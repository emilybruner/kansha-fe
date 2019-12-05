import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Landing } from './landing/Landing';
import { Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Onboarding from './Onboarding';
import { Profile } from './Components/Profile';
import { AuthLoader } from './Components/Auth'
import Workspace from './Workspace';
import FileUpload from './FileUpload';

const useStyles = makeStyles(theme => ({

    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#26242D',
        color: '#ffffff'
    },

    

}));

export const App = () => {
	const classes = useStyles();
	return (
		<div id="App" className={classes.root}>
			<Route exact path="/" component={Landing} />
			<Route exact path="/login" component={Login} />
			<Route path="/home" component={Home} />
			<Route path="/onboarding" component={Onboarding} />
			<Route path="/profile" component={Profile} />
			<Route path="/workspace" component={Workspace} />
			<Route path="/upload" component={FileUpload} />
			<Route path="/auth" component={AuthLoader} />
		</div>
	);
};
