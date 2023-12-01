import NavigationButton from "./NavigationButton";

function Instructions() {
  return (
    <div className="flex flex-col space-y-4 p-7 sm:p-10">
      <h3 className='text-3xl font-semibold text-black'>Instructions</h3>
      <p>
        You are playing a task management game. 
        Each round, you will be presented a unique task list. 
        Each task will have a different point value and deadline. 
        All tasks take 1 turns and there are 1 turns available each round. 
        Some tasks may expire before you can complete them – 
        any task that cannot be completed within the allotted timeframe should be <strong>dismissed</strong> by dragging and dropping them into the <strong>dismissed</strong> section below the task list. 
        For example, a task with a deadline on <em>Turn 6</em> must be completed first or dismissed, 
        otherwise it will expire and be considered “invalid”.
      </p>

      <p>
        It is your job to rank tasks 
        in the order you wish to complete them. <u>The goal of each round is to maximize the number of points collected.</u> At the end of the game, 
        one round will be randomly chosen to convert into a bonus payment.
        It will be calculated based on the proportion of points you earn in the round relative to the number of points available. 
        For example, if you earn 800 points and there are 1000 possible points available, then you would earn 80% of the maximum bonus payment, which is 1.00 USD, resulting in a bonus of 0.80 USD.
      </p>

      <NavigationButton />
    </div>
  );
}

export default Instructions;