import React, { useState } from "react";

const STATUS = {
  HOVERED: "hovered" as "hovered",
  NORMAL: "normal" as "normal",
} as const;

type Status = (typeof STATUS)[keyof typeof STATUS];
// type Status = "normal" | "hovered";

function One({ page, children }) {
  const [status, setStatus] = useState<Status>(STATUS.NORMAL);

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

// module.exports = One;
export default One;
