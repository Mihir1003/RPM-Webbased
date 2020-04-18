import React from 'react';
import "./Todos.css";



class Todos extends React.Component {



        onDragStart(e,title){

            e.dataTransfer.setData("TodoId",this.props.id);
       e.dataTransfer.setData("TodoTitle",this.props.title);

        }

        render() {

            return (
                <li className="Todo" draggable onDragStart={(e) => this.onDragStart(e, this.props.title)}>

                    {this.props.title}</li>
            )
        }

}


//

export default Todos;