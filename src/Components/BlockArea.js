import React from 'react';
import "./BlockArea.css";
import Block from "./Block.js";

class BlockArea extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            blocks:[]
        };
        this.addBlock=this.addBlock.bind(this);
        this.listen=this.listen.bind(this);
        this.LargestId=0;

    }
    addBlock(){

        this.setState({
            blocks:[...this.state.blocks,"block"]
        })
    this.LargestId+=1
    }




        listen(object){
            this.props.listen(object)
        }

    render() {
        this.id = 0
        return (
            <div className={"BlockArea"}>
                <button className={"AddButton"} onClick={this.addBlock} >+</button>

                <div className={"BlocksInside"}>
                {this.state.blocks.map((block) => {this.id+=1;return <Block listen={this.listen} key={this.id} id={this.id} filtered={this.props.filtered} block={block}/>})}
                </div>
            </div>

        )

    }
}

export default BlockArea;