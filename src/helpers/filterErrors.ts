import { ValidationError } from 'class-validator';

function filterErrors(errors:ValidationError[]){
  let message:string[]= []
  errors.filter(({constraints}) =>{   
    for (const error in constraints) {
      message.push(constraints[error])  
    }
  })
  return message;
}

export default filterErrors