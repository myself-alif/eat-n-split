import { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({ selectedFriend, handleSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const paidByFriend = bill ? bill - paidByUser : "";

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    handleSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label htmlFor={selectedFriend.name}>🤑 Bill amount</label>
      <input
        type="text"
        id={selectedFriend.name}
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label htmlFor="me">🧍 Your expense</label>
      <input
        type="text"
        id="me"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill
              ? paidByUser
              : Math.abs(Number(e.target.value))
          )
        }
      />

      <label>🧑‍🤝‍🧑 {selectedFriend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label htmlFor="">🤑 Who is paying?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
