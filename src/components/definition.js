import React, { useEffect, useState } from 'react';
import './definition.scss';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import './form.scss';

const Definition = () => {
  const [emojis, setEmoji] = useState([]);
  const [search, setSearch] = useState('');
  const { register } = useForm();

  const handleFilter = emojis.filter((emoji) => {
    return emoji.title.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    axios.get('http://localhost:5000/api/emoji').then((response) => {
      setEmoji(response.data);
    });
  }, []);

  return (
    <div>
      <div className='form'>
        <form>
          <input
            className='searchbar'
            name='name'
            ref={register}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='😳   search emoji'
          />
          <input value='Restart' className='button' type='submit' />
        </form>
      </div>
      <div className='word-container'>
        {handleFilter.map((emoji) => {
          return (
            <div key={emoji.id}>
              <div className='word'>
                <dt>
                  <img
                    src={emoji.emoji}
                    alt={emoji.title}
                    width='100'
                    height='100'
                  />
                  <p className='term'>{emoji.title}</p>
                </dt>
                <p>{emoji.definition}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Definition;
