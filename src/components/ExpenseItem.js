import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  function clickHandler() {
    console.log("Button was clicked");
  }
  
  return (
    <Card className="expense-item">
      <ExpenseDate date = {props.date} />
      <div className="expense-item__description">
        {/*props.date, props.title and props.amount get their values from the title/amount attributes created in App.js*/}
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
