import React from 'react';


class Capture extends React.Component {

    constructor(props) {
        super(props);

        this.onDrop=this.onDrop.bind(this);



    }

    onDrop(e){
        //let title = e.dataTransfer.getData("TodoTitle");


        //this.props.listenSomething(title)
        let todoObject = {title:e.dataTransfer.getData("todoTitle"),
            todoId:e.dataTransfer.getData("todoId")}
        console.log(todoObject);


        this.props.listenSomething({title:todoObject.title,todoId:todoObject.todoId,
            blockId:-1});

    }

    onDragOver(e){
        e.preventDefault()

    }


    render() {

        return (
            <div className={"Capture"} onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => {
                this.onDrop(e, "category")
            }}>

                {this.props.children}
            </div>

        )

    }
}

export default Capture;