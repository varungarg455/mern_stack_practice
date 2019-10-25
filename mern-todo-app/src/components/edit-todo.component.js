import React, { Component } from 'react';
import axios from 'axios';
import { request } from 'https';

export default class EditTodo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    todo_responsible: request.data.todo_responsible,
                    todo_description: request.data.todo_description,
                    todo_priority: request.data.todo_priority,
                    todo_completed: request.data.todo_completed
                })
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <h3>Update Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input  type="text" 
                                className="form-control"
                                value={this.state.todo_description} 
                                onChange={this.onChangeTodoDescription} />
                    </div>
                    <div className="form-group">
                        <label>Responsibe: </label>
                        <input  type="text" 
                                className="form-control"
                                value={this.state.todo_responsible} 
                                onChange={this.onChangeTodoResponsible} />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  type="radio" 
                                    className="form-check-input"
                                    name="priorityOptions"
                                    id="priorityLow"
                                    value="Low"
                                    checked={this.state.todo_priority==='Low'}
                                    onChange={this.onChangeTodoPriority}/>
                            <label htmlFor="priorityLow" className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  type="radio" 
                                    className="form-check-input"
                                    name="priorityOptions"
                                    id="priorityMedium"
                                    value="Medium"
                                    checked={this.state.todo_priority==='Medium'}
                                    onChange={this.onChangeTodoPriority}/>
                            <label htmlFor="priorityMedium" className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  type="radio" 
                                    className="form-check-input"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="High"
                                    checked={this.state.todo_priority==='High'}
                                    onChange={this.onChangeTodoPriority}/>
                            <label htmlFor="priorityHigh" className="form-check-label">High</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input  type="submit" 
                                value="Create Todo" 
                                className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        );
    }
}