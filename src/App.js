import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { toast } from 'react-toastify';
import Design from './Design'
import List from './List'
import Add from './Add'
import Edit from './Edit'
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

function App() {
  return (
    <>
      <Router>
				<Switch>
					<Route exact path="/" component={List}/>
					<Route exact path="/add" component={Add}/>
					<Route exact path="/edit/:id" component={Edit}/>
					<Route exact path="/design" component={Design}/>
				</Switch>
			</Router>
    </>
  );
}

export default App;
