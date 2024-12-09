"use client";

import { useAppSelector } from "@/lib/hooks";
import { selectTopic, selectType, selectPoliticalPreference } from "@/lib/typeSlice";
// import NavigationButton from "./NavigationButton";

function Instructions() {
  const topic = useAppSelector(selectTopic);
  const type = useAppSelector(selectType);
  const politicalPreference = useAppSelector(selectPoliticalPreference);

  const freeTradeDefinition = <p className="text-xs text-[rgba(0,0,0,0.45)]">(A free trade agreement is a pact between two or more nations to reduce barriers to imports and exports among them. Under a free trade policy, goods and services can be bought and sold across international borders with little or no government tariffs, quotas, subsidies, or prohibitions to inhibit their exchange.)</p>;

  let instruction = "";
  if (politicalPreference == "democrat" && topic == "freeTrade" && type == "argument") {
    instruction = "Type a brief sentence that says if you are for, against, or have mixed feelings on whether the United States should adopt free trade agreements with other countries. You will then be presented with an argument and be given three opportunities to reply with the interface.";
  } else if (politicalPreference == "democrat" && topic == "freeTrade" && type == "anti-argument") {
    instruction = "Type a brief sentence that says if you are for, against, or have mixed feelings on whether the United States should adopt free trade agreements with other countries. You will then be presented with an argument and be given three opportunities to reply with the interface.";
  } else if (politicalPreference == "democrat" && topic == "kidneyMarkets" && type == "argument") {
    instruction = "Type a brief sentence that says if you are for, against, or have mixed feelings on whether the United States should make it legal for people to buy and sell their kidneys if they wish. You will then be presented with an argument and be given three opportunities to reply with the interface.";
  } else if (politicalPreference == "democrat" && topic == "kidneyMarkets" && type == "anti-argument") {
    instruction = "Type a brief sentence that says if you are for, against, or have mixed feelings on whether the United States should make it legal for people to buy and sell their kidneys if they wish. You will then be presented with an argument and be given three opportunities to reply with the interface.";
  } else if (politicalPreference == "republican" && topic == "freeTrade" && type == "argument") {
    instruction = "Type a brief sentence that says if you are for, against, or have mixed feelings on whether the United States should adopt free trade agreements with other countries. You will then be presented with an argument and be given three opportunities to reply with the interface.";
  } else if (politicalPreference == "republican" && topic == "freeTrade" && type == "anti-argument") {
    instruction = "Type a brief sentence that says if you are for, against, or have mixed feelings on whether the United States should adopt free trade agreements with other countries. You will then be presented with an argument and be given three opportunities to reply with the interface.";
  } else if (politicalPreference == "republican" && topic == "kidneyMarkets" && type == "argument") {
    instruction = "Type a brief sentence that says if you are for, against, or have mixed feelings on whether the United States should make it legal for people to buy and sell their kidneys if they wish. You will then be presented with an argument and be given three opportunities to reply with the interface.";
  } else if (politicalPreference == "republican" && topic == "kidneyMarkets" && type == "anti-argument") {
    instruction = "Type a brief sentence that says if you are for, against, or have mixed feelings on whether the United States should make it legal for people to buy and sell their kidneys if they wish. You will then be presented with an argument and be given three opportunities to reply with the interface.";
  }

  return (
    <div className="flex flex-col space-y-4 p-7 sm:p-10">
      <h3 className='text-3xl font-semibold text-black'>Instructions</h3>
      <p>
        {instruction}
      </p>

      {topic == "freeTrade" ? freeTradeDefinition : null}

      {/* <NavigationButton /> */}
    </div>
  );
}

export default Instructions;