"use client";

import { useState } from "react";
import AgentUpdate from "./agent-update";

export default function Page() {
  const [newAgent, setNewAgent] = useState(false);

  const toggleNewAgent = () => {
    setNewAgent(!newAgent);
  };

  return (
    <div className="h-full flex items-center justify-center gap-1">
      Good morning interviewer,
      <div
        onClick={() => toggleNewAgent()}
        className="text-blue-600 hover:underline cursor-pointer"
      >
        Click here to update Agent Info
      </div>
      {newAgent && <AgentUpdate onclose={toggleNewAgent} />}
    </div>
  );
}
