import React, { useState } from "react";

const Pract: React.FC = () => {
  const [data, setData] = useState();
  return (
    <div>
      <div data-testid="box1" role="box" className="box1 box">
        Box 1
      </div>
      <div data-testid="box2" role="box" className="box2 box">
        Box 2
      </div>
      <div data-testid="box3" role="box" className="box3 box">
        Box 3
      </div>
    </div>
  );
};

export default Pract;
