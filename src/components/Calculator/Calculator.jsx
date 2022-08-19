import './Calculator.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

function Calculator() {
	const [number, setNumber] = useState('');

	const changeHandler = (event) => {
		setNumber(event.target.value);
	};

	const clickHandler = (event) => {
		setNumber(event.target.value);
	};

	return (
		<div id="container">
			<div id="calculatorBody">
				<div>
					<input
						type="number"
						id="calcScreen"
						onChange={changeHandler}
						value={number}
					/>
				</div>
				<div id="calculatorBottom">
					<div id="functionDiv">
						<button className="funcButton" onClick={clickHandler}>
							+
						</button>
						<button className="funcButton" onClick={clickHandler}>
							-
						</button>
						<button className="funcButton" onClick={clickHandler}>
							x
						</button>
						<button className="funcButton" onClick={clickHandler}>
							÷
						</button>
					</div>
					<div id="numDiv">
						<div id="numSplitDiv">
							<button className="numberButton" value={7} onClick={clickHandler}>
								7
							</button>
							<button className="numberButton" value={4} onClick={clickHandler}>
								4
							</button>
							<button className="numberButton" value={1} onClick={clickHandler}>
								1
							</button>
							<button className="numberButton" value={0} onClick={clickHandler}>
								0
							</button>
						</div>
						<div id="numSplitDiv">
							<button className="numberButton" value={8} onClick={clickHandler}>
								8
							</button>
							<button className="numberButton" value={5} onClick={clickHandler}>
								5
							</button>
							<button className="numberButton" value={2} onClick={clickHandler}>
								2
							</button>
							<button
								className="numberButton"
								value={'.'}
								onClick={clickHandler}
							>
								.
							</button>
						</div>
						<div id="numSplitDiv">
							<button className="numberButton" value={9} onClick={clickHandler}>
								9
							</button>
							<button className="numberButton" value={6} onClick={clickHandler}>
								6
							</button>
							<button className="numberButton" value={3} onClick={clickHandler}>
								3
							</button>
							<button
								className="numberButton"
								value={''}
								onClick={clickHandler}
							>
								AC
							</button>
						</div>
						<button className="equalsButton" onClick={clickHandler}>
							=
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

Calculator.prototype = {
	clickHandler: PropTypes.number.isRequired,
	changeHandler: PropTypes.number.isRequired,
};

export { Calculator };
