import React from 'react';


class TodoList extends React.Component {
    render() {
      return (
        <ul>
          {this.props.items.map(item => (
            <li key={item.id}>{item.depart} + {item.arrive} ==> {item.pseudo}</li>
          ))}
        </ul>
      );
    }
  }

  export default TodoList
  