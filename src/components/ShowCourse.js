import React, { Component } from 'react';
import CommentBox from './CommentBox';



import Course from './Course';

class ShowCourse extends Component {
  getStyles() {
    return {
      top: {
        backgroundColor: '#00bcd4',
        paddingTop: '3rem',
        paddingBottom: '1rem'
      },
      container: {
        maxWidth: '900px',
        margin: '0 auto',
      }
    };
  }

  render() {
    const { courseId } = this.props.params;
    const comments = this.props.comments[courseId];
    const index = this.props.courses.findIndex((c) => c.id === courseId);
    const selectedCourse = this.props.courses[index];


    let styles = this.getStyles();
    return (
      <div>
        <div style={styles.top}>
          <div style={styles.container}>
            <Course course={selectedCourse} 
            increment={this.props.increment} 
            comments={comments} />
          </div>
        </div>
        <CommentBox courseComments={comments} {...this.props}  />
      </div>
    );
  }
}

export default ShowCourse;