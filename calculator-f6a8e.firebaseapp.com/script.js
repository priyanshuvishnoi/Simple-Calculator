
function setVal(num) {
    document.form.textview.value = document.form.textview.value + num;
}

function backspace() {
    let exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}

function clr() {
    document.form.textview.value = "";
}

function result() {
    let expr = document.form.textview.value
    document.form.textview.value = eval(expr);
}
