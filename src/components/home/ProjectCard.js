import React from 'react';
import styled from 'styled-components';

const Project = (props) => {
	return (
		<ProjectStyle>
			<Card className='card activator'>
				{/* <div className='card-image '>
					<Img
						className='activator'
						src={props.project.img_url}
						alt=''
					/>
				</div> */}
				<div className='card-content  '>
					<span className='left-align'>
						<h5>{props.project.name}</h5>

						<Strong>Description: </Strong>
						<p>{props.project.description}</p>

						<br />
						<span>
							<StyledLink
								className='card'
								target='_blank'
								rel='noopener noreferrer'
								href={props.project.deployed_url}
							>
								Click to view site
							</StyledLink>
							<StyledLink
								className='card'
								target='_blank'
								rel='noopener noreferrer'
								href={props.project.code_url}
							>
								Click to view code
							</StyledLink>
						</span>
						<br />
						<StyledButton className=' activator  '>
							Click here for more info
						</StyledButton>
					</span>
				</div>

				<div className='card-reveal col s12 '>
					<span className='card-title  '>
						<i className='material-icons right'>close</i>
					</span>

					<span>
						<Div className='left-align'>
							<span>
								<Strong>My Role: </Strong>
								{props.project.role}
							</span>
							<span>
								<Strong>Tech Stack: </Strong>
								{props.project.techStack}
							</span>
						</Div>
					</span>
				</div>
			</Card>
		</ProjectStyle>
	);
};

const ProjectStyle = styled.div`
	/* padding: 3%; */
	&:hover {
		/* color: dodgerblue; */
		transition: 0.4s;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 1);
		font-family: 'Roboto', sans-serif;
	}
`;

const Strong = styled.p`
	font-weight: 900;
`;

const Card = styled.div`
	min-height: 35vh;
`;

// const Img = styled.img`
// 	padding: 4px;
// 	border-bottom: solid 1px lightGray;
// `;

const Div = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: space-evenly;
	font-family: 'Roboto', sans-serif;
`;

const StyledButton = styled.button`
	color: black;
	padding: 2%;
	border: 1px solid lightGray;
	margin-top: 1em;

	&:hover {
		border: 1px solid dodgerBlue;
		color: dodgerBlue;
		transition: 0.4s;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 1);
	}
`;

const StyledLink = styled.a`
	color: black;
	text-decoration: none;
	margin: 2%;
	padding: 2%;
	border: 1px solid lightGray;
	white-space: nowrap;

	&:hover {
		border: 1px solid dodgerBlue;
		color: dodgerBlue;
		transition: 0.4s;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 1);
	}
`;
export default Project;
