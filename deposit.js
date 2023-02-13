document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositInputValue = setDepositInput('deposit-field');
    const depositPreviousElement = getDepositTotalElement('deposit-total');
    const depositTotalValue = depositPreviousElement + depositInputValue;

    setDepositTotal('deposit-total', depositTotalValue);
    
    const balanceTotal = totalBalanceById('balance-total');
    const newBalanceTotal = balanceTotal + depositInputValue;
    setDepositTotal('balance-total', newBalanceTotal);
})





























// document.getElementById('btn-deposit').addEventListener('click', function () {
//     const newDepositAmount = getInputFieldValueById('deposit-field');

//     const previousDepositTotal = getTextElementValueById('deposit-total');

//     const newDepositTotal = previousDepositTotal + newDepositAmount;

//     setTextElementValueById('deposit-total', newDepositTotal);
//     const previousBalanceTotal = getTextElementValueById('balance-total');
//     const newBalanceTotal = previousBalanceTotal + newDepositAmount;

//     setTextElementValueById('balance-total', newBalanceTotal);

// })


