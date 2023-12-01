// import { useState } from "react";
// import Consent from "./Consent";
import Instructions from "./Instructions";
// import Followup from "./Followup";

function Panel() {
  return (
    <div className="border-gray-200sm:mx-0 mx-5 mt-10 max-w-screen-md rounded-md border sm:w-full">
      {/* <Consent /> */}
      <Instructions />
      {/* <Followup /> */}
    </div>
  );
}

export default Panel;