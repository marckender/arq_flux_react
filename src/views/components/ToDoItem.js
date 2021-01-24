import React, { Component } from 'react'

export default class ToDoItem extends Component {
    static defaultProps = {
        item: {}
    }

    render() {
        const {props} = this,
            item = props.item;
        return (
            <li className="toto-list-item">
                <input
                    className="tw-check"
                    type="checkbox"
                    checked={item.isChecked}
                />

                <input
                    className="tw-input"
                    type="text"
                    disabled={item.isChecked}
                    defaultValue={item.description}
                />

                <button className="tw-btn">
                    X
                </button>
            </li>

        )
    }
}
