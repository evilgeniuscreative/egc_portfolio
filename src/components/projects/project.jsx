import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { softwareLogos, title, description, link, thumb, type } = props;

	let tempType = "dev";
	switch (type) {
		case "design":
			tempType = "design";
			break;
		case "both":
			tempType = "Design & Development";
			break;
			break;
		case "devui":
			tempType = "Development & UI/UX design";
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
				<div className="project-container">
					<div className="project-logo-wrap">{theLogos}</div>
					<div className="project-title">
						{title} ({tempType})
					</div>
					<div className="project-description">
						<div className="projectthumb-wrap">
							<div className="project-thumb">
								<Link
									href={link}
									className="project-thumb"
									style={{ backgroundImage: `url(${thumb})` }}
								>
									<img src={thumb} alt={title} />
								</Link>
							</div>
							{description}
						</div>
						<div className="project-link"></div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Project;
