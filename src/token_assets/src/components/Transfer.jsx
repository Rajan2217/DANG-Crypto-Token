import React, { useState } from "react";
import { token } from "../../../declarations/token";
// import Principal from "@dfinity/principal"; 

function Transfer() {

  const [recipientId, setId] = useState("");
  const [amount, setAmount] = useState("");
  const [buttonText, setButtonText] = useState("Transfer");
  const [isDisabled, setDisabled] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [isHidden, setHidden] = useState(true);
  
  async function handleClick() {
    // let recipient = Principal.fromText(recipientId);
    setHidden(true);
    setDisabled(true);
    let amountToTransfer = Number(amount);
    let result = await token.transferFrontend(recipientId, amountToTransfer);
    setFeedback(result);
    setHidden(false);
    setButtonText(result);
    setDisabled(false);
  }

  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={recipientId}
                onChange={(e) => setId(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button id="btn-transfer" onClick={handleClick} disabled={isDisabled} >
            {buttonText}
          </button>
        </p>
        <p hidden={isHidden}>{feedback}</p>
      </div>
    </div>
  );
}

export default Transfer;