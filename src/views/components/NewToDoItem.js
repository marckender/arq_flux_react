import React, { Component } from 'react'

export default class NewToDoItem extends Component {

    static defaultProps = {
        onAdd: ()=> {}
    }

    constructor(props) {
        super(props);
        this.state = {
            description: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.add = this.add.bind(this);
    }

    add(event){
        event.preventDefault();
        const description = this.state.description;

        if(description) {
            this.setState({description: ''})
            this.props.onAdd(description)
        }

    }

    handleChange(event) {
        const {target} = event,
            {name, value} = target;
        this.setState({
            [name]: value
        })
    }

    render() {
        const { state } =this;


        return (
           <form onSubmit={this.add}>
               <input
                    className="tw-input"
                    type="text"
                    placeholder="novo item"
                    name="description"
                    value={state.description}
                    onChange={this.handleChange}

               />

               <button className="tw-button"> Adicionar</button>
           </form>
        )
    }
}
