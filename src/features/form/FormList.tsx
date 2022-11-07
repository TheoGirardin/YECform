import { useDispatch, useSelector } from "react-redux";
import { selectInputs, removeInput, setValue, setData } from "./formSlice";

export default function FormList() {
  const inputs = useSelector(selectInputs);
  const dispatch = useDispatch();

  return (
    <div className="align-items-center">
      <table className="table">
        <thead>
          <tr>
            <th>Label</th>
            <th>Answer</th>
          </tr>
        </thead>
        <tbody>
          {inputs.map((input) => (
            <tr>
              <td>{input.name}</td>
              {input.options ? (
                <td>
                  <select
                    onChange={(e: any) => {
                      dispatch(setValue({ ...input, value: e.target.value }));
                    }}
                  >
                    {input.options.map((option) => (
                      <option defaultValue={input.value} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </td>
              ) : (
                <td>
                  <input
                    type="text"
                    onChange={(e: any) => {
                      dispatch(setValue({ ...input, value: e.target.value }));
                    }}
                    value={input.value}
                  ></input>
                </td>
              )}
              <td>
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    dispatch(removeInput(input));
                  }}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="btn btn-primary btn-lg"
        onClick={() => dispatch(setData(inputs))}
      >
        Render
      </button>
    </div>
  );
}
