document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
});

document.getElementById("generate").onclick = function(){
    let value_chart = ["0","1","2","3","4","5","6","7","8","9","A", "B", "C", "D", "E", "F"]
    let color_1 = "#"
    let color_2 = "#"
    var index = 0
    var selectField = document.getElementById('options');
    var selectedOption = selectField.options.selectedIndex;
    var selectedValue = selectField.options[selectedOption];

    for (var i =0 ; i<6 ; i++){
        index = Math.floor(Math.random() * value_chart.length)
        color_1 += value_chart[index]
        index = Math.floor(Math.random() * value_chart.length)
        color_2 += value_chart[index]
    }
    if(selectedValue.value === "linear"){
        document.body.style.background = 'linear-gradient(to right,'+ color_1 +','+color_2 + ')'
        document.getElementById("config").textContent = "linear-gradient"
    } else {
        document.body.style.background = 'radial-gradient('+ color_1 +','+color_2 + ')'
        document.getElementById("config").textContent = "radial-gradient"
    }
    document.getElementById("color1").textContent = color_1
    document.getElementById("color2").textContent = color_2

    document.getElementById("alert-container").style.visibility = "hidden"
}

document.getElementById("copyCode").onclick = function(){
    let TempText = document.createElement('input')

    TempText.style.visibility = "hidden"

    TempText.value = document.getElementById("code").textContent

    document.body.appendChild(TempText)

    TempText.select()
    
    TempText.setSelectionRange(0, 99999); 
  
    navigator.clipboard.writeText(TempText.value);

    document.getElementById("alert-container").style.visibility = "visible"
}
