import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Switch, Route } from 'react-router-dom'

import ListView from './views/ListView'
import DetailView from './views/DetailView'
import Header from './components/Header'

import styles from './assets/jss/appStyles'

const useStyles = makeStyles(styles)

function App() {

	const classes = useStyles()

	return (
		<>
			<Header />
			<div className={ classes.wrapper }>
				<Switch>
					<Route exact path="/" component={ ListView } />
					<Route path='/events/:id' component={ DetailView } />
				</Switch>
			</div>
		</>
	)
}

export default App
