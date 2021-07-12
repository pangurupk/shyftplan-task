import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
    root: {
    //   maxWidth: 345,
    },
    media: {
      height: 250,
    },
});

function EmployeeItem(props) {
    
    const { employee } = props

    const classes = useStyles();
    
    return (
        <Grid item xs={ 12 } sm={ 6 } sm={ 4 }>
            <Card className={ classes.root }>
                <CardActionArea>
                    <CardMedia
                        className={ classes.media }
                        image={ employee.image }
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            { `${ employee.firstName } ${ employee.lastName }` } 
                        </Typography>
                    </CardContent>
                </CardActionArea>
                
            </Card>
        </Grid>
        
    );
}

export default EmployeeItem
