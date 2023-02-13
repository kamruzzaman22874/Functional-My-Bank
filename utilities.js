function setDepositInput(depositId) {
    const depositField = document.getElementById(depositId);
    const depositFieldValueString = depositField.value;
    const depositFieldValue = parseFloat(depositFieldValueString);
    depositField.value =''
    return depositFieldValue;
}

function getDepositTotalElement(setElement) {
    const depositTotal = document.getElementById(setElement);
    const depositTotalValueString = depositTotal.innerText;
    const depositTotalValue = parseFloat(depositTotalValueString)
    return depositTotalValue;
}

function setDepositTotal(setTotal, newValue){
    const depositTotal = document.getElementById(setTotal);
    depositTotal.innerText = newValue;

}

function totalBalanceById(balanceId) {
    const balanceTotalElement = document.getElementById(balanceId);
    const balanceTotalValueString = balanceTotalElement.innerText;
    const balanceTotalValue = parseFloat(balanceTotalValueString);
    return balanceTotalValue;
}






























// function getInputFieldValueById(inputFieldId) {
// 	const inputField = document.getElementById(inputFieldId);
// 	const inputFieldValueString = inputField.value;
// 	const inputFieldValue = parseFloat(inputFieldValueString);
// 	inputField.value = '';
// 	return inputFieldValue;
// }

// function getTextElementValueById(elementId) {
// 	const textElement = document.getElementById(elementId);
// 	const textElementValueString = textElement.innerText;
// 	const textElementValue = parseFloat(textElementValueString);
// 	return textElementValue;
// }

// function setTextElementValueById(elementId, newValue) {
// 	const textElement = document.getElementById(elementId);
// 	textElement.innerText = newValue;
// }
