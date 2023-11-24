import { Profiler, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../../ui";

export const Generator = () => {
  const [id, setId] = useState(uuidv4()); // arg -> defaultValue
  // state[0] - value
  // state[1] - setter

  // let id = uuidv4();
  const handleClick = () => {
    // id = uuidv4();
    setId(uuidv4());
  };

  // throw new Error("Error!!! ");

  const handleRender = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime
  ) => {
    console.log({
      id,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
    });
  };

  return (
    <div>
      <Profiler id="generator" onRender={handleRender}>
        <p>{id}</p>
        <Button label="Refresh" onClick={handleClick} />
      </Profiler>
    </div>
  );
};
