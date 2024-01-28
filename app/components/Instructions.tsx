// import NavigationButton from "./NavigationButton";

function Instructions() {
  return (
    <div className="flex flex-col space-y-4 p-7 sm:p-10">
      <h3 className='text-3xl font-semibold text-black'>Instructions</h3>
      <p>
        Type a brief sentence that says if you are for, against, or have mixed feelings on whether it should be legal for people to buy and sell kidneys. You will then be presented with an argument and be given three opportunities to reply with the interface.
      </p>

      {/* <NavigationButton /> */}
    </div>
  );
}

export default Instructions;