import React from 'react';
import Overview from './Overview';
import styled from 'styled-components';

const OverviewContainer = () => {
	return (
		<div>
			<div>
				<div className='center'>
					<H4>
						JavaScript Full-stack Developer | Technical Project
						Manager | Micro-farming Enthusiast
					</H4>
				</div>
			</div>
			<Overview />
		</div>
	);
};
const H4 = styled.h4`
	font-family: 'Ubuntu', sans-serif;
	text-align: center;
	/* border: 1px solid red; */
`;
export default OverviewContainer;
