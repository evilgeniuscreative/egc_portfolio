import React from "react";
import { Link } from "react-router-dom";

import "./style/animation.css";

const Animation = (props) => {
	const { title, description, link, thumb } = props;
	return (
		<div className="animation-item">
			<Link to={link} className="animation-link">
				<div className="animation-thumb">
					<img src={thumb} alt={title} />
				</div>
			</Link>
			<div className="description animation-description">
				{description} | <Link to={link}>View...</Link>
			</div>
		</div>
	);
};

export default Animation;
