function checkAge() {
    const ageField = document.getElementById("age").value
    const err = document.getElementById("error");
    const number = parseInt(ageField);
    try {
    if (isNaN(number)) {
        throw "Please enter a number";
        
    }else if (number<18) {
        throw "bacha kaccha not allowed";
    } else if (number > 30) {
     throw "murobbi ra aikhan aisen na ";   
    }
    } catch (error) {
        err.innerHTML='ERROR: '+error;
    }
    finally {
         console.log("All done inside try catch");
    }
    console.log(111);

}