import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '../../store/actions';

import NewTask from "../../components/NewTask";
import TaskItem from "../../components/TaskItem";

class ListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    showDetail = () => {
        this.props.history.push('/detail/1');
    }

    render() {
        return(
            <React.Fragment>
                <div className="row mt-4 mb-4">
                    <div className="col-12">
                        <h2> To do: </h2>
                    </div>
                </div>
                <div className="row">
                    {this.props.tasks.map((task, index) => (
                        <TaskItem key={index} task={task} />
                    ))}
                </div>
                <div className="row mt-5 text-center">
                    <div className="col-12">
                        <NewTask />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.taskReducer.tasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addTask: Actions.addTask,
        deleteTask: Actions.deleteTask
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(ListPage);