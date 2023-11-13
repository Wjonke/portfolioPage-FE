import React from 'react';
import styled from 'styled-components';

const SkillCard = (props) => {
	//   console.log(props.skill);
	return (
		<SkillStyle
			className='card-image small'
			style={
				{
					// width: '100%',
					// height: 'auto',
					// display: 'flex',
					// flexDirection: 'row',
					// justifyContent: 'center',
					// alignItems: 'center',
					// border: '1px solid red',
				}
			}
		>
			<div
				className='card-image'
				// style={{
				// 	maxWidth: '95%',
				// 	maxHeight: '95%',
				// 	display: 'block',
				// 	justifyContent: 'center',
				// 	// border: '1px solid blue',
				// }}
			>
				<img
					src={props.skill.imgUrl}
					alt='Skill img'
					className='responsive-img'
					style={{
						width: '75px',
						height: '75px',
						// display: 'flex',
						// flexDirection: 'column',
						// justifyContent: 'center',
						// alignItems: 'center',
						// border: '1px solid orange',
					}}
				/>
			</div>
			<div className='card-content center'>
				<FontStyle>{props.skill.name}</FontStyle>
			</div>
		</SkillStyle>
	);
};

const SkillStyle = styled.div`
	justify-content:space-around
	/* padding: 3%; */
	/* max-height: 200px; */

	&:hover {
		color: dodgerblue;
		transition: 0.4s;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 1);
	}
`;

const FontStyle = styled.p`
	 {
		font-family: 'Ubuntu';
	}
`;

export default SkillCard;
