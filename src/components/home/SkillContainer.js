import React from 'react';
import SkillCard from './SkillCard';
import Zoom from 'react-reveal/Zoom';
import styled from 'styled-components';

const SkillContainer = (props) => {
	return (
		<div
			id='skills'
			// className='center-align'
		>
			<div
				className=' col s4 m3 l2 xl2'
				style={{
					width: '100%',
					minHeight: '200px',
					// display: 'block',
					// justifyContent: 'center',
					// border: '1px solid red',
				}}
			>
				<H5>Skills</H5>
				{/* map through skills and put out a card for each */}

				{props.skills.map((skill) => {
					return (
						<div className=' col s4 m3 l2 xl2'>
							<SkillCard skill={skill} key={skill.id} />
						</div>
					);
				})}
			</div>
		</div>
	);
};
const H5 = styled.h5`
	font-family: 'Ubuntu';
`;

// const Div = styled.div`
// 	/* margin: auto; */
// 	justify-content: space-around;
// 	border: 1px solid red;
// `;

export default SkillContainer;
