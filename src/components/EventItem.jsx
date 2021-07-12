import React from 'react'
import { withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
   
    media: {
      height: 140,
    },
    eventItem: {
        marginBottom: "20px"
    }
})

function EventItem (props) {

    const { event } = props

    const classes = useStyles()

    const handleClick = () => {
        props.history.push(`/events/${ event.id }`)
    }

    return (
        <Grid item xs={ 12 } sm={ 6 } md={ 4 } className={ classes.eventItem }>
            <Card>
                <CardActionArea onClick={ () => handleClick() }>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            { event.position.name }
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Start Time: { event.startsAt }
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            End Time: { event.endsAt }
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={ () => handleClick() }>
                        View
                    </Button>
                </CardActions>
            </Card>
        </Grid>
        
    )
}

export default withRouter(EventItem)
