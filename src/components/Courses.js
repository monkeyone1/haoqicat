import React, { Component } from 'react';
import Radium from 'radium';  
import courses from '../data/courses';
import Course from './Course';
class Courses extends Component {
  
  render() {
    let styles = {
      root: {
        maxWidth: '1200px',
        margin: '0 auto',
        paddingTop: '6rem',
        paddingBottom: '6rem',
        display: 'flex',
        flexWrap: 'wrap'
      }
    };
    return (
      <div>
           <div style={styles.root}>
        { courses.map((course, i) => <Course key={i} course={course} ></Course>)}
      </div>
      </div>
    );
  }
}

export default Radium(Courses) ;