import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: { title: "" }
        };

        // Do binds in constructor rather than render for optimal function calling
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course });
    }

    onClickSave() {
        // this.props.dispatch(courseActions.createCourse(this.state.course));  //if no mapDispatchToProps is defined connect will inject a dispatch function to props
        this.props.actions.createCourse(this.state.course); 
        // alert(`Saving ${this.state.course.title}`);
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title} />

                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave} />
            </div>
        );
    }
}

// PropType validation
CoursesPage.propTypes = {
    // dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
    // courseActions: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses //[state.courses is determined by root reducer]
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // createCourse: (course) => dispatch(courseActions.createCourse(course))
        actions: bindActionCreators(courseActions, dispatch)
        // bindActionCreators goes through courseActions and find all actions in that file and wrap them in a call to dispatch
    };
}

// Connect returns a function which then is invoked with CoursesPage
// export default connect(mapStateToProps)(CoursesPage);

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
