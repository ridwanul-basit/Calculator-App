function insertnum(num) {
    var existingnum = $("#result").val();
    $("#result").val(existingnum + num)
}
function clearRst(){
    $("#result").val('')
}
function calculation(){
   var rst= eval ($("#result").val())
   $("#result").val(rst)

}
function dlt(){
    var presentvalue=$("#result").val()
    if (presentvalue!=''){
        $("#result").val(presentvalue.slice(0,-1));
    }
} 