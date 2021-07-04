import Axios from "axios";
import { useState } from "react";
import "./css/Transactions.css";
import resetForms from "./FormHandler";

function Transactions() {
  const [transactionList, setTransaction] = useState([]);
  const [newAmount, setNewAmount] = useState(0);

  const getTransactions = () => {
    Axios.get("http://localhost:3001/transactions").then((response) => {
      setTransaction(response.data);
    });
  };

  const deleteTransaction = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setTransaction(
        transactionList.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };

  const updateTransactionAmount = (id) => {
    Axios.put("http://localhost:3001/update", {
      amount: newAmount,
      id: id,
    }).then((response) => {
      console.log("Update");
    });
    resetForms("update-transactions")
  };

  const formatDate = (date) => {
    let d = new Date(date).toDateString();
    return d;
  };

  const formatCategory = (string) => {
    // split string at _ and for capitalize each word
    let arr = [];
    let capArr = [];
    arr.push(string.replace("_", " "));
    arr.forEach((item) => {
      console.log(item);
      capArr.push(item.charAt(0).toUpperCase() + item.slice(1));
    });
    return capArr;
  };

  return (
    <div className="Transactions">
      <button onClick={getTransactions}>Show Transactions</button>
     
      {transactionList.map((val, key) => {
        return (
          <div className="transactions" key={val.id}>
             <form id="update-transactions">
             <table>
              <tbody>
                <tr className="rows">
                  <td>{formatDate(val.date)}</td>
                  <td>{val.description}</td>
                  <td>{formatCategory(val.category)}</td>
                  <td>{formatCategory(val.subcategory)}</td>
                  <td>{val.amount}</td>
                  <td>
                      <input
                        type="text"
          
                        onChange={(event) => {
                          setNewAmount(event.target.value);
                        }}
                      ></input>
                  </td>
                  <td>
                    <button
                      className="delete"
                      onClick={() => {
                        deleteTransaction(val.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      className="update"
                      onClick={() => {
                        updateTransactionAmount(val.id);
                      }}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
             </form>
          </div>
        );
      })}
    </div>
  );
}

export default Transactions;
