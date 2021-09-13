import React from 'react';
import { Button, Htag, P, Tag } from '../components';

export default function Home(): JSX.Element {
	return (
		<>
			<Htag tag='h1'>Текст</Htag>
			<Button appearance='primary' arrow='right'>Кнопка</Button>
			<Button appearance='ghost' arrow='down'>Кнопка</Button>
			<P size='l'>Большой заголовок Большой заголовок Большой заголовок Большой заголовок</P>
			<P>Средний заголовок Средний заголовок Средний заголовок Средний заголовок</P>
			<P size='s'>Маленький заголовок Маленький заголовок Маленький заголовок Маленький заголовок</P>
			<Tag size='s'>Ghost</Tag>
			<Tag size='m' color='red'>Red</Tag>
			<Tag size='m' color='green'>green</Tag>
			<Tag color='primary'>primary</Tag>
		</>
	);
}
