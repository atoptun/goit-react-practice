import AppBar from "@/components/Lesson_11/AppBar/AppBar";
import Layout from "@/components/Lesson_11/Layout/Layout";
import TaskForm from "@/components/Lesson_11/TaskForm/TaskForm";
import TaskList from "@/components/Lesson_11/TaskList/TaskList";

function Lesson_11() {
  return (
    <div>
      <h1>Lesson 11</h1>
      <hr />
      <Layout>
        <AppBar />
        <TaskForm />
        <TaskList />
      </Layout>
    </div>
  );
}
export default Lesson_11;
