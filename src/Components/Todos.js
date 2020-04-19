import React from 'react';
import "./Todos.css";



class Todos extends React.Component {
        constructor(props) {
            super(props);
            this.state={
                title:this.props.title
            }
            this.handleChange=this.handleChange.bind(this)
        }


        onDragStart(e,title){

            e.dataTransfer.setData("TodoId",this.props.id);
       e.dataTransfer.setData("TodoTitle",this.state.title);

        }

    handleChange(event) {
        this.setState({title: event.target.value});
    }

        render() {

            return (


                    <input className="Todo" draggable onDragStart={(e) => this.onDragStart(e, this.props.title)} onChange={this.handleChange} value={this.state.title}></input>
            )
        }

}


//

export default Todos;