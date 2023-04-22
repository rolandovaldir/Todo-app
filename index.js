function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }        
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    <div className="app">
      <div className="card col-5">
        <div className="card-header"> Here are the tasks for today {Date()}</div>
        <div className="card-body">
          {todos.map((todo, i) => (
            <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
          ))}
        </div>
        <div className="card-footer">
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
