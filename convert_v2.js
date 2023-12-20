const convert = () => {
    const input = parseFloat(document.getElementById('input').value);
    const display = document.getElementById('display');
    const unit = document.getElementById('unit');
    const result_unit = document.getElementById('result-unit');

    const unit_dict = [
        {'unit': 'm', 'value': 1}, 
        {'unit': 'cm', 'value': 100}, 
        {'unit': 'mm', 'value': 1000}, 
        {'unit': 'inch', 'value': 39.3701} 
    ]

    let result = 0;

    const calculate = (x) => {
        for (let i = 0; i < 4; i++){
            if (result_unit.value === unit_dict[i].unit){
                result = input * (unit_dict[i].value / x);
                return result;
            }
        }
    }
    if(isNaN(input)){
        alert('Invalid Input! Please input a valid number.')
    }
    else {
        if (unit.value === unit_dict[0].unit) {
            calculate(unit_dict[0].value);
        } else if (unit.value === unit_dict[1].unit) {
            calculate(unit_dict[1].value);
        } else if (unit.value === unit_dict[2].unit) {
            calculate(unit_dict[2].value);
        } else if (unit.value === unit_dict[3].unit) {
            calculate(unit_dict[3].value);
        } 
    }
    display.value = result.toFixed(4);
}