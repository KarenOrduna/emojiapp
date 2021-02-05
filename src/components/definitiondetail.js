import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DefinitionDetails = () => {
  let [emojis, setEmoji] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/emoji/:id').then((response) => {
      setEmoji(response.data);
    });
  }, []);

  <div className='definition-text'>
    {emojis.map((emoji) => {
      return <p>{emoji.definition}</p>;
    })}
  </div>;
};

export default DefinitionDetails;
