import React, { Component } from "react";

class Hard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addTask: "",
      taskList: [],
      showEdit: -1,
      updatedText: "",
    };
  }

  addTaskItem = () => {
    if (this.state.addTask.trim() !== "") {
      const newTask = {
        id: Math.floor(Math.random() * 10000),
        value: this.state.addTask,
      };
      this.setState((prevState) => ({
        taskList: [...prevState.taskList, newTask],
        addTask: "",
      }));
    }
  };

  deleteTask = (id) => {
    const updatedList = this.state.taskList.filter((item) => item.id !== id);
    this.setState({ taskList: updatedList });
  };

  editItem = (id, newText) => {
    const updatedList = this.state.taskList.map((item) => {
      if (item.id === id) {
        return { ...item, value: newText };
      }
      return item;
    });
    this.setState({
      taskList: updatedList,
      updatedText: "",
      showEdit: -1,
    });
  };

  render() {
    return (
      <div>
        <h1>Todo List App</h1>

        <input
          type="text"
          placeholder="ADD LIST"
          value={this.state.addTask}
          onChange={(e) => this.setState({ addTask: e.target.value })}
        />
        <button onClick={this.addTaskItem}>ADD</button>

        <ul className="Task-List">
          {this.state.taskList.map((item) => (
            <div key={item.id}>
              <li>
                {item.value}
                <button onClick={() => this.deleteTask(item.id)}>X</button>
                {this.state.showEdit === item.id ? (
                  <div>
                    <input
                      type="text"
                      value={this.state.updatedText}
                      onChange={(e) =>
                        this.setState({ updatedText: e.target.value })
                      }
                    />
                    <button
                      onClick={() =>
                        this.editItem(item.id, this.state.updatedText)
                      }
                    >
                      Update
                    </button>
                  </div>
                ) : (
                  <button onClick={() => this.setState({ showEdit: item.id })}>
                    Edit
                  </button>
                )}
              </li>
            </div>
          ))}
        </ul>
        <style jsx>
          {`
            .App ul {
              list-style: none;
              display: flex;
              flex-direction: column;
              justify-content: space-evenly;
              width: 100%;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Hard;
