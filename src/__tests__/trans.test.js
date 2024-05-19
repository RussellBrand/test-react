import React, { useState } from "react";

import { fireEvent, render } from "@testing-library/react";

function CheckboxWithLabel(props) {
  var labelOn = props.labelOn,
    labelOff = props.labelOff;

  var _useState = useState(false),
    isChecked = _useState[0],
    setIsChecked = _useState[1];

  var onChange = function () {
    setIsChecked(!isChecked);
  };

  return React.createElement(
    "label",
    null,
    React.createElement("input", {
      type: "checkbox",
      checked: isChecked,
      onChange: onChange,
    }),
    isChecked ? labelOn : labelOff
  );
}

export const Button = function (props) {
  var children = props.children,
    onClick = props.onClick,
    rest = (function (source, excluded) {
      if (source == null) return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
      }
      return target;
    })(props, ["children", "onClick"]);

  return React.createElement(
    "button",
    Object.assign({ onClick: onClick }, rest),
    children
  );
};

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
// afterEach(cleanup);

it("CheckboxWithLabel changes the text after click", () => {
  var _render = render(
      React.createElement(CheckboxWithLabel, {
        labelOn: "On",
        labelOff: "Off",
      })
    ),
    queryByLabelText = _render.queryByLabelText,
    getByLabelText = _render.getByLabelText;

  expect(queryByLabelText(/off/i)).toBeTruthy();

  fireEvent.click(getByLabelText(/off/i));

  expect(queryByLabelText(/on/i)).toBeTruthy();
});
