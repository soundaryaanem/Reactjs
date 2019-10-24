import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '../store/actions';

class TaskItem extends React.Component {

    editTask = () => {
        this.props.history.push(`/detail/${this.props.task.id}`);
        console.log('edit task button click');
    }

    deleteTask = () => {
        this.props.deleteTask(this.props.task.id)
        console.log('delete task button click: ', this.props.task.id);
    }

    render() {
        const { task } = this.props;
        return (
            <React.Fragment>
                <div className="col-12 border p-2 ml-3 mr-3 mt-1 mb-1">
                    <span className="text-info pl-5">{ task.name }</span>
                    <button className="border-0 bg-white ml-1 mr-1 float-right" onClick={this.deleteTask}>
                        <DeleteIcon/>
                    </button>
                    <button className="border-0 bg-white mr-1 ml-1 float-right" onClick={this.editTask}>
                        <EditIcon/>
                    </button>
                </div>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        deleteTask: Actions.deleteTask
    }, dispatch);
}

export default withRouter(connect(null, mapDispatchToProps)(TaskItem));