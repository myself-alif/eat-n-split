import { useState } from "react";
import Button from "./Button";

export default function FormAddFriend({ handleAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmission(e) {
    e.preventDefault();
    if (!name) return;

    const friendId = crypto.randomUUID();
    const newFriend = {
      id: friendId,
      name,
      image: `${image}?=${friendId}`,
      balance: 0,
    };
    handleAddFriend(newFriend);
    setImage("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmission}>
      <label htmlFor="">☺️ Friend</label>
      <input
        type="text"
        name=""
        id=""
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="">🖼️ Image URL</label>
      <input
        type="text"
        name=""
        id=""
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}
