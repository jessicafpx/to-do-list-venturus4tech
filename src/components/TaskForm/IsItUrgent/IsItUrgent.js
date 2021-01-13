import React, { useState } from 'react';

import styled from 'styled-components';
import uniqid from 'uniqid';

export const IsItUrgent = () => {
	const [urgencyScale, setUrgencyScale] = useState([
		{
			urgency: 'low',
			color: '#71a1ff',
			selected: true,
		},
		{
			urgency: 'average',
			color: '#f8bd26',
			selected: false,
		},
		{
			urgency: 'high',
			color: '#ff7171',
			selected: false
		}
	]);

	const FormItem = styled.div`
        display: flex;
        flex-direction: column;
        width: 25%;
        padding-left: 1rem;
    `;

	const IsITUrgentLabel = styled.div`
        font-size: 30px;
    `;

	const IsItUrgentSelectionArea = styled.div`
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 5rem;
		background: #fff;
		box-shadow: 5px 5px 10px #a9c4da;
		border-radius: 5px;
	`;

	const onClickToSetUrgency = (urgency) => {
		const urgencyScaleWithNewSelection = urgencyScale.map(x => {
			if (x.urgency === urgency) {
				return { ...x, selected: true }
			}

			return { ...x, selected: false }
		});

		setUrgencyScale(urgencyScaleWithNewSelection);
	}

	const generateUrgencyOptions = () => {
		return urgencyScale.map(urgency => {
			if (urgency.selected) {
				return <div
					key={uniqid()}
					style={{
						backgroundColor: urgency.color,
						width: 'calc(2.5rem + 5px)',
						height: 'calc(2.5rem + 5px)',
						border: '5px solid #5bf326',
						borderRadius: '3px',
						cursor: 'pointer',
					}}
				/>
			}

			return <div
				key={uniqid()}
				style={{
					backgroundColor: urgency.color,
					width: '2.5rem',
					height: '2.5rem',
					cursor: 'pointer',
				}} onClick={() => onClickToSetUrgency(urgency.urgency)} />
		})
	}

	return (
		<FormItem>
			<IsITUrgentLabel>Is It Urgent?</IsITUrgentLabel>
			<IsItUrgentSelectionArea>
				{generateUrgencyOptions()}
			</IsItUrgentSelectionArea>
		</FormItem>
	);
}