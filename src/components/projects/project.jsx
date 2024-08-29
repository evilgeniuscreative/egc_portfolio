import React from "react";
import { Link } from "react-router-dom";

import "./styles/project.css";

const truncate = (str) => {
	if (str.length > 195) {
		str = str.length > 195 ? str.substring(0, 195) : str;
		while (str.lastIndexOf(" ") !== -1 && str[str.length - 1] !== " ") {
			str = str.substring(0, str.length - 1);
		}
		str = str + " ...";
	}

	return str;
};

const handleMouseEnter = (e) => {
	const target = e.currentTarget;
	const fullDesc = target.querySelector(".full-description");
	const desc = target.querySelector(".project-description");

	if (desc && fullDesc) {
		fullDesc.classList.remove("hideme");
		fullDesc.classList.add("showme");
		desc.classList.add("hideme");
	}
};

const handleMouseLeave = (e) => {
	const target = e.currentTarget;
	const fullDesc = target.querySelector(".full-description");
	const desc = target.querySelector(".project-description");

	if (desc && fullDesc) {
		desc.classList.remove("hideme");
		fullDesc.classList.add("hideme");
		fullDesc.classList.remove("showme");
	}
};

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
			tempType = "Design and Development";
			break;
	}

	const theLogos = softwareLogos.map((logo) => {
		const rndNum = Math.floor(Math.random() * 10000);
		return (
			<span
				className="project-logo"
				key={`${rndNum}${logo.id}`}
				title={logo.software}
			>
				<img src={logo.img} alt={logo.software} />
			</span>
		);
	});

	return (
		<React.Fragment>
			<div
				className="project"
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<Link className="project-tile" to={link}>
					<div className="project-container">
						<div className="project-logo-wrap">{theLogos}</div>
						<div className="project-title">
							{title} ({tempType})
						</div>

						<div className="project-thumb-section">
							<div
								className="project-thumb"
								style={{ backgroundImage: `url(${thumb})` }}
							></div>
						</div>
						<div className="description-container">
							<div
								className="project-description"
								dangerouslySetInnerHTML={{
									__html: truncate(description),
								}}
							></div>
							<div
								className="full-description"
								dangerouslySetInnerHTML={{
									__html: description,
								}}
							></div>
						</div>

						<div className="project-link-section">
							<div className="project-link-text">{linkText}</div>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;
