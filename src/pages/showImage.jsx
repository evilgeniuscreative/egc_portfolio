import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import ShowTheImage from "../components/showTheImage/showTheImage";
import "./styles/showimage.css";
import INFO from "../data/user";
import SEO from "../data/seo";

const currentSEO = SEO.find((item) => item.page === "showimage");

const ShowImage = () => {
	const { id } = useParams();
	const project = INFO.projects.find((proj) => proj.id === id);

	console.log("project", project, "id", id);
	return (
		<React.Fragment>
			<Helmet>
				<title>{`Image of | ${project.title}`}</title>
				{/* <meta name="description" content={currentSEO.description} /> */}
				{/* <meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/> */}
			</Helmet>
			<div className="page-content">
				<NavBar active="show-image" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="show-image-container">
						<div className="title show-image-title">
							{project.title}
						</div>
						<div className="description show-images-description">
							{project.description}
						</div>
						<div className="show-image-items-container">
							<ShowTheImage project={project} />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ShowImage;
