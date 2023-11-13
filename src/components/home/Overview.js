import React from 'react';
import styled from 'styled-components';

const Overview = () => {
	return (
		<div
			className=' '
			style={{
				border: '1px solid red',
				display: 'flex',
				flexDirection: 'row',
				// width: '100%',
				// margin: '1em',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<P
				style={{
					maxWidth: '100%',
					paddingLeft: '4.5em',
					paddingRight: '4.5em',
					textAlign: 'justify',
					border: '1px solid blue',
				}}
			>
				I am a full-stack web developer with 4 years’ experience within
				the JavaScript/NodeJS framework. I have experience working with
				NodeJS with Express, ReactJS and vanilla HTML, CSS, and
				JavaScript, as well as AWS and Azure services. I am also an
				experienced Project Manager overseeing both digital and physical
				security projects. I enjoy breaking down complex needs into
				actionable tasks, while communicating with stakeholders along
				way, acting as a bridge between teams, to ensure their vision is
				realized, realistically and accurately. I also enjoy fishing,
				gardening, fermentation projects, and I have a real soft spot
				for rescue animals.
			</P>
		</div>
	);
};
const P = styled.p`
	font-family: 'Ubuntu', sans-serif;
	font-size: 1.25rem;
`;
// const P = styled.p`
//   font-family: "Roboto", sans-serif;
// `;
export default Overview;
