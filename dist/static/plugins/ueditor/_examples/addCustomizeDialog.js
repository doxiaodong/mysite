UE.registerUI("dialog",function(e,t){var n=new UE.ui.Dialog({iframeUrl:"customizeDialogPage.html",editor:e,name:t,title:"这是个测试浮层",cssRules:"width:600px;height:300px;",buttons:[{className:"edui-okbutton",label:"确定",onclick:function(){n.close(!0)}},{className:"edui-cancelbutton",label:"取消",onclick:function(){n.close(!1)}}]}),r=new UE.ui.Button({name:"dialogbutton"+t,title:"dialogbutton"+t,cssRules:"background-position: -500px 0;",onclick:function(){n.render(),n.open()}});return r});