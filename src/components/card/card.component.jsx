import React from 'react';
import './card.styles.css';

const Card = (props) => {
	const { id, name, email } = props.monoster;
	return (
		<div className="Card">
			<img src={`https://robohash.org/${id}.png`} alt={id} />
			<h4>{name}</h4>
			<h5>{email}</h5>
		</div>
	);
};

export default Card;
