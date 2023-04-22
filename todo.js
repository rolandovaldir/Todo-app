function Todo({todo,index,remove}){
  function handle(){
    console.log('Ping:',index);
    remove(index);
  }
  return ( 
  
    <div className="card-body">
      <div className="card">
        <label className="todo">{todo.text}</label>
        <button type="button" className="btn btn-success btn-sm" onClick={handle}>Done...</button>
      </div>
    </div>
  
  )
}
