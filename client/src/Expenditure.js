import { useState } from "react";
import Axios from "axios";
import "./css/Expenditure.css";

function Expenditure() {
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [amount, setAmount] = useState(0);

  const [transactionList, setTransaction] = useState([]);

  const addTransaction = () => {
    Axios.post("http://localhost:3001/create", {
      // body object that we want to send as key-value pairs
      date: date,
      description: description,
      category: category,
      subcategory: subcategory,
      amount: amount,
    }).then(() => {
      setTransaction([
        ...transactionList,
        {
          date: date,
          description: description,
          category: category,
          subcategory: subcategory,
          amount: amount,
        },
      ]);
      console.log("Success");
    });
  };

  return (
    <div className="AddExpenditure">
      <div className="expenditure">
        <label>Date</label>
        <input
          className="date"
          type="date"
          onChange={(event) => {
            setDate(event.target.value);
          }}
        />
        <label>Description</label>
        <input
          className="description"
          type="text"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <label>Category</label>
        <select
          name="category"
          id="category"
          required
          onChange={(event) => {
            setCategory(event.target.value);
          }}
        >
          <option value="">Select Category</option>
          <option className="Rental" value="rental">
            Rental
          </option>
          <option className="Utilities" value="utilities">
            Utilities
          </option>
          <option className="Subscriptions" value="subscriptions">
            Subscriptions
          </option>
          <option className="Auto" value="auto">
            Auto
          </option>
          <option className="Transportation" value="transportation">
            Transportation
          </option>
          <option className="Groceries" value="groceries">
            Groceries
          </option>
          <option className="Discretionary" value="discretionary">
            Discretionary
          </option>
          <option className="Savings" value="savings">
            Savings
          </option>
          <option className="Income" value="income">
            Income
          </option>
        </select>
        <select
          name="subcategory"
          id="subcategory"
          onChange={(event) => {
            setSubcategory(event.target.value);
          }}
        >
          <optgroup className="Rental" required>
            <option value="">Select Subcategory</option>
            <option value="apartment">Apartment</option>
            <option value="rental_insurance">Rental Insurance</option>
          </optgroup>
          <optgroup className="Utilities" required>
            <option value="">Select Subcategory</option>
            <option value="internet_cable">Internet & Cable</option>
            <option value="phone_bill">Phone Bill</option>
            <option value="gas">Gas</option>
            <option value="electricity">Electricity</option>
            <option value="sewer_trash_water">Sewer/Trash/Water</option>
          </optgroup>
          <optgroup className="Subscriptions" required>
            <option value="">Select Subcategory</option>
            <option value="professional">Professional</option>
            <option value="entertainment">Entertainment</option>
            <option value="cloud_storage">Cloud Storage</option>
            <option value="delivery_service">Delivery Service</option>
            <option value="credit_card_fees">Credit Card Annual Fees</option>
          </optgroup>
          <optgroup className="Auto" required>
            <option value="">Select Subcategory</option>
            <option value="auto_insurance">Auto Insurance</option>
            <option value="auto_maintenance">Auto Maintenance</option>
            <option value="fuel_gas">Fuel & Gas</option>
          </optgroup>
          <optgroup className="Transportation" required>
            <option value="">Select Subcategory</option>
            <option value="lyft_uber">Lyft & Uber</option>
            <option value="other_transportation">Other</option>
          </optgroup>
          <optgroup className="Groceries" required>
            <option value="">Select Subcategory</option>
            <option value="general">General</option>
            <option value="alcohol">Alcohol</option>
            <option value="coffee">Coffee</option>
            <option value="supplements">Supplemenets</option>
          </optgroup>
          <optgroup className="Discretionary" required>
            <option value="">Select Subcategory</option>
            <option value="shopping">Shopping</option>
            <option value="restaurants">Restaurants</option>
            <option value="travel">Travel</option>
            <option value="self_care">Self Care</option>
            <option value="living">Living</option>
            <option value="cosmetics_skincare">Cosmetics & Skincare</option>
            <option value="move_in">Move In</option>
            <option value="gifts">Gifts</option>
            <option value="donations">Donations</option>
            <option value="other_discretionary">Other</option>
          </optgroup>
          <optgroup className="Savings" required>
            <option value="">Select Subcategory</option>
            <option value="investments">Investments</option>
            <option value="roth_ira">Roth IRA</option>
            <option value="401k_roth">401k Roth</option>
            <option value="high_yield">High Yield</option>
          </optgroup>
          <optgroup className="Income" required>
            <option value="">Select Subcategory</option>
            <option value="salary">Salary</option>
            <option value="rebates">Rebates</option>
            <option value="stimulus">Stimulus</option>
            <option value="tax_refund">Tax Refund</option>
            <option value="chase_credit">Chase Credit</option>
            <option value="other_income">Other</option>
          </optgroup>
        </select>
        <label>Amount</label>
        <input
          className="amount"
          type="text"
          onChange={(event) => {
            setAmount(event.target.value);
          }}
        />
        <button onClick={addTransaction}>Add Item</button>
      </div>
    </div>
  );
}

export default Expenditure;
