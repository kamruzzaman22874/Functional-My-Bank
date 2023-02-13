document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawField = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');


    const newWithdrawTotal = previousWithdrawTotal + newWithdrawField;
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawField;
    setTextElementValueById('balance-total', newBalanceTotal);
})