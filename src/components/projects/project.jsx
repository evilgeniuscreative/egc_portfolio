import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { softwareLogos, title, description, linkText, link, thumb, type } =
		props;

	let tempType = "dev";
	switch (type) {
		case "design":
			tempType = "design";
			break;
		case "both":
			tempType = "Design & Development";
			break;
		case "devui":
			tempType = "Development & UI/UX design";
			break;
		case "print":
			tempType = "Graphic Design";
			break;
		default:
			break;
	}
	console.log("softwareLogos", softwareLogos);

	const theLogos = softwareLogos.map((logo) => {
		return (
			<span
				className="project-logo"
				key="{logo.id}"
				title={logo.software}
			>
				<img src={logo.img} alt={logo.software} />
			</span>
		);
	});
	console.log("const", theLogos);

	return (
		<React.Fragment>
			<div className="project">
				<Link to={link}>
					<div className="project-container">
						<div className="project-logo-wrap">{theLogos}</div>
						<div className="project-title">
							{title} ({tempType})
						</div>

						<div className="project-thumb-section">
							<div
								href={linkText}
								className="project-thumb"
								style={{ backgroundImage: `url(${thumb})` }}
							></div>
						</div>
						<div className="project-description">{description}</div>

						<div className="project-link-icon"></div>

						<div className="product-link-section">
							<FontAwesomeIcon
								className="project-link-icon"
								icon={faLink}
							/>
							<div className="project-link-text">{link}</div>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;
