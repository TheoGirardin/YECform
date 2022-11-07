import FormAddSelect from "./features/form/FormAddSelect";
import FormAddText from "./features/form/FormAddText";
import FormRender from "./features/form/FormRender";
import FormList from "./features/form/FormList";

function App() {
  return (
    <div className="m-auto grid row">
      <div className="col-md">
        <h1>Add a form</h1>
        <h2>Text</h2>
        <FormAddText />
        <h2>Select</h2>
        <FormAddSelect />
      </div>
      <div className="col-md">
        <h1>List of the form</h1>
        <FormList />
      </div>
      <div className="col-md">
        <h1>Answer table</h1>
        <FormRender />
      </div>
    </div>
  );
}

export default App;
