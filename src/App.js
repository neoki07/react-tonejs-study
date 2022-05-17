import "./styles.css";
import * as Tone from "tone";
import { useEffect, useState } from "react";

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    isPlaying ? Tone.Transport.start() : Tone.Transport.stop();
  }, [isPlaying]);

  useEffect(() => {
    const osc = new Tone.Oscillator().toDestination();
    // repeated event every 8th note
    Tone.Transport.scheduleRepeat((time) => {
      // use the callback time to schedule events
      osc.start(time).stop(time + 0.1);
    }, "8n");
  }, []);

  return (
    <div className="App">
      <h1>Hello Tone.js</h1>
      <button onClick={() => setIsPlaying((isPlaying) => !isPlaying)}>
        {isPlaying ? "stop" : "start"}
      </button>
    </div>
  );
}
