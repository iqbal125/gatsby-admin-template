import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../utils/auth_context';
import axios from 'axios';
import styles from './createtask.module.css';

const CreateTask = () => {
  const [formTitle, setTitle] = useState('');
  const [formDescription, setDescription] = useState('');

  const context = useContext(AuthContext);
  const { authState } = context;
  const { user } = authState;

  const postTodo = async event => {
    event.preventDefault();
    let author = user ? user.username : '';
    let title = event.target.title.value;
    let description = event.target.description.value;

    let data = { title, description, author };
    await axios.post(`${process.env.GATSBY_SERVER_URL}/api/post/todo`, data);
    setTitle('');
    setDescription('');
  };

  const handleTitleChange = event => {
    setTitle(event.target.value);
  };

  const handleDescChange = event => {
    setDescription(event.target.value);
  };

  return (
    <div className={styles.main}>
      <div className={styles.form_wrap}>
        <form onSubmit={postTodo} className={styles.main_form}>
          <div className={styles.form_row}>
            <label>Title:</label>
            <input onChange={handleTitleChange} value={formTitle} name="title" />
          </div>
          <div className={styles.form_row}>
            <label>Description:</label>
            <textarea onChange={handleDescChange} value={formDescription} name="description" />
          </div>
          <button className={styles.submit_button} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
