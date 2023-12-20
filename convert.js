const convert = () => {
    const input = parseFloat(document.getElementById('input').value);
    const display = document.getElementById('display');
    const unit = document.getElementById('unit');
    const result_unit = document.getElementById('result-unit');

    const m = 1;
    const cm = 100;
    const mm = 1000;
    const inch = 39.3701;

    let result = 0;

    if(isNaN(input)){
        alert('Invalid Input! Please input a valid number.')
    }
    else {
        if (unit.value === 'm') {
            switch (result_unit.value) {
                case 'm':
                    result = input * m;
                    break;
                case 'cm':
                    result = input * cm;
                    break;
                case 'mm':
                    result = input * mm;
                    break;
                case 'inch':
                    result = input * inch;
                    break;
            }
        } else if (unit.value === 'cm') {
            switch (result_unit.value) {
                case 'm':
                    result = input * (m / cm);
                    break;
                case 'cm':
                    result = input * (cm / cm);
                    break;
                case 'mm':
                    result = input * (mm / cm);
                    break;
                case 'inch':
                    result = input * (inch / cm);
                    break;    
            }
        } else if (unit.value === 'mm') {
            switch (result_unit.value) {
                case 'm':
                    result = input * (m / mm);
                    break;
                case 'cm':
                    result = input * (cm / mm);
                    break;
                case 'mm':
                    result = input * (mm / mm);
                    break;
                case 'inch':
                    result = input * (inch / mm);
                    break;
            }
        } else if (unit.value === 'inch') {
            switch (result_unit.value) {
                case 'm':
                    result = input * (m / inch);
                    break;
                case 'cm':
                    result = input * (cm / inch);
                    break;
                case 'mm':
                    result = input * (mm / inch);
                    break;
                case 'inch':
                    result = input * (inch / inch);
                    break;
            }
        } 
    }
    
    
    display.value = result.toFixed(4);
}