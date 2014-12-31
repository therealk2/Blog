var toggle_comment_box = function(url, entry_id) {
    var elt = $('comment_box_'+entry_id);

    if ( elt.visible() == true ) {
        elt.hide();
    }
    else {
        var ajax = new Ajax.Updater(elt, url);
        elt.show();
    }
}

var add_comment = function(form_elt){
    var form_elt = $(form_elt);

    var ajax = new Ajax.Request(form_elt.action, {
                method: form_elt.method,
                parameters: form_elt.serialize(),
                onSuccess: function(req) {
                    if(req.responseText.isJSON()){
                        var _result = req.responseText.evalJSON(true);
                        $('comment_box_'+_result['entry_id']).update(_result['msg']);
                    }
                    else{
                        alert(req.responseText);
                    }
                },
                onFailure: function(req){
                }
    });
}


var delete_confirm = function(url) {
    if(confirm("정말 삭제할까요?") == true) {
        location.href = url
    }
}
