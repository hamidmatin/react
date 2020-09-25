import React, { useEffect, useState } from "react";
import List from "./List";
import WithdLoading from "../HOC/WithLoading";

const ListWithLoading = WithdLoading(List);

export default function Home() {
  //   const formatCurrency = function (currencySymbol, decimalSeparator) {
  //     return function (value) {
  //       const wholePart = Math.trunc(value / 100);
  //       let fractionalPart = value % 100;
  //       if (fractionalPart < 10) {
  //         fractionalPart = "0" + fractionalPart;
  //       }
  //       return `${currencySymbol}${wholePart}${decimalSeparator}${fractionalPart}`;
  //     };
  //   };

  //   function clickHandler() {
  //     let getLabel = formatCurrency("$", ".");
  //     console.log(getLabel(1999));

  //     let getLabelPersian = formatCurrency("ریال", "/");

  //     console.log(getLabelPersian(1999));
  //   }

  const [repos, setRepos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect (() => {
      setTimeout(() => {
        fetch(`https://api.github.com/users/hacktivist123/repos`)
        .then((json) => json.json())
        .then((repos) => {
          //   this.setState({ loading: false, repos: repos });
          setRepos(repos);
          setIsLoading(false);
        });
      }, 2000);
    
  });


  return (
    <div>
      <h1>Home</h1>
      <p>sdkjgfs f gsdfjgas dflkasdg fjkadsgj</p>
      {/* <button onClick={clickHandler}>Test HOC (Format Currency)</button> */}
      <hr />
        <ListWithLoading repos={repos} isLoading={isLoading} />
    </div>
  );
}
