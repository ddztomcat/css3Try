import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
export default class Zindex extends React.Component {
  render() {
    return (
      <div>
        <LiveProvider code="<strong>Hello World!</strong>">
          <LiveEditor />
          <LiveError />
          <LivePreview />
        </LiveProvider>
      </div>
    );
  }
}
