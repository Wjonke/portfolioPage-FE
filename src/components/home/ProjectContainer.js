import React from 'react';
import ProjectCard from './ProjectCard';
import Zoom from 'react-reveal/Zoom';
import styled from 'styled-components';

const ProjectContainer = (props) => {
	// console.log(props.projects);
	return (
		<div id='projects' className='center-align'>
			<Zoom>
				<H5>Projects</H5>
				{/* map through skills and put out a card for each */}
				{props.projects.map((project) => {
					return (
						<div className=' col s12 m8 l6 xl3 ' key={project.id}>
							<ProjectCard project={project} />
						</div>
					);
				})}
			</Zoom>
		</div>
	);
};
const H5 = styled.h5`
	font-family: 'Ubuntu', sans-serif;
`;

export default ProjectContainer;
