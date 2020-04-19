import React from 'react';
import "./Input.css";

class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            title:""
        }
        this.handleChange=this.handleChange.bind(this);
        this.sendTask=this.sendTask.bind(this);
        this.enterPressed=this.enterPressed.bind(this);
        this.id=0;
    }
    sendTask(){

        this.props.receiveTasks({title:this.state.title,todoId:this.id})
        this.setState({
            title:""
        })
    this.id+=1
    }


    enterPressed(e){
        if (e.keyCode==13 && this.state.title){
            this.props.receiveTasks({title:this.state.title,todoId:this.id})
            this.setState({
                title:""
            })
        this.id+=1
        }
        }


    handleChange(e){
        this.setState({
            title:e.target.value
        })}

    render() {
        return(
            <div>
            <input onKeyUp={this.enterPressed} onChange={this.handleChange} value={this.state.title}/>{//<button onClick={this.sendTask}>Enter!</button>
            }
            </div>
            )}}

export default Input;