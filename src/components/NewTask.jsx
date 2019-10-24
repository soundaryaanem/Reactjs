import React from "react";
import PropTypes from "prop-types";

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider, } from '@material-ui/pickers';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '../store/actions';

const NewTaskStyles = {
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

class NewTask extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            nickname: '',
            date: '2017-05-24',
            id: ''
        }
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

    addTask = () => {
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
        this.props.addTask(task);
    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <div className="row">
                            <div className="col-6 pl-5 pr-5">
                                <TextField
                                    id="name"
                                    label="Name"
                                    className={classes.textField}
                                    value={this.state.name}
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
                                        value={this.state.date}
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
                                    value={this.state.id}
                                    onChange={this.setId}
                                    margin="normal"
                                />
                                <TextField
                                    id="nickname"
                                    label="NicName"
                                    className={classes.textField}
                                    value={this.state.nickname}
                                    onChange={this.setNickname}
                                    margin="normal"
                                />
                            </div>                   
                        </div>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                        <Button color="primary" variant="contained" size="small" onClick={this.addTask}> ADD </Button>
                    </CardActions>
                </Card>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addTask: Actions.addTask
    }, dispatch);
}

export default withStyles(NewTaskStyles)(connect(null, mapDispatchToProps)(NewTask));