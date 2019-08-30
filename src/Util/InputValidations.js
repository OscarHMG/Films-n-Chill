export const checkValidations = (value, rules) =>{
    let isValid =true;
    let errorMessage = '';
    const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    

    if(rules.isRequired){
      isValid = value.trim() !== "" && isValid;
      
      errorMessage = (!isValid) ? "This field is required": null;
    }

    if(rules.minLength){
      isValid = value.length >= rules.minLength && isValid;
      errorMessage = !isValid ? "Min char is "+rules.minLength : null;
    }

    
    if(rules.isEmail){
      isValid = pattern.test(value) && isValid;
      errorMessage = !isValid ? "Email format is not valid": null;
    }

    errorMessage = isValid ? null: errorMessage;
    
    return {
      isValid,
      errorMessage
    }

    
  }