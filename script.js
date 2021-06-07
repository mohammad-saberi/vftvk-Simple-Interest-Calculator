function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}

function compute()
{
    var checkprin = document.getElementById("principal").value;
        if(checkprin <= 0){
            alert("Please enter a positive number");
            document.getElementById("principal").focus();
            return false;
        }
    else {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var amount = (principal*years*rate / 100);
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>At an interest rate of <mark>"+rate+"%</mark>.\<br\>You will receive an amount of <mark>"+amount+"</mark>,\<br\>in the year <mark>"+year+"</mark>.\<br\>";
    }
}    
