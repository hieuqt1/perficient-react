import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  {
    /*useState can only be called directly within component functions, not outside or within nested functions
     *useState returns an array with two elements: the original variable value and the updating function*/
  }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          {/* props.date, props.title and props.amount get their values from the title/amount attributes created in App.js */}
          {/* <h2>{title}</h2> */}
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
          {/* <button onClick={clickHandler}>Change Title</button> */}
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
