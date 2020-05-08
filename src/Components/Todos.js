import React from 'react';
import "./Todos.css";



class Todos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            c:0
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }


    onDragStart(e, title) {

        e.dataTransfer.setData("TodoId", this.props.id);
        e.dataTransfer.setData("TodoTitle", this.state.title);

    }

    handleChange(event) {
        this.setState({title: event.target.value});
        if (this.state.title==""){
            this.handleDelete()
        }

    }

    handleDelete(){

            this.props.onDelete({id: this.props.id});
        }

    render() {

        return (


            <div><input className="Todo" draggable onDragStart={(e) => this.onDragStart(e, this.props.title)}
                        onChange={this.handleChange} value={this.state.title}></input>
                {//<button onClick={this.handleDelete}></button>
                }
                 </div>
        )


    }
}

export default Todos;