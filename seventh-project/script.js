let calculatorButtons = [
	{
		name: "delete",
		symbol: "⌫",
		formula: false,
		type: "key",
	},
	{
		name: "clear",
		symbol: "C",
		formula: false,
		type: "key",
	},
	{
		name: "percent",
		symbol: "%",
		formula: "/100",
		type: "number",
	},
	{
		name: "division",
		symbol: "÷",
		formula: "/",
		type: "operator",
	},
	{
		name: "7",
		symbol: 7,
		formula: 7,
		type: "number",
	},
	{
		name: "8",
		symbol: 8,
		formula: 8,
		type: "number",
	},
	{
		name: "9",
		symbol: 9,
		formula: 9,
		type: "number",
	},
	{
		name: "multiplication",
		symbol: "×",
		formula: "*",
		type: "operator",
	},
	{
		name: "4",
		symbol: 4,
		formula: 4,
		type: "number",
	},
	{
		name: "5",
		symbol: 5,
		formula: 5,
		type: "number",
	},
	{
		name: "6",
		symbol: 6,
		formula: 6,
		type: "number",
	},
	{
		name: "addition",
		symbol: "+",
		formula: "+",
		type: "operator",
	},
	,
	{
		name: "1",
		symbol: 1,
		formula: 1,
		type: "number",
	},
	{
		name: "2",
		symbol: 2,
		formula: 2,
		type: "number",
	},
	{
		name: "3",
		symbol: 3,
		formula: 3,
		type: "number",
	},
	{
		name: "subtraction",
		symbol: "–",
		formula: "-",
		type: "operator",
	},
	{
		name: "0",
		symbol: 0,
		formula: 0,
		type: "number",
	},
	{
		name: "comma",
		symbol: ".",
		formula: ".",
		type: "number",
	},
	{
		name: "calculate",
		symbol: "=",
		formula: "=",
		type: "calculate",
	},
];

const inputElement = document.querySelector(".input");
const outputResultElement = document.querySelector(".result .value");
const outputOperationElement = document.querySelector(".operation .value");

function createBtns(){
    const btnsPerRow = 4;
	let addedBtns = 0;

    calculatorButtons.forEach((button) => {
        if (addedBtns % btnsPerRow == 0) {
            inputElement.innerHTML += `<div class="row"></div>`;
        }
        const row = document.querySelector(".row:last-child");
        row.innerHTML += `<button id="${button.name}">${button.symbol}</button>`;
        addedBtns++;
    })    
}
createBtns();

inputElement.addEventListener("click", (event) => {
	const target_btn = event.target;

	calculatorButtons.forEach((button) => {
		if (button.name == target_btn.id) {
			calculator(button);
		}
	});
});

let data = {
	operation: [],
	result: [],
};


function calculator(button){
	lastInputType = '';
	if (button.type == 'operator') {
		if (data.operation.length == 0 && data.result.length == 0) {
			return;
		}
		else if(lastInputType !== 'operator'){
			data.operation.push(button.symbol);
			data.result.push(button.formula);
			lastInputType = 'operator';
		}
	}
	else if(button.type == 'number'){
		data.operation.push(button.symbol);
		data.result.push(button.formula);
	}
	else if(button.type == 'key'){
		if(button.name == 'clear'){
			data.operation = [];
			data.result = [];
			updateOutputResult(0);
		}
		else if(button.name == 'delete'){
			data.operation.pop();
			data.result.pop();
		}
	}
	else if(button.type == 'calculate'){
		let join_result = data.result.join("");
		let result;

		try {
			result = eval(join_result);
		} catch (error) {
			if (error instanceof SyntaxError) {
				result = "Syntax Error!";
				updateOutputResult(result);
				return;
			}
		}
		result = formatResult(result);
		updateOutputResult(result);
		data.operation = [];
		data.result = [];
		data.operation.push(result);
		data.result.push(result);
		return;
	}
	lastInputType = button.type;
	updateOutputOperation(data.operation.join(""));
}

function updateOutputOperation(operation){
	outputOperationElement.innerHTML = operation;
}

function updateOutputResult(operation){
	outputResultElement.innerHTML = operation;
}

function formatResult(result){
	const maxOutputNumberLength = 10;
	const outputPrecision = 5;

	if (digitCounter(result) > maxOutputNumberLength) {
		if (isFloat(result)) {
			const resultInt = parseInt(result);	
			const resultIntLength = digitCounter(resultInt);

			if (resultIntLength > maxOutputNumberLength) {
				return result.toPrecision(outputPrecision);
			} else {
				const numberOfDigitsAfterPoint =
					maxOutputNumberLength - resultIntLength;
				return result.toFixed(numberOfDigitsAfterPoint);
			}
		}
		else{
			return result.toPrecision(outputPrecision);
		}
	}
	else{
		return result;
	}
}

function digitCounter(number){
	return number.toString().length;
}

function isFloat(result){
	return result % 1 != 0;
}