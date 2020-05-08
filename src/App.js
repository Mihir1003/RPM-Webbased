import React from 'react';
import './App.css';
import './Components/Todos'
import Todos from "./Components/Todos";
import Input from "./Components/Input";
import BlockArea from "./Components/BlockArea";
import Capture from "./Components/Capture"



class App extends React.Component {
    constructor() {
        super();
        this.state={
            tasks:[],
            filtered:[]
        };
        this.receiveTasks=this.receiveTasks.bind(this);
        this.filt=this.filt.bind(this);
        this.listenToAdd=this.listenToAdd.bind(this);
        this.handleDelete=this.handleDelete.bind(this);

    }

    receiveTasks(task){
        this.setState({ tasks: [...this.state.tasks, task]});


    }
    filt(object){
        let flag=false;
        for (let i=0;i<this.state.filtered.length;i++){
            if (object.todoId == (this.state.filtered[i].todoId)) {
                this.state.filtered[i]=object;
                flag=true
            }


        }
        if (!flag) {
            this.setState({
                filtered:[...this.state.filtered,object]
            })
        }


        this.setState({
            // eslint-disable-next-line eqeqeq
            tasks:[...this.state.tasks.filter(task => {console.log(task.todoId,object.todoId,task.todoId != object.todoId);return task.todoId != object.todoId})],

        })
}
    listenToAdd(object){
        this.setState({
            tasks:[...this.state.tasks,object],
            filtered:[...this.state.filtered.filter(task => {console.log(task.todoId,object); return task.todoId!=object.todoId})]
        })}

        handleDelete(object){
        this.setState({
            tasks:this.state.tasks.filter(task => {console.log(task.todoId,object.id,task.id!=object);return task.todoId!=object.id}),
            filtered:this.state.filtered.filter(task => {return task.todoId!=object.id})
            })}




    render() {
        console.log(this.state.filtered);
    return (

    <div className="App container">
        <div className={"DummyCapture"}></div>
        <Capture className="Capture" listenSomething={this.listenToAdd}>
        <Input receiveTasks={this.receiveTasks} />
            <ul>
                {            this.state.tasks.map(task => {return (<li><Todos onDelete={this.handleDelete} key={task.todoId} title={task.title} id={task.todoId}/></li>)})
            }
                </ul>
        </Capture>
        <div className="Blocks"><BlockArea listen={this.filt} filtered={[this.state.filtered]}/></div>

        <div className="Schedule">Block your tasks!</div>

    </div>
  );
}
}

export default App;
