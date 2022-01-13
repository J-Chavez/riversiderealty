window.addEventListener('scroll', function(){
    const logoImage = document.querySelector('.logo img');
    const mainNav = document.getElementById('mainNav');
    if (window.pageYOffset > 0){
        logoImage.style.height ='54px';
    }
    else{
        logoImage.style.height ='84px';
    }
});
function quickmaths() {
    var amount = document.mortgagedata.amount.value;
    var interest = document.mortgagedata.interest.value / 100 / 12;
    var payment = document.mortgagedata.years.value * 12;
    var x = Math.pow(1 + interest, payment);
    var month = (amount * x * interest) / (x - 1);

    if (!isNaN(month) &&
        (month != Number.POSITIVE_INFINITY) &&
        (month != Number.NEGATIVE_INFINITY)) {
        document.mortgagedata.payment.value = '$'+ round(month).toFixed(2);
            round((month * payment) - amount);
    }
    else {
        document.mortgagedata.payment.value = '';
    }
}
function round(x) {
    return Math.round(x * 100) / 100;
}
      
function pageRedirect(){
     setTimeout(function(){
            window.location.href = 'index.html';
         }, 5000);
        }