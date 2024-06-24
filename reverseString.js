function reverseString(str){
    var splitStr = str.split('');
    var newStr = []
    for(let i=splitStr.length-1; i>=0 ;i--){
        newStr.push(splitStr[i]);
    }
    toSring = newStr.join('')
    console.log(toSring);
}

reverseString("HELLO");
