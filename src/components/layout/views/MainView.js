import React from 'react';
import styled from 'styled-components';

import OverviewContainer from '../../home/OverviewContainer';
import ProjectContainer from '../../home/ProjectContainer';
import SkillContainer from '../../home/SkillContainer';

import { skills } from '../../../data/skills';
import { projects } from '../../../data/projects';

const MainView = (props) => {
	return (
		<Div className='row'>
			<span>
				<div className=' col s12 '>
					<OverviewContainer />
					<div className='divider'></div>
				</div>
				<div
					className=' col s12 '
					style={{
						display: 'flex',
						flexDirection: 'row',
						// width: '100%',
						// margin: '1em',
						justifyContent: 'center',
						alignItems: 'center',
						border: '1px solid green',
					}}
				>
					{/* pass skills state down to child */}
					<SkillContainer skills={skills} />
				</div>
				<div className=' col s12 '>
					{/* pass projects state down to child and spread in props*/}
					<ProjectContainer projects={projects} />
				</div>
			</span>
		</Div>
	);
};

const Div = styled.div`
	background-color: #f5f5f5;
`;

export default MainView;
