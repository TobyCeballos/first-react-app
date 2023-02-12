import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
function App() {
  return (
    <main className="bg-slate-900 p-2 h-screen ">
      <div className="container mx-auto">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
