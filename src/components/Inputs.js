import React, { useState } from "react";
import "../stylesheets/App.scss";
import GetAvatar from "./GetAvatar";
import Profile from "./Profile";

function Inputs(props) {
  const [avatar, setAvatar] = useState("");

  // funcion lifting para previsualizar la imagen en el cuadradito
  function updateAvatar(avatar) {
    props.handleChangeInputs(avatar, "photo");
  }

  // funcion lifting para el resto de inputs
  function handleInputs(event) {
    props.handleChangeInputs(event.target.value, event.target.name);
  }

  return (
    <div className="fill-container">
      <label>
        Full name
        <input
          className="js-form formies js-name"
          placeholder="Ada Lovelace"
          type="text"
          name="name"
          value={props.data.name}
          onChange={handleInputs}
        />
      </label>
      <label>
        Profession
        <input
          className="js-form formies js-job"
          placeholder="Frontend Developer"
          type="text"
          name="job"
          value={props.data.job}
          onChange={handleInputs}
        />
      </label>
      <p>Profile image</p>

      <div>
        <GetAvatar
          avatar={props.data.photo}
          updateAvatar={updateAvatar}
          changeInputs={handleInputs}
        />
        <Profile avatar={avatar} />
      </div>

      <div>
        <p>
          E-mail
          <input
            className="js-form formies js-mail"
            placeholder="ada@lovelace.com"
            type="email"
            id="email"
            name="email"
            value={props.data.email}
            onChange={handleInputs}
          />
        </p>
        <p>
          Phone
          <input
            className="js-form js-preview-phone formies js-phone"
            placeholder="000000000"
            type="tel"
            id="phone"
            name="phone"
            value={props.data.phone}
            onChange={handleInputs}
          />
        </p>
        <p>
          Linkedin
          <input
            className="js-form formies js-linkedin"
            placeholder="adalovelace"
            type="text"
            name="linkedin"
            value={props.data.linkedin}
            onChange={handleInputs}
          />
        </p>
        <p>
          Github
          <input
            className="js-form formies js-github"
            placeholder="alovelace"
            type="text"
            name="github"
            value={props.data.github}
            onChange={handleInputs}
          />
        </p>
      </div>
    </div>
  );
}

export default Inputs;
