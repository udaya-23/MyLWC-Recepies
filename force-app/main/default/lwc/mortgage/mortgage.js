const getTermOptions = () => {
    return[
        {label: '10 Yesrs', value: 10},
        {label: '15 Yesrs', value: 15},
        {label: '20 Years', value: 20},
        {label: '25 Years', value: 25},
        {label: '30 Years', value: 30}
    ];
};

const caliculateMonthlyPayment = (principle, rate, years) => {
    if(principle && rate && years && rate > 0){
       const monthlyRate = rate / 100 / 12; 
       const monthlyMortgage = (principle * monthlyRate) /
                               (1 - Math.pow(1 / (1 + monthlyRate), years * 12));
       return monthlyMortgage;
    } 
    return 0;
};

export{getTermOptions, caliculateMonthlyPayment}