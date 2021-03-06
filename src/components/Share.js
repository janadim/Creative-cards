import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";

function Share(props) {
  const [status, setStatus] = useState("No enviado"); // "No enviado", "Me ha dado error", "Me ha dado ok"
  const [cardURL, setURL] = useState("");

  const handleCreateCard = () => {
    fetch("https://awesome-profile-cards.herokuapp.com/card", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props.data),
    })
      .then((response) => response.json())
      .then((res) => {
        const result = res.cardURL;
        if (res.success === false) {
          setStatus("Me ha dado error");
        } else {
          setStatus("Me ha dado ok");
          setURL(res.cardURL);
          console.log(res.cardURL);
        }
      });
  };

  return (
    <div className="share-container">
      <div className="sharebutton" onClick={handleCreateCard}>
        <i className="far fa-address-card list-icon2c js-hidden"></i>
        <div className="new-card js-create-card">Create card</div>
      </div>

      {status === "Me ha dado error" ? <ErrorMessage /> : null}
      {status === "Me ha dado ok" ? <SuccessMessage url={cardURL} /> : null}
    </div>
  );
}

export default Share;
