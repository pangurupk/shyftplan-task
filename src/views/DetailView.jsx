import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import EmployeeItem from '../components/EmployeeItem'

import ApiServices from '../apis'

const useStyles = makeStyles({
   
    root: {
        paddingTop: '30px',
        paddingBottom: '30px'
    }
})

function DetailView(props) {

    const { id } = useParams()

    const [ detail, setDetail ] = useState()
    const [ error, setError ] = useState(false)
    const [ errorMessage, setErrorMessage ] = useState('')

    useEffect(async () => {
        
        const res = await ApiServices.getEventDetail(id)
        
        if (res.status !== 200) {
            setError(true)
            setErrorMessage(res.message)
        } else {
            setDetail(res.data)
        }
    }, [])

    const classes = useStyles()

    if ((detail === undefined) && (error === false)) {
        return <></>
    }

    return (
        <div>
            {
                error ? 
                <Grid container spacing={ 2 } className={ classes.root }>
                    <Grid item xs={ 12 }>
                        { errorMessage }
                    </Grid>
                </Grid> 
                : 
                <>
                    <Grid container spacing={ 2 } className={ classes.root }>
                        <Grid item xs={ 12 } md={ 4 }>
                            <Typography gutterBottom variant="h5" component="h2">
                                { `Position name: ${ detail.position.name }` }
                            </Typography>
                        </Grid>
                        <Grid item xs={ 12 } md={ 4 }>
                            <Typography gutterBottom variant="h5" component="h2">
                                Start Time: { detail.startsAt }
                            </Typography>
                        </Grid>
                        <Grid item xs={ 12 } md={ 4 }>
                            <Typography gutterBottom variant="h5" component="h2">
                            End Time: { detail.endsAt }
                            </Typography>
                        </Grid>
                    </Grid>
                    
                    <Grid container spacing={ 2 }>
                        {
                            detail.employees.map((item, index) => (
                                <EmployeeItem key={ index } employee={ item } />
                            ))
                        }
                    </Grid>
                </>
            }
            
        </div>
    )
}

export default DetailView
