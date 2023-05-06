import React, { useState } from 'react';
import Discuss from "./components/discuss/Discuss";
import Topics from "./components/topics/Topics";
function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  return (
    <div>
      <Topics selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} />
      <Discuss selectedTopic={selectedTopic} />
    </div>
  );
}
export default App;
