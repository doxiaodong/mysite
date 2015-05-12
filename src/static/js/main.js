'use strict';

(function () {

    require.config({
        paths: {
            //angular: './lib/angular',
            'angular': '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.15/angular.min'
            //'shCore': '../plugins/ueditor/third-party/SyntaxHighlighter/shCore'
        },
        shim: {
            'angular': {exports: 'angular'}
            //'shCore': {exports: 'shCore'}
        }
    });

    require(['modules/module', 'pages/pageRouter', 'func'], function (module, page, func) {
        var app = {
            init: function () {
                window.XD = {
                    modules: {},
                    angular: {},
                    tmp: {}
                };
                this.initModules();
                this.initPlatform();
                this.initLayout();
                this.initPages();

            },
            initLayout: function () {
                angular.element(document).ready(function() {
                    angular.bootstrap(func.$id("SIGN"));
                    func.$q('body').classList.remove('loading');
                    func.$id('page_loading').remove();
                    console.log('初始化完成');
                });

                var c = func.$id("header_nav");
                c.addEventListener('click', function (e) {
                    if (e.target.hasAttribute('disabled')) {
                        window.XD.alert('等等哟～');
                    }
                });

                document.addEventListener('visibilitychange', function() {
                    var state = document.visibilityState;
                    if (state === 'hidden') {
                        document.title = '点我啊，草泥马！！';
                    }
                    if (state === 'visible') {
                        document.title = func.$id('MAIN_APP').getAttribute('title') + '--darlin.me';
                    }
                });

                func.sign("SIGNIN", "REGISTER");

                // localStorage
                func.setFormData();

                // signin
                func.ajaxSignin();
                // signout
                func.ajaxSignout();
                // register
                func.ajaxRegister();

            },
            initModules: function () {
                module.init();

                if (SyntaxHighlighter && !window.XD.modules.platform.isMobile) {
                    SyntaxHighlighter.all();
                }
            },
            initPages: function () {
                page.init();
            },
            initPlatform: function () {
                var htmlClass = func.$q('html').classList;
                if (window.XD.modules.platform.hasTouch) {
                    htmlClass.add('touch');
                }
                if (window.XD.modules.platform.isAndroid) {
                    htmlClass.add('android');
                }
                if (window.XD.modules.platform.isDesktop) {
                    htmlClass.add('desktop');
                }
                if (window.XD.modules.platform.isIOS) {
                    htmlClass.add('ios');
                }
                if (window.XD.modules.platform.isMobile) {
                    htmlClass.add('mobile');
                }
            }
        };
        app.init();
    });

})();