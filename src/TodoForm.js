import React from 'react'


export default class TodoForm extends React.Component{
    state={
        data:{title:'',
        desc:'',
    },
        todo:[]
    }
    handleChange=(event)=>{
        console.log('eeee',event)
        const { name, value } = event.target;
        console.log(name,value)
        const updatedTodo =  ({...this.state.data, [name]: value });
        console.log('data',updatedTodo)
        this.setState(updatedTodo)
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state.data)
        this.setState([...this.state.todo,this.state.data])
        console.log('array',this.state.todo)
    }


    render(){
        return(
            <>
            <form onSubmit={this.handleSubmit}>
            <input type="text" name="title"  onChange={this.handleChange} /><br/>
            <input type="text" name="desc"  onChange={this.handleChange} /><br/>
            <button type="submit" >submit</button>
            </form>
            </>
        )
        }

}