'use strict';

// page_article_detail
define(['../../func'], function (func) {
    var page_article_detail = {
        init: function () {
            console.log("==this is page_article_detail==");
            if (!window.XD.modules.platform.isMobile) {
                SyntaxHighlighter.highlight();
            }
        }
    };
    return page_article_detail;
});