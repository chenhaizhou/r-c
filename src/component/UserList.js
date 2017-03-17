import React, { Component } from 'react';
import List from './List';

class UserList extends Component {
	constructor(props) {
        super(props);
        /**
         * 按年龄最大排序
         */
        this.sortMax = () => {
            var {list} = this.props;

            list.sort((o1, o2) => o1.age < o2.age ? 1 : -1);

            this.setState({ list });
        }

        /**
         * 按年龄最小排序
         */
        this.sortMin = () => {
            var {list} = this.props;

            list.sort((o1, o2) => o1.age > o2.age ? 1 : -1);

            this.setState({ list });
        }
    }

  render() {
    return (
      <div className="user-list">
        <table className="table">
            <thead>
                <tr>
                    <th>id</th>
                    <th>头像</th>
                    <th>名字</th>
                    <th>
                        年龄(<a href="javasctipt:;" onClick={this.sortMax}>大</a> | <a href="javasctipt:;" onClick={this.sortMin}>小</a>)
                    </th>
                    <th>电话</th>
                    <th>签名</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
			{
                this.props.list.map((item) => {
                    return <List item={item} key={item.id} editItem={this.editItem} updataItem={this.updataItem} delItem={this.delItem} />
                })
            }
            </tbody>
        </table>
      </div>
      )
  }
}

export default UserList;