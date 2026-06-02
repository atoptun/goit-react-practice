import clsx from "clsx";

export default function Lesson_04({ hidden = false }) {
  return (
    <div className={clsx("lesson-04", { hidden: hidden })}>
      <h1>Lesson 04</h1>
    </div>
  );
}
