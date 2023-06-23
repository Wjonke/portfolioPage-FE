import React, { useState, useEffect } from 'react';
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
				<div className=' col s12 l6 '>
					{/* pass skills state down to child */}
					<SkillContainer skills={skills} />
				</div>
				<div className=' col s12 l6'>
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
