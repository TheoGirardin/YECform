import { useSelector } from "react-redux";
import { selectData } from "./formSlice";

export default function FormRender() {
  const data = useSelector(selectData);

  //render
  return (
    <div>
      <table className="table">
        <tbody>
          <tr>
            <th>Question</th>
            <th>Answer</th>
          </tr>
          {data.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
