let selectedType = null;
let resultsShown = false;
let showEmptyFieldsMessage = false;

function grabElements(){
    // inputs
    const mortgageAmount = document.querySelector('#calculator__amount');
    const mortgageTerm = document.querySelector('#term');
    const mortgageInterest = document.querySelector('#interest');
    const repaymentType = document.querySelectorAll('input[name="type"]');
    const calculateButton = document.querySelector('#calculate_button');
    const clearAll = document.querySelector('.calculator__clear');
    const allInputs = document.getElementsByTagName('input');

    // number text
    const repaymentMonthly = document.querySelector('#repayment_monthly');
    const repaymentTotal = document.querySelector('#repayment_total');

    // calculator form not submitted
    const calculatorUnsubmitted = document.querySelector('.calculator__right-unsubmitted');
   
    // calculator right repayment calculations
    const calculatorCalculation = document.querySelector('.calculate__right-hidden');
   
    // elements that change state if input fields are empty on submit
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
    // calculate monthly interest rate
    let monthlyInterestRate = annualInterestRate / 100 / 12;

    // calculate total number of payments
    let numberOfPayments = loanTermYears * 12;

    // calculate monthly payment
    let monthlyPayment = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
                         (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    return monthlyPayment;
}

function calculateInterestOnlyMortgage(loanAmount, annualInterestRate) {
    // calculate monthly interest rate
    let monthlyInterestRate = annualInterestRate / 100 / 12;

    // calculate monthly payment for interest only mortgage
    let monthlyPayment = loanAmount * monthlyInterestRate;

    return monthlyPayment;
}

function getType(){
    // set the selected type based on user selection
    selectedType = this.value;
}

function calculateRepayment(e){
    // prevent the default form submission
    e.preventDefault();

    let months = grabElements().mortgageTerm.value * 12;

    // check if all input fields are filled and the repayment type is selected
    if(grabElements().mortgageAmount.value &&
       grabElements().mortgageTerm.value &&
       grabElements().mortgageInterest.value &&
       (selectedType === 'repayment')) {
        
        // calculate repayment mortgage monthly payment
        let repaymentMonthlyPayment = calculateRepaymentMortgage(parseFloat(grabElements().mortgageAmount.value), 
        parseFloat(grabElements().mortgageInterest.value), parseFloat(grabElements().mortgageTerm.value));

        // update the monthly and total repayment fields
        grabElements().repaymentMonthly.textContent = repaymentMonthlyPayment.toFixed(2);
        grabElements().repaymentTotal.textContent = (repaymentMonthlyPayment * months).toFixed(2);
        
        // hide the unsubmitted form and show the calculated results
        grabElements().calculatorUnsubmitted.style.display = 'none';
        grabElements().calculatorCalculation.style.display = 'block';

        // toggle display of empty fields message
        displayEmptyMessage();
        
        // update the appearance of empty input spans
        grabElements().emptyInputSpan.forEach((currInputSpan) => {
            currInputSpan.style.backgroundColor = 'lightblue';
            currInputSpan.style.color = 'black';
        });
    }
    else if(grabElements().mortgageAmount.value &&
            grabElements().mortgageTerm.value &&
            grabElements().mortgageInterest.value &&
            (selectedType === 'interest_only')) {
        
        // calculate interest only mortgage monthly payment
        let interestOnlyMonthlyPayment = calculateInterestOnlyMortgage(parseFloat(grabElements().mortgageAmount.value), 
        parseFloat(grabElements().mortgageInterest.value));

        // update the monthly and total repayment fields
        grabElements().repaymentMonthly.textContent = interestOnlyMonthlyPayment.toFixed(2);
        grabElements().repaymentTotal.textContent = (interestOnlyMonthlyPayment * months).toFixed(2);

        // hide the unsubmitted form and show the calculated results
        grabElements().calculatorUnsubmitted.style.display = 'none';
        grabElements().calculatorCalculation.style.display = 'block';

        // toggle display of empty fields message
        grabElements().showEmptyFieldsMessage.forEach((currMessage) => {
            const computedStyle = window.getComputedStyle(currMessage);

            if(computedStyle.display === 'block'){
                currMessage.style.display = 'none';
            }
        });

        // update the appearance of empty input spans
        grabElements().emptyInputSpan.forEach((currInputSpan) => {
            currInputSpan.style.backgroundColor = 'lightblue';
            currInputSpan.style.color = 'black';
        });
    }
    else{
        // show empty fields message and highlight the empty fields
        grabElements().showEmptyFieldsMessage.forEach((currMessage) => {
            const computedStyle = window.getComputedStyle(currMessage);

            if(computedStyle.display === 'none'){
                currMessage.style.display = 'block';
            }
        });
        grabElements().emptyInputSpan.forEach((currInputSpan) => {
            currInputSpan.style.backgroundColor = 'red';
            currInputSpan.style.color = 'white';
        });
    }
}

function clearAll(){
    // clear all input fields
    Array.from(grabElements().allInputs).forEach((curr) => {
        if(curr.type === 'radio'){
            curr.checked = false;
        }
        else{
            curr.value = '';
        }
        // reset the form display to the unsubmitted state
        grabElements().calculatorUnsubmitted.style.display = 'block';
        grabElements().calculatorCalculation.style.display = 'none';
    });
}

// initialize elements and event listeners on window load
window.onload = grabElements();
grabElements().calculateButton.addEventListener('click', calculateRepayment);
grabElements().repaymentType.forEach((currType) => {
    currType.addEventListener('change', getType);
});
grabElements().clearAll.addEventListener('click', clearAll);
