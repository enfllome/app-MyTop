import React, { useState } from 'react';
import { Button, Htag, P, Rating, Tag } from '../components';
import { withLayout } from '../layout/Layout';

function Home(): JSX.Element {

	const [rating, setRating] = useState<number>(4);
	
	return (
		<>
			<Htag tag='h1'>Zagolovok</Htag>
			<Button appearance='primary' arrow='right'>Кнопка</Button>
			<Button appearance='ghost' arrow='down'>Кнопка</Button>
			<P size='l'>Большой заголовок Большой заголовок Большой заголовок Большой заголовок</P>
			<P>Средний заголовок Средний заголовок Средний заголовок Средний заголовок</P>
			<P size='s'>Маленький заголовок Маленький заголовок Маленький заголовок Маленький заголовок</P>
			<Tag size='s'>Ghost</Tag>
			<Tag size='m' color='red'>Red</Tag>
			<Tag size='m' color='green'>green</Tag>
			<Tag color='primary'>primary</Tag>
			<Rating rating={rating} isEditable setRating={setRating}></Rating>
		</>
	);
}


export default withLayout(Home);