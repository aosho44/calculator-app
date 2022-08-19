import './Calculator.css';

function Calculator() {
	return (
		<div id="container">
			<div id="calculatorBody">
				<div>
					<input type="number" id="calcScreen" />
				</div>
				<div id="calculatorBottom">
					<div id="functionDiv">
						<button className="funcButton">+</button>
						<button className="funcButton">-</button>
						<button className="funcButton">x</button>
						<button className="funcButton">÷</button>
					</div>
					<div id="numDiv">
						<div id="numSplitDiv">
							<button className="numberButton">7</button>
							<button className="numberButton">4</button>
							<button className="numberButton">1</button>
							<button className="numberButton">0</button>
						</div>
						<div id="numSplitDiv">
							<button className="numberButton">8</button>
							<button className="numberButton">5</button>
							<button className="numberButton">2</button>
							<button className="numberButton">.</button>
						</div>
						<div id="numSplitDiv">
							<button className="numberButton">9</button>
							<button className="numberButton">6</button>
							<button className="numberButton">3</button>
							<button className="numberButton">AC</button>
						</div>
						<button className="equalsButton">=</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export { Calculator };
