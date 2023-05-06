import React from 'react';
import '../../styles/topics.css';
import data from '../../data.json';

 function Topics({ selectedTopic, setSelectedTopic }) {
    const handleTopicClick = (topic) => {
      setSelectedTopic(topic);
    };
    return (
      <aside id="topics">
        {data.data.map((item) => (
          <button key={item.id} onClick={() => handleTopicClick(item)}>
            {item.topic}
          </button>
        ))}
      </aside>
    );
}
export default Topics;
