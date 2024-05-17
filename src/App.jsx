import "./App.css";

function App() {
  const handelAddUser = e =>{
    e.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const user = {name, email}
    console.log(user)
    fetch("http://localhost:5000/users",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data)
    })
}
  return (
    <>
      <h1 className="text-6xl text-purple-600">Coffee CRUD</h1>
      <div>
           
            <form onSubmit={handelAddUser}>
                <input type="type" name="name" id="" /> <br />
                <input type="email" name="email" id="" /><br />
                <input type="submit" value="Add Users" />
            </form>
        </div>
    </>
  );
}

export default App;
