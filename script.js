const resultView = document.getElementById('textview')

if(resultView.value === ''){
  resultView.value=0
}

function insert(num) {
  let calc = document.form.textview.value;
  if(calc == "" || calc == null) {
    document.form.textview.value = num;
  } else {
    document.form.textview.value += num;
  }
}

function equal() {
  let calc = document.form.textview.value;
  if(calc) {
    document.form.textview.value = eval(calc);
  }
}

function clean() {
  document.form.textview.value = 0;
}

function back() {
  let calc = document.form.textview.value;
  document.form.textview.value = calc.substring(0, calc.length-1);
  if(calc.length < 2) {
    document.form.textview.value = 0;
  }
}