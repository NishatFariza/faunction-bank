/* function doubleIt(num){
    const result =num*2;
    return result;
}

const first =doubleIt(5);
const first =doubleIt(7); */

function getInputValue(){
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText =depositInput.value;
    const depositAmount =parseFloat(depositAmountText);

      //clear input field
      depositInput.value='';
    return depositAmount;

  
}



document.getElementById('deposit-button').addEventListener('click', function(){
    /* const depositInput = document.getElementById('deposit-input');
    const depositAmountText =depositInput.value;
    const depositAmount =parseFloat(depositAmountText); */
    // console.log(depositAmount);
    const depositAmount =getInputValue();

    //get currtent deposit
    const depositTotal =document.getElementById('deposit-total');

    const depositTotalText =depositTotal.innerText;
    depositTotal.innerText =depositAmount;
    const perviusDepositTotalAmount =parseFloat(depositTotalText);

    depositTotal.innerText =perviusDepositTotalAmount + depositAmount;
    // console.log(depositTotalText);


    //update balance
    const balanceTotal =document.getElementById('balance-total');
    const balanceTotalText =balanceTotal.innerText;
    const priviousBalanceTotal =parseFloat(balanceTotalText);
    balanceTotal.innerText =priviousBalanceTotal + depositAmount;

    
});


//handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput =document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount =parseFloat(withdrawAmountText);
    console.log(withdrawAmount);


    //get current withdraw
    const withdrawTotal =document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    withdrawTotal.innerText =withdrawAmount;

    const priviousWithdrawTotalAmount = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = priviousWithdrawTotalAmount +withdrawAmount;


    //update balance after withdraw 
    const balanceTotal =document.getElementById('balance-total');
    const balanceTotalText =balanceTotal.innerText;
    const priviousBalanceTotal =parseFloat(balanceTotalText);
    balanceTotal.innerText =priviousBalanceTotal - withdrawAmount;




  //clear withdraw input field
  withdrawInput.value ='';
})