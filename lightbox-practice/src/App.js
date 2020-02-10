import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactImageVideoLightbox from './lightbox';

function App() {
  return (
    <div className="App">
      <ReactImageVideoLightbox
          data={[
            {
              url: "https://placekitten.com/450/300",
              type: "photo",
              altTag: "some image"
            },
            {
              url: "https://www.youtube.com/embed/ScMzIvxBSi4",
              type: "video",
              altTag: "some video"
            },
            {
              url: "https://placekitten.com/550/500",
              type: "photo",
              altTag: "some other image"
            },
            {
              url: "https://www.youtube.com/embed/ScMzIvxBSi4",
              type: "video",
              altTag: "some other video"
            }
          ]}
          startIndex={0}
          showResourceCount={true}
        />
    </div>
  );
}

export default App;
