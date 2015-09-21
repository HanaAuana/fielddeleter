var clicked = false;
var getFieldIdAndDelete = function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
        if(target){
            var elID = target.id;
            var text = target.textContent.strip();
        }
        else{
                alert("Try again");
        }

        var fieldId = elID.substring(5);
        if(fieldId && !isNaN(fieldId)){
            var confirmed = prompt("Are you sure you want to delete field "+fieldId+ "? Enter '"+text+"' to confirm");
            if(confirmed === text){
                removeField(fieldId, true);
            }
            else{
                alert("That didn't match, try again");
            }
        }
        else{
            alert('Not a field');
        }
        
        document.removeEventListener('click', getFieldIdAndDelete, false);
}
alert('Click on field to delete');
document.addEventListener('click', getFieldIdAndDelete, false);


