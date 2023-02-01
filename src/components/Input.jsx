import React from 'react'
import Img from "../img/img.png";
import Attach from "../img/attach.png";
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { useState } from 'react';


const Input = () => {

  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  return (
    <div className='input'>
      <input type="text"  placeholder='Type something...'/>
      <div className="send">
        <img src={Attach} alt="" />
        <img src={Img} alt="" />
        <input type="file"  style={{display: "none"}} id="file" />
        <label htmlFor="file">
          <img src="" alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input