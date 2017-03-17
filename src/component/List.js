import React, { Component } from 'react';

class List extends Component {
	constructor(props) {
        super(props);
    }
  render() {
    var {id, image, name, age, phone, phrase, display, editState = true} = this.props.item;
    var btnname = editState ? '修改' : '保存';
    return (
        <tr style={{ display }}>
            <td>{id > 0 ? id : ''}</td>
            <td>
                <img className="headeimg" src={image} alt=""/>
            </td>
            <td>
                <input type="text" disabled={editState} ref="name" defaultValue={name} />
            </td>
            <td><input type="number" disabled={editState} ref="age" defaultValue={age} /></td>
            <td><input type="tel" disabled={editState} ref="phone" defaultValue={phone} /></td>
            <td>
                <textarea disabled={editState} ref="phrase" defaultValue={phrase}></textarea>
            </td>
            <td>
                <button onClick={this.editItem}>{btnname}</button>
                <button onClick={() => this.props.delItem(this.props.item) }>删除</button>
            </td>
        </tr>
    )
  }
}

export default List;