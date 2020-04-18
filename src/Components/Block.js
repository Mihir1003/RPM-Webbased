import React from 'react';
import "./Block.css"
import Todos from "./Todos";


class Block extends React.Component {

    constructor(props) {
        super(props);
        this.onDragOver=this.onDragOver.bind(this);


        this.state={
            todos:[],
        }
    }

    onDrop(e){
        let todoObject = {title:e.dataTransfer.getData("todoTitle"),
                            todoId:e.dataTransfer.getData("todoId")}
        console.log(todoObject);
        this.setState({
            todos: [...this.state.todos,todoObject]
        } )

        this.props.listen({title:todoObject.title,todoId:todoObject.todoId,
        blockId:this.props.id});


    }


    onDragOver(e){
        e.preventDefault()


    }
    render() {

        return (
            <div className={"Block"} onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => {
                this.onDrop(e, "category")
            }}>


                <div className="parent">
                    <div className="div1"><input className={"BlockText"} placeholder={"Enter Category Name"}></input></div>
                    <div className="div2">
                        <div className={"Priorities"}>
                            Priority
                            {this.props.filtered[0].filter(t=>(t.blockId ===this.props.id)).map(task => {

                                return <input placeholder={"?/5"}/>
                            })
                            }



                        </div>
                        <div className={"Tasks"}>
                            Tasks
                        <ul>

                        {this.props.filtered[0].filter(t=>(t.blockId ===this.props.id)).map(task => {

                            return <Todos id={task.todoId} title={task.title}/>
                        })
                        }
                    </ul>
                        </div>
                    </div>
                    <div className="div3"><textarea className={"BlockText"} placeholder={"Enter your expected outcomes"} style={{height:"35%",width:"90%"}}></textarea>
                        <textarea className={"BlockText"} placeholder={"Enter your purpose"} style={{height:"35%",width:"90%"}}></textarea>
                        <input className={"BlockText"} placeholder={"enter time (eg. 4h 30)"}></input></div>
                </div>



            </div>
            )
            }

            }

            export default Block;
