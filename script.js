const $display = document.getElementById('display'),
$btn = document.querySelectorAll('.btn');

let calculation = []
let accumalate

function calculate(btn) {
    let value = btn.innerText;

    if(btn.innerText === 'AC'){
        calculation = [];
        $display.value = '';
           }   else if (btn.innerText === '='){
            $display.value = eval(accumalate)
            accumalate = calculation.join('')
            calculation.push(btn.innerText)
        }
else{
    calculation.push(value)
    accumalate = calculation.join('');
    $display.value = accumalate
}
    

}
$btn.forEach(button => button.addEventListener('click', ()=>calculate(button)))

