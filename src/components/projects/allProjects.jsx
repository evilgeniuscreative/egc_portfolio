import React from "react";
import Project from "./project";
import INFO from "../../data/user";
import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<>
			<div className="all-projects-container">
				{INFO.projects.map(
					(project, index) =>
						project.show !== false && (
							<div className="all-projects-project" key={index}>
								<Project
									softwareLogos={project.logos}
									title={project.title}
									description={project.description}
									thumb={project.thumb}
									type={project.type}
									link={project.link}
									linkText={project.linkText}
								/>
							</div>
						)
				)}
			</div>
		</>
	);
};

export default AllProjects;
