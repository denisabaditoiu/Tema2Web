// Create an object type UserException



function addTokens(input, tokens){
    
    if (typeof input != 'string') {
        throw new Error('Invalid input');
        
    }
                
if(input.length<6) {
    
    throw new Error('Input should have at least 6 characters');
    
}
    
    for(var i in tokens){
        if(typeof tokens[i].tokenName!=='string')
        {
             
    throw new Error('Invalid array format');
        } 
        else
        {
            if(input.includes('...'))
            
            {   
                
                //input=input.replace('...','${'+tokens[i].tokenName+'}');
            
                var arr=[];
                arr=input.split("...");
                console.log(arr);
                var str="";
                var i;
                for( i=0;i<arr.length;i++)
                if(i!=arr.length-1)
               str+=arr[i]+'${'+tokens[i].tokenName+'}';
              else
                str+='';
                return str;
            }
            else
            {
                return input;
            }
            
        }
        
    }
    
    
    
    
}

const app = {
    addTokens: addTokens
}

module.exports = app;