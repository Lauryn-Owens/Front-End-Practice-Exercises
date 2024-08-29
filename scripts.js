let selectedType = null;
let resultsShown = false;
let showEmptyFieldsMessage = false;

function grabElements(){
    //inputs
    const mortgageAmount = document.querySelector('#calculator__amount');
    const mortgageTerm = document.querySelector('#term');
    const mortgageInterest = document.querySelector('#interest');
    const repaymentType = document.querySelectorAll('input[name="type"]');
    const calculateButton = document.querySelector('#calculate_button');
    const clearAll = document.querySelector('.calculator__clear');
    const allInputs = document.getElementsByTagName('input');

    //number text
    const repaymentMonthly = document.querySelector('#repayment_monthly');
    const repaymentTotal = document.querySelector('#repayment_total');

    //calculator form not submitted
    const calculatorUnsubmitted = document.querySelector('.calculator__right-unsubmitted');
   
    //calculator right repayment calculations
    const calculatorCalculation = document.querySelector('.calculate__right-hidden');
   
   //elements that change state if input fields are empty on submit
    //.calculator__error, .empty
    const showEmptyFieldsMessage = document.querySelectorAll('.calculator__error');
    const emptyInputSpan = document.querySelectorAll('.empty');
    
    return{
        mortgageAmount:mortgageAmount,
        mortgageTerm:mortgageTerm,
        mortgageInterest:mortgageInterest,
        repaymentType:repaymentType,
        calculateButton:calculateButton,
        clearAll:clearAll,
        allInputs:allInputs,
        repaymentMonthly:repaymentMonthly,
        repaymentTotal:repaymentTotal,
        calculatorUnsubmitted:calculatorUnsubmitted,
        calculatorCalculation:calculatorCalculation,
        showEmptyFieldsMessage:showEmptyFieldsMessage,
        emptyInputSpan:emptyInputSpan
    };
}
function displayEmptyMessage(){
    grabElements().showEmptyFieldsMessage.forEach((currMessage) => {
        const computedStyle = window.getComputedStyle(currMessage);

        if(computedStyle.display === 'block'){
            currMessage.style.display = 'none';
            return;
        }
       else{
        if(computedStyle.display === 'none'){
            currMessage.style.display = 'block';
            return;
        }
       }
     })
}
function calculateRepaymentMortgage(loanAmount, annualInterestRate, loanTermYears) {
    let monthlyInterestRate = annualInterestRate / 100 / 12;
    let numberOfPayments = loanTermYears * 12;

    let monthlyPayment = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
                         (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    return monthlyPayment;
}
function calculateInterestOnlyMortgage(loanAmount, annualInterestRate) {
    let monthlyInterestRate = annualInterestRate / 100 / 12;

    let monthlyPayment = loanAmount * monthlyInterestRate;

    return monthlyPayment;
}
function getType(){
    selectedType = this.value;
}
function calculateRepayment(e){
    e.preventDefault();
    let months = grabElements().mortgageTerm.value * 12;
   if(grabElements().mortgageAmount.value &&
    grabElements().mortgageTerm.value &&
    grabElements().mortgageInterest.value &&
    (selectedType === 'repayment') 
){
    let repaymentMonthlyPayment = calculateRepaymentMortgage(parseFloat(grabElements().mortgageAmount.value), 
    parseFloat(grabElements().mortgageInterest.value), parseFloat(grabElements().mortgageTerm.value));
    grabElements().repaymentMonthly.textContent = repaymentMonthlyPayment.toFixed(2);
    grabElements().repaymentTotal.textContent = (repaymentMonthlyPayment * months).toFixed(2);
    
    grabElements().calculatorUnsubmitted.style.display = 'none';
    grabElements().calculatorCalculation.style.display = 'block';

    displayEmptyMessage();
    /*
    grabElements().showEmptyFieldsMessage.forEach((currMessage) => {
        const computedStyle = window.getComputedStyle(currMessage);

        if(computedStyle.display === 'block'){
            currMessage.style.display = 'none';
        }
     })
    */
     grabElements().emptyInputSpan.forEach((currInputSpan) => {
        currInputSpan.style.backgroundColor = 'lightblue';
        currInputSpan.style.color = 'black';
     })
    
   }
   else if(grabElements().mortgageAmount.value &&
   grabElements().mortgageTerm.value &&
   grabElements().mortgageInterest.value &&
   (selectedType === 'interest_only') ){
    let interestOnlyMonthlyPayment = calculateInterestOnlyMortgage(parseFloat(grabElements().mortgageAmount.value), 
    parseFloat(grabElements().mortgageInterest.value));
    grabElements().repaymentMonthly.textContent = interestOnlyMonthlyPayment.toFixed(2);
    grabElements().repaymentTotal.textContent = (interestOnlyMonthlyPayment * months).toFixed(2);

    grabElements().calculatorUnsubmitted.style.display = 'none';
    grabElements().calculatorCalculation.style.display = 'block';

    grabElements().showEmptyFieldsMessage.forEach((currMessage) => {
        const computedStyle = window.getComputedStyle(currMessage);

        if(computedStyle.display === 'block'){
            currMessage.style.display = 'none';
        }
     })

     grabElements().emptyInputSpan.forEach((currInputSpan) => {
        currInputSpan.style.backgroundColor = 'lightblue';
        currInputSpan.style.color = 'black';
     })
   }
   else{
         grabElements().showEmptyFieldsMessage.forEach((currMessage) => {
            const computedStyle = window.getComputedStyle(currMessage);

            if(computedStyle.display === 'none'){
                currMessage.style.display = 'block';
            }
         })
         grabElements().emptyInputSpan.forEach((currInputSpan) => {
            currInputSpan.style.backgroundColor = 'red';
            currInputSpan.style.color = 'white';
         })
   }
}
function clearAll(){
    Array.from(grabElements().allInputs).forEach((curr) => {
        if(curr.type === 'radio'){
                curr.checked = false;
        }
        else{
            curr.value = '';
        }
        grabElements().calculatorUnsubmitted.style.display = 'block';
        grabElements().calculatorCalculation.style.display = 'none';
    })
}

window.onload = grabElements();
grabElements().calculateButton.addEventListener('click', calculateRepayment);
grabElements().repaymentType.forEach((currType) => {
    currType.addEventListener('change', getType);
})
grabElements().clearAll.addEventListener('click', clearAll)