function StringChallenge(str) { 
 
    str=str.toLowerCase();
    let is_palindrom=false;
    let letters=[];
    let k=0;
    for(let i=0;i<str.length;i++){
      let c = str.charAt(i).charCodeAt(0);
      if(c >= 65 && c <= 90){
        letters[k] = str.charAt(i);
        k++;
      }
      if(c >= 97 && c <= 122){
        letters[k] = str.charAt(i);
        k++;
      }
    }
    for(let i=0;i<letters.length;i++){
      if(letters[i] == letters[letters.length-1-i]){
        is_palindrom=true;
      }else{
        is_palindrom=false;
        break;
      }
    }
    // code goes here  
    return is_palindrom; 
  
  }
     
  // keep this function call here 
  console.log(StringChallenge(readline()));