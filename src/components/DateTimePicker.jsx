import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%'
  },
}));

export default function DateTimePicker(props) {
    const classes = useStyles();

    const { label, handleChange } = props

    return (
        <form className={ classes.container } noValidate>
            <TextField
                id="datetime-local"
                label={ label }
                type="datetime-local"
                defaultValue=''
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={ (e) => handleChange(e) }
            />
        </form>
    );
}