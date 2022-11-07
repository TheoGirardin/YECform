import { useState } from "react";
import { useDispatch } from "react-redux";
import { addInput } from "./formSlice";

export default function FormAddText() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (name === "") {
    } else {
      dispatch(
        addInput({
          name: name,
        })
      );
      setName("");
    }
  };

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Add a text question</label>
        <input
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-primary">
          Add text question
        </button>
      </div>
    </form>
  );
}
