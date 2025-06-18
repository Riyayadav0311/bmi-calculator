const msg=document.querySelector("#msg");
const resultBtn=document.querySelector("#result");


const calBmi=()=>{
    const height=parseFloat(document.getElementById("input1").value);
    const weight=parseFloat(document.getElementById("input2").value);
   
   if(height== null || height<=0 || weight == null || weight<=0){
     msg.innerText="Your height and weight must be positive integer.";

   }
   else{
     let heightM = height/100;
    let bmi=weight/(heightM*heightM);
    bmi = Number(bmi.toFixed(2));
    result(bmi);
   }
 
};
const result=(bmi)=>{

    if(bmi <18.5){
        msg.innerText=`BMI is ${bmi} You are Underweight `;
      
    }else if(bmi <25){
        msg.innerText=`BMI is ${bmi} Your body is fine!`;
    }else if(bmi <30){
        msg.innerText=`BMI is ${bmi} You are Overweight`;
    }else{
        msg.innerText=`BMI is ${bmi}You are Obese `;
    }
};

resultBtn.addEventListener("click",() =>{
  calBmi();

});
     