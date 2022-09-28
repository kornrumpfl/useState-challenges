import {useState} from "react";
import "./ActiveToggle.css";

function ActiveToggle() {
  const[brokkoli, setBrokkoli]=useState("notActive");
  return (
    <main>
      <div className={brokkoli==="Active"?"box box--active":"box"}/>
      <button type="button" onClick={()=>setBrokkoli(brokkoli==="Active"?"notActive":"Active")}>{brokkoli==="Active"?"Activate":"Deactivate"}</button>
    </main>
  );
}

export default ActiveToggle;
