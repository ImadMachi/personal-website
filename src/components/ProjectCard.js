import React from "react";

const ProjectCard = ({ description, link, imagePath }) => {
  return (
    <div className="card" draggable={true}>
      <img
        className="card__image"
        src={"./images/" + imagePath}
        alt=""
        width="32rem"
        height="25rem"
      />
      <div className="card__info">
        <p className="card__info__description">{description}</p>
        <a className="card__info__link" href={link} target="_blanck">
          see on github
        </a>
      </div>
    </div>
  );
};

export { ProjectCard as default };
