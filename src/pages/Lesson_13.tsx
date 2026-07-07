import AppBar from "@/components/Lesson_13/AppBar/AppBar";
import TaskForm from "@/components/Lesson_13/TaskForm/TaskForm";
import TaskList from "@/components/Lesson_13/TaskList/TaskList";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchRemoteTasks } from "@/redux/operations";
import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

function Lesson_13() {
  // const dispatch = useDispatch();
   const dispatch = useAppDispatch();

  const {isLoading, error} = useAppSelector(state => state.remoteTasks);

  // console.info(items, isLoading, error);

  useEffect(() => {
    dispatch(fetchRemoteTasks());
  }, [dispatch]);

  return (
    <>
      <h1>Lesson_13</h1>
      <hr />
      <h2>Remote Tasks</h2>
      <hr />
      <AppBar />
      <TaskForm />
      {isLoading && !error && <b>Request in progress...</b>}
      {!isLoading && error && <p>Error: {error}</p>}
      <TaskList />
      {/* {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul> */}
    </>
  );
}
export default Lesson_13;
