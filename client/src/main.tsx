import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Create main app root
const root = createRoot(document.getElementById("root")!);
root.render(<App />);

// Create separate root for Stagewise toolbar in development mode
if (process.env.NODE_ENV === 'development') {
  const { StagewiseToolbar } = require('@stagewise/toolbar-react');
  const toolbarRoot = createRoot(document.createElement('div'));
  toolbarRoot.render(
    <StagewiseToolbar
      config={{
        plugins: []
      }}
    />
  );
}
