import * as React from "react";
import Select from "react-select";



const Dropdown: React.FC<{ [x: string]: any }> = props => (
  <Select
    classNamePrefix="dropdown"
    className="dropdown-component"
    {...props}
  />
);

export default Dropdown;
