import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider, } from '@material-ui/pickers';


import * as Actions from '../../store/actions';

const DetailStyles = {
    card: {

    },

    cardContent: {

    },

    cardActions: {
        justifyContent: 'center'
    },

    textField: {
        width: '100%',
    }
}


class DetailPage extends React.Component {
    _isMount = false;
    constructor(props) {
        super(props);
        this.state = {
            taskId: '',
            name: '',
            date: '',
            id: '',
            nickname: ''
        }
    }

    componentDidMount() {
        this._isMount = true;
        if(this._isMount) {
            var { taskId } = this.props.match.params;
            var task = this.props.tasks.filter((item) => {
                return item.id == taskId
            }).map((item) => {
                this.setState({
                    taskId: taskId,
                    id: item['id'],
                    name: item['name'],
                    date: item['creationTime'],
                    nickname: item['nickname']['data']['name']
                });
            });
        }
    }

    componentWillUnmount() {
        this._isMount = false;
    }

    setName = ($event) => {
        this.setState({
            name: $event.target.value
        })
    }

    setNickname = ($event) => {
        this.setState({
            nickname: $event.target.value
        })
    }

    setId = ($event) => {
        this.setState({
            id: $event.target.value
        })
    }

    setDate = (date) => {
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        if(month < 10) {
            month = '0' + month;
        }
        var day = date.getDate();
        if(day < 10) {
            day = '0' + day;
        }
        var stateDate = year + '-' + month + '-' + day;
        this.setState({
            date: stateDate
        });
    }

    saveTask = () => {
        var task = { 
            id: this.state.id,
            name: this.state.name,
            creationTime: this.state.date,
            nickname: {
                data: {
                    name: this.state.nickname
                }
            }
        };
        this.props.saveTask(task);         
        this.props.history.push('/');
    }

    render() {
        const { classes } = this.props;
        return(
            <React.Fragment>
                <div className="rwo text-center mt-5">
                    <div className="col-12">
                        <h3>Edit Task</h3>
                    </div>
                </div>
                <div className="row text-center mt-4 mb-4">
                <div className="col-12">
                    <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <div className="row">
                            <div className="col-6 pl-5 pr-5">
                                <TextField
                                    id="name"
                                    label="Name"
                                    className={classes.textField}
                                    value={this.state.name || ''}
                                    onChange={this.setName}
                                    margin="normal"
                                />
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="Date picker inline"
                                        className={classes.textField}
                                        value={this.state.date  || '2017-05-24'}
                                        onChange={this.setDate}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>
                            </div>         
                            <div className="col-6 pl-5 pr-5">
                                <TextField
                                    id="id"
                                    label="ID"
                                    type="number"
                                    className={classes.textField}
                                    value={this.state.id || ''}
                                    onChange={this.setId}
                                    margin="normal"
                                />
                                <TextField
                                    id="nickname"
                                    label="NicName"
                                    className={classes.textField}
                                    value={this.state.nickname || ''}
                                    onChange={this.setNickname}
                                    margin="normal"
                                />
                            </div>                   
                        </div>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                        <Button color="primary" variant="contained" onClick={this.saveTask}> SAVE </Button>
                    </CardActions>
                </Card>
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
        saveTask: Actions.saveTask
    }, dispatch);
}

export default withStyles(DetailStyles)(connect(mapStateToProps, mapDispatchToProps)(DetailPage));