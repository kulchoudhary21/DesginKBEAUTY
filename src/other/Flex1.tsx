import React from "react";
import Card from "@infowind_tech/card";
const Flex1 = () => {
  return (
    // <div
    //   style={{
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <div
    //     style={{
    //       border: "2px solid",
    //     }}
    //   >
    <div className="app">
      <h1>My Blog Posts</h1>
      <div style={{ display: "flex" }}>
        <Card
          image="../../public/images/card1.png"
          title="Getting Started with React"
          description="Learn the basics of React and start building your first application."
          date="2024-07-29"
          time="10:00 AM"
          author="Jane Smith"
        />
        <Card
          image="../../public/images/Banner.png"
          title="Advanced React Patterns"
          description="Explore advanced React patterns to build scalable and maintainable applications."
          date="2024-07-30"
          time="2:30 PM"
          author="John Doe"
        />
      </div>
    </div>
    //   </div>
    // </div>
  );
};

export default Flex1;
