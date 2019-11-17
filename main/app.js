// Create an object type UserException
function Error(message) {
  this.message = message;
  this.name = 'UserException';
}


function addTokens(input, tokens){
    
    if (typeof input == 'string' || input instanceof String) {
        
        if(input.length<6){
            
            throw new Error('Input should have at least 6 characters')
        }else
        {
            
            if (tokens instanceof Array && typeof tokens.isArray === 'string') {
                if(!(input.includes("...")))
                {
                    
                    return tokens;
                }
                
            }else
            {
                throw new Error('Invalid array format')
            }
            
            
        }
   
} 
else {
   
 throw new Error('Invalid input');
   
   
}
    
    
    
    
}

const app = {
    addTokens: addTokens
}

module.exports = app;