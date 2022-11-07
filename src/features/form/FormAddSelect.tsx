import { useState } from "react";
import { useDispatch } from "react-redux";
import { addInput } from "./formSlice";

export default function FormAddSelect() {
  //state
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [options, setOptions] = useState([""]);

  //function
  const addQuestion = (e: any) => {
    e.preventDefault();
    if (name && options.length > 0) {
      dispatch(
        addInput({
          name: name,
          options: options,
        })
      );
      setName("");
      setValue("");
      setOptions([]);
    }
  };

  const addOption = (e: any) => {
    e.preventDefault();
    setOptions(options.concat(value));
    setValue("");
  };

  //render
  return (
    <div>
      <form onSubmit={addQuestion}>
        <div className="form-group">
          <label>Add a select question</label>
          <input
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="form-control mb-2"
          />
          <input
            type="submit"
            className="btn btn-primary mt-3"
            value="Add question"
          />
        </div>
      </form>

      <ul>
        {options.map((option) => (
          <li>
            {option}{" "}
            <button
              className="btn btn-sm btn-secondary "
              onClick={() =>
                setOptions(options.filter((item) => item !== option))
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={addOption}>
        <div className="form-group">
          <label>Add a select option</label>
          <input
            type="text"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            placeholder="Add option"
            className="form-control mb-2"
          />
        </div>
        <input
          type="submit"
          className="btn btn-primary mt-3"
          value="Add option"
        />
      </form>
    </div>
  );
}
