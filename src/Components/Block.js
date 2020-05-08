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

        return <div className={"Block"} onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => {
            this.onDrop(e, "category")
        }}>

                <div className={"head"} style={{display:"flex"}}>
                    <input placeholder={"Category name"}></input>

                </div>
                <div className={"head"} style={{display:"flex"}}>
                <ul style={{display:"flex",flexDirection:"column",padding:"0px",flex:"2"}}>

                    <li style={{flex:"1",display:"flex"}}><span style={{flex:"1",float:"left",height:"auto"}}>Pr</span><span style={{flex:"1",float:"left",height:"auto"}}>Du</span><span style={{float:"left",flex:"4"}}>Task</span></li>
                    {this.props.filtered[0].filter(t=>t.blockId ===this.props.id).map(task => {

                        return <li style={{flex:"1",display:"flex"}}><input style={{width:"10%",float:"left",height:"30px",flex:"1"}} /><input style={{width:"10%",float:"left",height:"30px",flex:"1"}} /><span style={{float:"left",width:"60%",height:"auto",background:"inherit",flex:"4"}}><Todos style={{height:"auto",width:"120px"}} id={task.todoId} title={task.title}/></span></li>
                                    })}

                </ul>
                    <span style={{flex:"1"}} >Outcome<textarea/></span>
                    <span  style={{flex:"1"}} >Purpose<textarea/></span>





                </div>
        </div>








        {/*        <div className="div1"><input className={"BlockText"} placeholder={"Enter Category Name"}></input></div>*/}
        {/*        <div className="div2">*/}
        {/*            <div className={"Priorities"}>*/}
        {/*                Priority*/}
        {/*                {this.props.filtered[0].filter(t=>t.blockId ===this.props.id).map(task => {*/}

        {/*                    return <input placeholder={"?/5"}/>*/}
        {/*                })*/}
        {/*                }*/}

        {/*            </div>*/}
        {/*            <div className={"Tasks"}>*/}
        {/*                Tasks*/}
        {/*            <ul>*/}

        {/*            {this.props.filtered[0].filter(t=>t.blockId ===this.props.id).map(task => {*/}

        {/*                return <Todos id={task.todoId} title={task.title}/>*/}
        {/*            })*/}
        {/*            }*/}
        {/*        </ul>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*        <div className="div3"><textarea className={"BlockText"} placeholder={"Enter your expected outcomes"} style={{height:"35%",width:"90%"}}></textarea>*/}
        {/*            <textarea className={"BlockText"} placeholder={"Enter your purpose"} style={{height:"35%",width:"90%"}}></textarea>*/}
        {/*            <input className={"BlockText"} placeholder={"enter time (eg. 4h 30)"}></input></div>*/}
        {/*    </div>*/}





            }

            }

            export default Block;
