import { useState } from "react";
import "./styles.css";

import { Class, DEFAULT_CLASS } from "./types";

import EditableList from "./EditableList";
import ClassComponent from "./Class1";
// import ClassComponent from "./Class2";

// 1. root state holder
//   - state vs. props
//   - similar to the root handler in the backend programming
// 2. stateless child components
// 3. modeling and decomposing
//   - locality
// 4. generic component programming - EditableList
// 5. customized hooks - useAllTeachers

export default function App() {
  const clazz0: Class = {
    ...DEFAULT_CLASS,
    teachers: ["Teacher B", "Teacher C"]
  };
  const [clazz, setClazz] = useState<Class>(clazz0);
  return (
    <div className="App">
      <h1>Components:</h1>
      <ClassComponent value={clazz} onChange={setClazz} />
      <br />
      <input type="button" value="Save" onClick={() => console.log(clazz)} />
      <h1>State:</h1>
      <pre style={{ textAlign: "left", background: "#ccc" }}>
        {JSON.stringify(clazz, undefined, 2)}
      </pre>
    </div>
  );
}

export function App2() {
  const clazz0: Class = {
    ...DEFAULT_CLASS,
    teachers: ["Teacher B", "Teacher C"]
  };
  const [classes, setClasses] = useState<readonly Class[]>([clazz0, clazz0]);
  return (
    <div className="App">
      <h1>Components:</h1>
      <EditableList
        value={classes}
        component={ClassComponent}
        onChange={(classes) => setClasses(classes)}
        defaultItem={clazz0}
        addItemText="Add class"
      />
      <br />
      <input type="button" value="Save" onClick={() => console.log(classes)} />
      <h1>State:</h1>
      <pre style={{ textAlign: "left", background: "#ccc" }}>
        {JSON.stringify(classes, undefined, 2)}
      </pre>
    </div>
  );
}
