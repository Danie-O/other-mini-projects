// Script to calculate age and display result

let submit = document.getElementById('submit');
let result = document.getElementById('result');

submit.addEventListener('click', () => {
    let birth = new Date(document.getElementById('birth').value);
    let dateNow = new Date();

    if(birth.getTime()){
        let difference = dateNow.getTime() - birth.getTime();
        let newAge = new Date(difference/ (1000 * 3600 * 24));
       
        let inDays = (Math.floor(difference / (1000 * 3600 * 24)));
        let inYears = (Math.floor(inDays / 365.242199));
        result.style.display = 'block';
        result.innerHTML = `You are <span>${inYears}</span> YEARS and <span>${inDays}</span> DAYS old`;
    }

})
