import React from 'react';
import Tumbler from './components/Tumbler/Tumbler';

function App() {
  return (
    <div>
      <Tumbler direction={"l"} />
      <Tumbler direction={"r"} />
      <Tumbler direction={"u"} />
      <Tumbler direction={"d"} />
      <Tumbler direction={"ru"} />
      <br />
      <br />
      <br />
      <Tumbler direction={"rd"} />
        <br />
        <br />
        <br />
      <Tumbler direction={"lu"} />
        <br />
        <br />
        <br />
      <Tumbler direction={"ld"} />
    </div>
  );
}

export default App;
