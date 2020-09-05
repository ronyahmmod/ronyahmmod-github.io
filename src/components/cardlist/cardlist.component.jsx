import React, { useState } from 'react';
import './cardlist.styles.css';

import Card from '../card/card.component';

const CardList = (props) => {
	const [ value, setValue ] = useState('');
	const handleChange = (e) => {
		setValue(e.target.value.toLowerCase());
	};
	const filterMonosters = props.monosters.filter((monoster) => monoster.name.toLowerCase().includes(value));
	const monosters = filterMonosters.map((monoster) => <Card key={monoster.id} monoster={monoster} />);
	return (
		<div className="CardList">
			<div className="input-container">
				<label for="name">Enter monoster Name</label>
				<input type="text" name="name" id="name" value={value} onChange={handleChange} />
			</div>

			<div class="list">{monosters}</div>
		</div>
	);
};

export default CardList;
