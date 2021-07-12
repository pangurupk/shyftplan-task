/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import EventItem from '../components/EventItem'
import DateTimePicker from '../components/DateTimePicker'

import ApiServices from '../apis'

const useStyles = makeStyles((theme) => ({
    filterWrapper: {
        marginTop: '30px',
        marginBottom: '30px'
    }
  }));

function ListView(props) {

    const [ events, setEvents ] = useState([])
    const [ startAt, setStartAt ] = useState('')
    const [ endAt, setEndAt ] = useState('')
    const [ offset, setOffset ] = useState(0)
    const [ error, setError ] = useState(false)
    const [ errorMessage, setErrorMessage ] = useState('')
    useEffect(async () => {
        const res = await ApiServices.getAllEvents()
        // setEvents(res.data.items)
        if (newFunction(res)) {
            setError(true)
            setErrorMessage(res.message)
        } else {
            setEvents(res.data.items)
        }
        // console.log(res)
    }, [])

    const handleStartTime = (e) => {
        setStartAt(e.target.value)
    }
    const handleEndTime = (e) => {
        setEndAt(e.target.value)
    }

    const handleFilter = async () => {
        setOffset(0)
        const res = await ApiServices.getEventsWithParams(startAt, endAt, 0)        
        // setEvents(res.data.items)
        if (res.status !== 200) {
            setError(true)
            setErrorMessage(res.message)
        } else {
            setEvents(res.data.items)
        }
    }

    const handleLoadMore = async () => {
        setOffset(offset + 1)
        const res = await ApiServices.getEventsWithParams(startAt, endAt, offset + 1)        
        // setEvents(res.data.items)
        if (res.status !== 200) {
            setError(true)
            setErrorMessage(res.message)
        } else {
            setEvents(res.data.items)
        }
    }
    const classes = useStyles()

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
                    <Grid container className={ classes.filterWrapper }>
                        <Grid item xs={ 12 } sm={ 6 } md={ 4 } >
                            <DateTimePicker 
                                label='Start At'
                                handleChange={ handleStartTime }
                            />
                        </Grid>
                        <Grid item xs={ 12 } sm={ 6 } md={ 4 } >
                            <DateTimePicker 
                                label='End At'
                                handleChange={ handleEndTime }
                            />
                        </Grid>
                        <Grid item xs={ 12 } sm={ 6 } md={ 4 }>
                            <Button size="large" fullWidth variant="outlined" color="secondary" onClick={ handleFilter }>
                                Filter
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container spacing={ 2 }>
                        {
                            events.map((event, index) => (
                                <EventItem event={ event } key={ index } />
                            ))
                        }
                        <Grid item xs={ 12 }>
                            <Button size="large" fullWidth variant="contained" color="primary" onClick={ handleLoadMore }>
                                Load More
                            </Button>
                        </Grid>
                    </Grid>
                </>
        }
        </div>   
    )

    function newFunction(res) {
        return res.status !== 200
    }
}

export default ListView
