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

var open_box1 = function(i) {
    var elt = $('pw_layer1_'+i);
    elt.style.display = 'block';
}
var open_box2 = function(i) {
    var elt = $('pw_layer2_'+i);
    elt.style.display = 'block';
}
var close_box1 = function(i) {
    $('pw_layer1_'+i).hide();
}
var close_box2 = function(i) {
    $('pw_layer2_'+i).hide();
}
var del_cmt = function(form_elt){
    var form_elt = $(form_elt);

    var ajax = new Ajax.Request(form_elt.action, {
                method: form_elt.method,
                parameters: form_elt.serialize(),
                onSuccess: function(req) {
                    if(req.responseText.isJSON()){
                        var _result = req.responseText.evalJSON(true);
                        if(_result['result']){
                        $('comment_box_'+_result['entry_id']).update(_result['msg']);
                        }
                        else{
                            alert("비밀번호가 틀렸습니다.");
                        }
                    }
                    else{
                        alert(req.responseText);
                    }
                },
                onFailure: function(req){

                }
    });
}

var pw_check = function(form_elt){
    var form_elt = $(form_elt);

    var ajax = new Ajax.Request(form_elt.action, {
                method: form_elt.method,
                parameters: form_elt.serialize(),
                onSuccess: function(req) {
                    if(req.responseText.isJSON()){
                        var _result = req.responseText.evalJSON(true);
                        if(_result['result']){
                          $('comment_'+_result['cmt_id']).hide();
                          $('cmt_form_'+_result['cmt_id']).show();
                          close_box1(_result['cmt_id']);
                        }
                        else{
                            alert("비밀번호가 틀렸습니다.");
                        }
                    }
                    else{
                        alert(req.responseText);
                    }
                },
                onFailure: function(req){

                }
    });
}

var update_comment = function(form_elt){
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

