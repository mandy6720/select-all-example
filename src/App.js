import React, { useState } from "react";
import "./App.css";

const App = () => {
  // We are going to initialize our app with no checkboxes selected
  const [allSelected, setAllSelected] = useState(false);

  const checkboxes = [0, 1, 2, 3, 4, 5, 6].map((item) => {
    return { label: item, state: false };
  });

  const [checkboxState, setCheckboxState] = useState(checkboxes);

  const handleSelectAllToggle = () => {
    // If allSelected is toggled to true, set all states to true
    if (allSelected === false) {
      setAllSelected(true);
      const newChecked = checkboxState.map((box) =>
        Object.assign(box, { state: true })
      );
      setCheckboxState(newChecked);
      // If allSelected is toggled to false, set all boxes to false
    } else if (allSelected === true) {
      setAllSelected(false);
      const newChecked = checkboxState.map((box) =>
        Object.assign(box, { state: false })
      );
      setCheckboxState(newChecked);
    }
  };

  const handleChange = (event, label) => {
    // We basically want to handle the checked state of the checkboxes through state now
    const newChecked = checkboxState.map((box) => {
      if (box.label === label) {
        return Object.assign(box, { state: !box.state });
      }
      return Object.assign(box, { state: box.state });
    });
    if (allSelected === true) {
      setAllSelected(false);
    }
    setCheckboxState(newChecked);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Let's learn how to Select All like a boss!</h1>
        <div className="checkboxes">
          <label>
            Select All
            <input
              type="checkbox"
              checked={allSelected}
              onChange={handleSelectAllToggle}
            />
          </label>
          {checkboxState.map((box) => (
            <label>
              Checkbox #{box.label}
              <input
                type="checkbox"
                checked={box.state}
                onChange={(e) => handleChange(e, box.label)}
              />
            </label>
          ))}
        </div>
      </header>
    </div>
  );
};

export default App;
