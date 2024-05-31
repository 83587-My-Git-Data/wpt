import { useState } from "react";

function Amenity({ icon, title, condition }) {
  console.log(condition);
  const [checked, isChecked] = useState(false);

  return (
    <div className="container mb-2">
      <div>
        <input
          type="checkbox"
          className="me-2"
          onChange={(e) => {
            isChecked(e.target.checked);
            // onChange(e.target.checked);
          }}
        />
        <i className={"bi " + icon} style={{ fontSize: 20 }} />
        <span>{title}</span>
      </div>
    </div>
  );
}

export default Amenity;
