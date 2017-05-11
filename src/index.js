import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import { Route,Router,IndexRoute,browserHistory} from 'react-router';
import Courses from './components/Courses';
import ShowCourse from './components/ShowCourse';

import './style/style.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const router =(
  <Router history={browserHistory}>
  <Route path='/' component={Main}>
  <IndexRoute component={Courses}  />
  <Route path='/view/:courseId' component={ShowCourse}/>
  </Route>
  </Router>
)
ReactDOM.render(
  router,
  document.getElementById('root')
  
)