import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Route,Router,IndexRoute} from 'react-router';
import Courses from './components/Courses';
import ShowCourse from './components/ShowCourse';

import { Provider } from 'react-redux';
import store,{ history } from './store';
import './style/style.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const router =(
  <Provider store={store}>
  <Router history={history}>
  <Route path='/' component={App}>
  <IndexRoute component={Courses}  />
  <Route path='/view/:courseId' component={ShowCourse}/>
  </Route>
  </Router>
  </Provider>
  
)
ReactDOM.render(
  router,
  document.getElementById('root')
  
)