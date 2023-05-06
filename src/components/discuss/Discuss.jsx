import React, { useState } from 'react';
import '../../styles/discuss.css';

function Discuss({ selectedTopic }) {
  const discuss = selectedTopic ? selectedTopic.discuss : 'Start learning JavaScript';
  const header = selectedTopic ? selectedTopic.topic : null;
  const [modalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <main id="discussions">
      <h1>{header}</h1>
      <p>{discuss}</p>
      {header && (
        <button className='moreExplain' onClick={openModal}>
          Need more Explaining
        </button>
      )}

      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="modal-close-btn" onClick={closeModal}>
              &times;
            </button>
            <h2>More Information</h2>
            <p>Here you can find some additional information about <span>{header}</span>.</p>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" className="more-info-link">
              Click Here
            </a>
          </div>
        </div>
      )}
    </main>
  );
}

export default Discuss;


