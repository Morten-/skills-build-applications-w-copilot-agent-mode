
// Set REACT_APP_CODESPACE_NAME from environment if available
if (!process.env.REACT_APP_CODESPACE_NAME && window.location.hostname.includes('-8000.app.github.dev')) {
  process.env.REACT_APP_CODESPACE_NAME = window.location.hostname.split('-8000.app.github.dev')[0];
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
