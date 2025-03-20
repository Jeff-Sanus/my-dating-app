import { ExpoRouter } from "expo-router";

export default function App() {
  return <ExpoRouter />;
}

import Chat from "./Chat";

function App() {
  return (
    <div className="App">
      <Chat />
    </div>
  );
}

export default App;