import React from "react";
import { useParams } from "react-router-dom";
import ShowTheImage from "../components/showTheImage/showTheImage";

const ShowImage = () => {
	const { id } = useParams();

	return (
		<div>
		<ShowTheImage id={id} />
		</div>
	);
};

export default ShowImage;
