
  # Study App Prototype

  High-fidelity demo prototype implementing core study assistance flows (hardcoded / no backend) based on provided problem statement. Follows Shneiderman’s Eight Golden Rules: consistency, shortcuts, informative feedback (toasts), closure (finish review), error prevention (disabled buttons), easy reversal (exit review), locus of control (user can pick subject/deck), reduced memory load (visual grouping & labels).

  ## Implemented Sections

  Sidebar navigation provides access to:

  1. Dashboard – Subject selector (Biology, Physics, China History) + analytics panels: Group Activity Trend, Completion Status, Common Errors, AI Comments, Suggested Study Plan, Personal Learning Curve.
  2. Generator – Simulated AI notecard generation: enter a topic (e.g. DSA 101) -> hardcoded deck -> choose subject or create a new one -> import.
  3. Subjects – List subjects, their decks, preview first cards, Review button launches flashcard review flow (show/hide answer, progress bar, finish returns to Subjects).
  4. Recording – Simulated lecture recorder. Start/Stop with blinking red indicator and live speech-to-text (Web Speech API if available, otherwise scripted lines). On stop, hardcoded Japanese summary notecards appear with import control.

  Global header contains Quick Review button (random deck) and notification drawer.

  ## Quick Start

  ```bash
  npm install
  npm run dev
  ```

  Open http://localhost:5173 (default Vite port) to interact.

  ## Notes

  - All data is in-memory; refresh loses changes.
  - Minimal ambient TypeScript declarations are used instead of installing @types to keep prototype lightweight.
  - Speech recognition uses `window.SpeechRecognition` / `webkitSpeechRecognition` if present; otherwise auto-fills transcript.

  ## Future Enhancements (Not Implemented)

  - Real AI generation & analytics via backend.
  - Persistence (localStorage or backend) and spaced repetition algorithm.
  - Accessibility audit (ARIA roles, keyboard traps) and responsive layout polishing.


  This is a code bundle for Study App UI Design. The original project is available at https://www.figma.com/design/tMzOy7gfpC3t1RTFQXW8ya/Study-App-UI-Design.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  