import React, { Component } from 'react';
import axios from 'axios';
import { request } from 'https';

export default class EditTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onChangeTodoCompleted = this.onChangeTodoCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }

    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        });
    }

    onChangeTodoResponsible(e) {
        this.setState({
            todo_responsible: e.target.value
        });
    }

    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }

    onChangeTodoCompleted(e){
        this.setState({
            todo_completed: !this.state.todo_completed
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log("Form Submitted");
        console.log(`Todo Description: ${this.state.todo_description}`);
        console.log(`Todo Responsible: ${this.state.todo_responsible}`);
        console.log(`Todo Priority: ${this.state.todo_priority}`);
        console.log(`Todo Completed: ${this.state.todo_completed}`);

         const obj = {
             todo_description: this.state.todo_description,
             todo_responsible: this.state.todo_responsible,
             todo_priority: this.state.todo_priority,
             todo_completed: this.state.todo_completed
         };

         axios.post('http://localhost:4000/todos/update/'+this.props.match.params.id , obj)
              .then(res => console.log(res.data));
              
        this.props.history.push('/');
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    todo_responsible: res.data.todo_responsible,
                    todo_description: res.data.todo_description,
                    todo_priority: res.data.todo_priority,
                    todo_completed: res.data.todo_completed
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
                        <div className="form-check">
                            <input  type="checkbox" 
                                    className="form-check-input"
                                    name="completedCheckbox"
                                    id="completedCheckbox"
                                    onChange={this.onChangeTodoCompleted}
                                    checked={this.state.todo_completed}
                                    value={this.state.todo_completed}/>
                            <label htmlFor="completedCheckbox" className="form-check-label">Completed</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input  type="submit" 
                                value="Update Todo" 
                                className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        );
    }
}