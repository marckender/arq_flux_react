import React, { Component } from 'react'

export default class ToDoItem extends Component {
    static defaultProps = {
        item: {},

        onRemove: ()=> {},
        onUpdate: ()=> {}
    }

    constructor(props){
        super(props);
        this.remove = this.remove.bind(this)
        this.update = this.update.bind(this);
        this.check = this.check.bind(this);

        this.input= React.createRef()
    }

    check(){
        const {item} = this.props;
        item.isChecked = !item.isChecked
        this.props.onUpdate(item);

    }

    update(){
        const {item} = this.props;
        item.description = this.input.current.value;
        this.props.onUpdate(item);
    }

    remove() {
        this.props.onRemove(this.props.item.id)
    }

    render() {
        const {props} = this,
            item = props.item;
        return (
            <li className="toto-list-item">
                <input
                onChange={this.check}
                    checked={item.isChecked}
                    className="tw-check"
                    type="checkbox"
                />

                <input
                    className="tw-input"
                    type="text"
                    onBlur={this.update}
                    ref={this.input}
                    disabled={item.isChecked}
                    defaultValue={item.description}
                />

                <button 
                    className="tw-btn"
                    onClick={this.remove}
                >
                    X
                </button>
            </li>

        )
    }
}
