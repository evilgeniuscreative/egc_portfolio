import React from "react";

const showTheImage = (props) => {
	const { id } = props;
	return (
		<div>
			<div>ShowImage</div>
			<img src={`images/${id}.jpg`} alt={`Image ${id}`} />
		</div>
	);
};

export default showTheImage;
