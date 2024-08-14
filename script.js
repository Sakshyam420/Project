const form = document.querySelector("form");
const results=document.querySelector("#results");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector
        ("#height").value);
        const weight = parseInt(document.querySelector
            ("#weight").value);
            if(!height || height <=0 || isNaN(height)){
                results.textContent = "Please provide a valid height"
            }
            else  if(!weight || weight <=0 || isNaN(weight)){
                results.textContent = "Please provide a valid weight"
            }
            else{
                const bmi =(weight/((height/100) **2));
                results.innerHTML= `<span> Your BMI is: ${bmi}`;
            }
})