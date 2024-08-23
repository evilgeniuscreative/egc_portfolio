import React from "react";
import "./style/style.css";

const showTheImage = (props) => {
	const { project } = props;
	return (
		<div className="image-container">
			<img src={`../images/${project.image}`} alt={`${project.title}`} />
		</div>
	);
};

export default showTheImage;
