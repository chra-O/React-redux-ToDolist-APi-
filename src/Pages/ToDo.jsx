import React from "react";
import { Button, Row, Col, Form, ListGroup } from "react-bootstrap";
import MainSection from "../Component/MainSection";

function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <>
      <div className="todo">
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
          <span style={{ opacity: todo.isDone ? 0.5 : "" }}>{todo.text}</span>
        </span>
        <div>
          <div id="divytodosayan">
            <Button
              variant="secondary"
              id="toDoButton"
              onClick={() => markTodo(index)}
            >
              watched
            </Button>
            <Button
              variant="secondary"
              id="toDoButton"
              onClick={() => removeTodo(index)}
            >
              delete
            </Button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <>
      <Form onSubmit={handleSubmit} id="formInTodolist">
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInput" visuallyHidden>
              Name
            </Form.Label>
            <Form.Control
              className="mb-2"
              id="inlineFormInput"
              value={value}
              placeholder="enter next moive"
              onChange={(e) => setValue(e.target.value)}
            />
          </Col>
        </Row>
        <Button variant="secondary" id="toDoButton" type="submit">
          Add
        </Button>{" "}
      </Form>
    </>
    //
  );
}

export default function ToDo() {
  const [todos, setTodos] = React.useState([
    {
      text: "harry hoter",
      isDone: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <MainSection title="2" />
      <div id="movie"> move list: </div>
      <div className="app">
        <div className="container">
          <FormTodo addTodo={addTodo} />
          <div>
            {todos.map((todo, index) => (
              <ListGroup.Item>
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                />
              </ListGroup.Item>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
