import UserForm from "./components/UserForm";
import UsersList from "./components/UsersList";

function App() {
  return (
    <div style={{ margin: "40px" }}>
      <h1>Gestión de Usuarios</h1>

      <UserForm onUserCreated={() => window.location.reload()} />
      <hr />
      <UsersList />
    </div>
  );
}

export default App;




