/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Article.module.css';

function Article() {
  const [tags, setTags] = useState(['']);

  const handleAddTag = () => {
    setTags([...tags, '']);
  };

  const handleRemoveTag = (index) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  const handleTagChange = (index, value) => {
    const newTags = [...tags];
    newTags[index] = value;
    setTags(newTags);
  };

  return (
    <div className={styles.newPostForm}>
      <h2>Create New Post</h2>
      <form>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" />

        <label htmlFor="shortDescription">Short Description:</label>
        <textarea id="shortDescription" name="shortDescription" rows="4" />

        <label htmlFor="text">Text:</label>
        <textarea id="text" name="text" rows="8" />

        <div className={styles.tagsContainer}>
          <label>Tags:</label>
          {tags.map((tag, index) => (
            <div key={uuidv4()} className={styles.tagInputContainer}>
              <input
                type="text"
                placeholder="Enter tag"
                value={tag}
                onChange={(e) => handleTagChange(index, e.target.value)}
              />
              {tags.length > 1 && (
              <button type="button" onClick={() => handleRemoveTag(index)}>
                Remove
              </button>
              )}
            </div>
          ))}
          <button type="button" onClick={handleAddTag}>
            Add Tag
          </button>
        </div>

        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default Article;
