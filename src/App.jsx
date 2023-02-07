import { useState, useEffect } from 'react'
import './App.css'

const API_URL = 'https://api.adviceslip.com/advice'

function App() {
	const [data, setData] = useState({})

	async function getAdvise() {
		let response

		try {
			response = await fetch(API_URL)
		} catch (error) {
			console.error('There was an error', error)
		}
		if (response?.ok) {
			const json = await response.json()
			setData(json.slip)
		} else {
			console.error(`HTTP Response Code: ${response?.status}`)
		}
	}

	useEffect(() => {
		getAdvise()
	}, [data.id])

	if (!data?.id)
		return (
			<main className="card">
				<h1 className="card__title">Loading...</h1>
			</main>
		)

	return (
		<>
			<main className="card">
				<p className="card__title">Advice #{data.id}</p>

				<h1 className="card__description">"{data.advice}"</h1>
				<img
					className="card__divider"
					src="/fm_advise_generator_app/pattern-divider-mobile.svg"
					alt="Icon divider"
				/>
				<button onClick={getAdvise} className="card__dice-button">
					<img
						className="card__dice-container__image"
						src="/fm_advise_generator_app/icon-dice.svg"
						alt="Dice icon"
					/>
				</button>
			</main>

			<footer className="attribution">
				Challenge by{' '}
				<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
					Frontend Mentor
				</a>
				. Coded by{' '}
				<a href="https://github.com/NathanMartinez">Nathan Martinez</a>.
			</footer>
		</>
	)
}

export default App
