var text_input = document.getElementById('text-input');
var text_label = document.getElementById('text-label');
var email_input = document.getElementById('email-input');
var email_label = document.getElementById('email-label');
text_input.onfocus = function(){  
    text_label.className = 'label-text-focus';
    
}
email_input.onfocus = function(){  
    email_label.className = 'label-text-focus';
   
}
text_input.onblur = function(){
    if(this.value == '')
    {
        text_label.className = '';
    }
}
email_input.onblur = function(){
    if(this.value == '')
    {
        email_label.className  = '';
    }
}


