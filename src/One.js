// Warning: `ReactDOMTestUtils.act` is deprecated in favor of
// `React.act`.
// Import `act` from `react` instead of
// `react-dom/test-utils`. See
// https://react.dev/warnings/react-dom-test-utils for more info.

// const { useState } = require("react");
const React = require("react");
const { useState } = require("react");

const STATUS = {
  HOVERED: "hovered",
  NORMAL: "normal",
};

function One({ page, children }) {
  const [status, setStatus] = useState(STATUS.NORMAL);

  const onMouseEnter = () => {
    setStatus(STATUS.HOVERED);
  };

  const onMouseLeave = () => {
    setStatus(STATUS.NORMAL);
  };

  return (
    <a
      className={status}
      href={page || "#"}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  );
}

module.exports = One;
