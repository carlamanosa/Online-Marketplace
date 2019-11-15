import React from "react";
import "./style.css";

function FilterBar() {
  return <div class="row" className="filterbar">
   <div class="input-group-prepend">
  <input type="text" id="Name" class="col" placeholder="Type here to filter through employees"></input>
  </div>
</div>
}

export default FilterBar;
