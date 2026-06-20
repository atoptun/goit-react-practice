import ThirdLevel from "../ThirdLevel/ThirdLevel"

function SecondLevel() {
  return (
    <div style={{ marginLeft: 20 }}>
      SecondLevel
      <ThirdLevel />
    </div>
  );
}
export default SecondLevel
