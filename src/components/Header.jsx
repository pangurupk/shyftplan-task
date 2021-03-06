import React from 'react';

import { withRouter } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

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

function Header(props) {
    
    const classes = useStyles();

    const backLiseView = (e) => {
        e.preventDefault()
        props.history.push('/')
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit" onClick={ (e) => backLiseView(e) }>
                        FrontEnd
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withRouter(Header)
