import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { NavLink } from "react-router-dom";
import "./index.css";
import { useHistory } from "react-router-dom";
import { auth } from "./firebase";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar(props) {
    const classes = useStyles();
    const history = useHistory();

    return (
        <>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}> </Typography>
                        {
                            props.user ?
                                <button type="button" className="btn btn-danger" onClick={() => {
                                    auth.signOut();
                                    history.push("/");
                                }}>Log Out</button>
                                :
                                <>
                                    <NavLink style={{ color: "white", padding: "10px" }} exact to="/signup">Sign Up</NavLink>
                                    <NavLink style={{ color: "white", padding: "10px" }} exact to="/"> Sign In</NavLink>
                                </>
                        }

                    </Toolbar>
                </AppBar>
            </div>
        </>
    );
}
