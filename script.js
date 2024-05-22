function generatePassword(){
    const length=document.getElementById('length').value;
    const includeUppercase=document.getElementById('includeUppercase').checked;
    const includeNumbers=document.getElementById('includeNumbers').checked;
    const includeSpecialChars=document.getElementById('includeSpecialChars').checked;

    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let allChars = lowercase;
    if(includeUppercase) allChars += uppercase;
    if(includeNumbers) allChars += numbers;
    if(includeSpecialChars) allChars += specialChars;

    if(!allChars){
        alert("No charaters were selected");
        return;
    }

    let password='';
    for(i=0;i<length;i++){
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt(randomIndex);
    }
    document.getElementById('password').value=password;

}