function inserir(num){
    var doc=document.form.textview.value
    if (document.form.textview.value==0 && num!="+" && num!="-" && num!="/"
     && num!="*" && num!="."){
        document.form.textview.value=""
    }
    document.form.textview.value = document.form.textview.value+num
}
function equal(){
    var exp = document.form.textview.value
    if(exp){
        document.form.textview.value = eval(exp)
    }
}
function clean(){
    document.form.textview.value = 0
    if (document.form.textview.value=="") {
        document.form.textview.value=0
    }

}
function back(){
    var exp = document.form.textview.value
    document.form.textview.value = exp.substring(0,exp.length-1)
    if (document.form.textview.value=="") {
        document.form.textview.value=0
    }
}
