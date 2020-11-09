import React from "react";
import ProjectCard from "./ProjectCard";

const Works = () => {
  return (
    <div className="works">
      <ProjectCard
        description="A styled react-redux notes application.(react redux htmlv4 font-awesome uuidv4 html css)"
        link="https://github.com/ImadMachi/react-redux-notes-app"
        imagePath="note-app-snip.JPG"
      />
    </div>
  );
};

export { Works as default };
