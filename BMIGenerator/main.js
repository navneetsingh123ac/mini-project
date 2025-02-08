const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseFloat(document.querySelector('#Height').value)/100
    const weight = parseFloat(document.querySelector('#weight').value)
    const result = document.querySelector('.result')
    if(height === '' || height<0 || isNaN(height)){
        result.innerHTML = "please enter valid height"
    }
    if(weight === '' || weight<0 || isNaN(weight)){
        result.innerHTML = "please enter valid weight"
    }
    else{
        const r = weight / (height * height);
        result.innerHTML = `<p>The result is ${r}`;
    }
})