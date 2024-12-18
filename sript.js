
function ispallindrome(str){
    const cstr = str.toLowerCase().replace(/[^a-z0-9]/g, ''); 
    return cstr === cstr.split('').reverse().join('');
    
}


function pallindromechecker(){                                                 
    const inputText=document.getElementById('sub').value;
    const result=document.getElementById('result');

    
    if (ispallindrome(inputText)) {
        result.textContent = `"${inputText}" is a palindrome.`;
    } else {
        result.textContent = `"${inputText}" is not a palindrome.`;
    }
    result.classList.add('fadein');
    inputText.value='';
}



document.addEventListener('DOMContentLoaded', function()
 { const element = document.getElementById('checkButton'); 
    if (element) 
        {   
             element.addEventListener('click',pallindromechecker); }
 });