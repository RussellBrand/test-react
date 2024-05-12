import renderer from 'react-test-renderer';
// const renderer = require("react-test-renderer");

import One from '../One';
// const One = require("../One");


import React from "react";
// const React = require("react");

it("changes the class when hovered", () => {
  const component = renderer.create(
    <One page="http://www.facebook.com">Facebook</One>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseEnter();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseLeave();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
