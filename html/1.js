/* 2018-01-10 14:28:01 */

!function (a, b, c) {
    function d() {
    }

    function e(a) {
        return function (b) {
            return F.call(b) == "[object " + a + "]"
        }
    }

    function f() {
        return Math.round(2147483647 * Math.random())
    }

    function g(b, c, d) {
        var e, f, g;
        if (d = d || a, J(b)) {
            for (e in b) if (b.hasOwnProperty(e) && (g = c.call(d, b[e], e), g === !1)) break
        } else if (O(b)) for (e = 0, f = b.length; f > e && (g = c.call(d, b[e], e), g !== !1); e++) ;
    }

    function h(a, b) {
        var c = -1;
        return L(a) && g(a, function (a, d) {
            return a === b || null != b && b == a ? void(c = d) : void 0
        }), c
    }

    function i(a, b) {
        if (K(a) && (a = b[a]), !M(a)) return d;
        var c = E.call(arguments, 2);
        return function () {
            return a.apply(b, c.concat(E.call(arguments)))
        }
    }

    function j(b, c, d) {
        var e = E.call(arguments, 3);
        return a.setTimeout(function () {
            c.apply(d || a, e)
        }, b)
    }

    function k() {
        return (new Date).getTime()
    }

    function l(a, b) {
        var c = a + " " + b;
        a = c.split(P);
        var d = +new Date(+a[0], a[1] - 1, +a[2], +a[3], +a[4]);
        return d
    }

    function m(a) {
        return a ? a.replace(Q, "") : ""
    }

    function n(a, b) {
        return a += "", b += "", 0 !== a.length && 0 !== b.length && 0 === a.indexOf(b)
    }

    function o(a, b) {
        return a += "", b += "", 0 !== a.length && 0 !== b.length && a.lastIndexOf(b) + b.length === a.length
    }

    function p(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
    }

    function q(a) {
        return a.target || a.srcElement || {}
    }

    function r(a) {
        var c = b.getElementById(a);
        if (c && s(c, "id") !== a) for (var d = 1; d < b.all[a].length; d++) if (s(b[a][d], "id") == a) return b.all[a][d];
        return c
    }

    function s(a, b) {
        return a && b && a.attributes[b] ? a.attributes[b].value : null
    }

    function t(a, c, d) {
        var e = b.createElement("script");
        e.type = "text/javascript", e.src = a, c && u(e, c), d && (e.onerror = d);
        var f = b.getElementsByTagName("script")[0];
        f.parentNode.insertBefore(e, f)
    }

    function u(a, b) {
        M(b) && (a.addEventListener ? a.onload = b : a.onreadystatechange = function () {
            a.readyState in {loaded: 1, complete: 1} && (a.onreadystatechange = null, b())
        })
    }

    function v(b, c, d) {
        var e = new Image(1, 1);
        a["__img_tagmanager_" + k() + f()] = e, e.onload = function () {
            e.onload = null, c && c()
        }, e.onerror = function () {
            e.onerror = null, d && d()
        }, e.src = b
    }

    function w(a) {
        return a.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
    }

    function x(a, b, c) {
        return J(b) ? g(b, function (b, c) {
            a = x(a, c, b)
        }) : 3 === arguments.length && (a = a.replace(new RegExp("{{\\s*" + w(b) + "\\s*}}", "g"), c)), a
    }

    function y(b) {
        (H || G) && a.console && console.log(b)
    }

    function z() {
    }

    var A = "tagmangerGlobalObject", B = "tmSuntengGlobalObject", C = "tagmanager", D = "dataLayer",
        E = Array.prototype.slice, F = Object.prototype.toString,
        G = location.hash.indexOf("#/tag_manager/preview/") > -1,
        H = location.hash.indexOf("#/tag_manager/debug/") > -1, I = {
            "ProjectId": 86,
            "ProjectName": "\u56fd\u7f8e\u5728\u7ebf",
            "Owner": 52,
            "ContainerId": 10402,
            "ContainerType": 0,
            "ContainerName": "\u7b2c\u4e09\u65b9\u4ee3\u7801\u5bb9\u5668",
            "PublishVersion": {
                "VersionId": 54,
                "VersionName": "admaster \u4fee\u6539\u4ee3\u7801",
                "Tags": {
                    "1": {
                        "CodeId": 1,
                        "ContainerId": 10402,
                        "Name": "MediaV",
                        "Type": "HTML",
                        "HTML": "\u003cscript type=\"text/javascript\"\u003e\nvar _mvq = window._mvq || []; \nwindow._mvq = _mvq;\n_mvq.push(['$setAccount', 'm-20396-0']);\nvar wurl = wurl || document.location.href;\nif (wurl.indexOf(\"item\") \u003e -1) { // \u8be6\u60c5\u9875\u4ee3\u7801\n\tif (typeof prdInfo != \"undefined\") {\n\t\t_mvq.push(['$setGeneral', 'goodsdetail', '', /*\u7528\u6237\u540d*/ '', /*\u7528\u6237id*/ '']);\n\t\t_mvq.push(['$logConversion']);\n\t\t_mvq.push(['$addGoods',\n\t\t\t/*\u5206\u7c7bid*/ \"\", \n\t\t\t/*\u54c1\u724cid*/ prdInfo.brandID || \"\", \n\t\t\t/*\u5546\u54c1\u540d\u79f0*/ prdInfo.itemName || prdInfo.prdName || \"\",\n\t\t\t/*\u5546\u54c1ID*/ prdInfo.itemId || prdInfo.prdId || \"\",\n\t\t\t/*\u5546\u54c1\u552e\u4ef7*/ prdInfo.price, \n\t\t\t/*\u5546\u54c1\u56fe\u7247url*/ \"https:\" + $(\".j-bpic-b\").attr(\"src\"),\n\t\t\t/*\u5206\u7c7b\u540d*/ \"\", \n\t\t\t/*\u54c1\u724c\u540d*/ prdInfo.breadName || \"\", \n\t\t\t/*\u5546\u54c1\u5e93\u5b58\u72b6\u60011\u6216\u662f0*/ \"\", \n\t\t\t/*\u7f51\u7edc\u4ef7*/ '',\n\t\t\t/*\u6536\u85cf\u4eba\u6570*/ '', \n\t\t\t/*\u5546\u54c1\u4e0b\u67b6\u65f6\u95f4*/ '',\n\t\t\tprdInfo.firstCategoryName || \"\",\n\t\t\tprdInfo.secondCategoryName || \"\",\n\t\t\tprdInfo.thirdCategoryName || \"\"\n\t\t\t]);\n\t\t_mvq.push(['$addPricing', /*\u4ef7\u683c\u63cf\u8ff0*/ '']);\n\t\t_mvq.push(['$logData']);\n\t}\n} else if (wurl.indexOf(\"cart.jsp\") \u003e -1) { // \u8d2d\u7269\u8f66\u9875\u4ee3\u7801\n\t_mvq.push(['$setGeneral', 'cartview', '', /*\u7528\u6237\u540d*/ '', /*\u7528\u6237id*/ '']);\n\t_mvq.push(['$logConversion']);\n\tvar mediavAddItem = [];\n\t(function() {\n\t\tvar smStr = \"\";\n\t\tfor(var k = 0, len = shippingGroups.length; k \u003c len; k++) {\n\t\t\tif(k == 0) {\n\t\t\t\tvar normalCartGroups = shippingGroups[0].normalCartGroups;\n\t\t\t\tvar items = shippingGroups[0].items;\n\t\t\t\t//\u56fd\u7f8e\u5728\u7ebf\u5546\u54c1\u5b58\u5728\n\t\t\t\tif(normalCartGroups) {\n\t\t\t\t\tvar normalLen = normalCartGroups.length;\n\t\t\t\t\t$.each(normalCartGroups, function (index, item) {\n\t\t\t\t\t\tvar generalItems = item.generalItems;\n\t\t\t\t\t\tvar generalLen=generalItems.length;\n\t\t\t\t\t\t$.each(generalItems, function (i,item2) {\n\t\t\t\t\t\t\tmediavAddItem.push(item2.productId);\n\t\t\t\t\t\t});\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t\t//\u5982\u679c\u56fd\u7f8e\u5728\u7ebf\u5546\u54c1\u4e0d\u5b58\u5728\uff0c\u5219\u7b2c\u4e00\u4e2a\u4e3a\u5e97\u94fa\u5546\u54c1\u6216\u5176\u4ed6\n\t\t\t\tif(items) {\n\t\t\t\t\tvar len = items.length;\n\t\t\t\t\t$.each(items, function (index, item2) {\n\t\t\t\t\t\tmediavAddItem.push(item2.productId);\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t} else {\t\n\t\t\t\tif(typeof(shippingGroups[k]) == 'undefined') continue;\n\t\t\t\tvar items = shippingGroups[k].items;\n\t\t\t\tif(items) {\n\t\t\t\t\tvar len = items.length;\n\t\t\t\t\t$.each(items, function (index, item2) {\n\t\t\t\t\t\tmediavAddItem.push(item2.productId);\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t})()\n\tmediavAddItem = mediavAddItem.join(\",\");\n\t_mvq.push([\"$addItem\", \"\", mediavAddItem, \"\", \"\"]);\n\t_mvq.push(['$logData']);\n} else if (wurl.indexOf(\"commitSuccess.jsp\") \u003e -1) { // \u8ba2\u5355\u9875\u4ee3\u7801\n\t_mvq.push(['$setGeneral', 'ordercreate', '', /*\u7528\u6237\u540d*/ '', /*\u7528\u6237id*/ '']);\n\t_mvq.push(['$logConversion']);\n\t_mvq.push(['$addOrder',/*\u8ba2\u5355\u53f7*/ orderId, /*\u8ba2\u5355\u91d1\u989d*/ totalPrice]);\n\tshippingGroups = eval(shippingGroups);\n\tif(shippingGroups){\n\t\tvar shipLen=shippingGroups.length;\n  \t\t$.each(shippingGroups,function (index,item2){\n\t\t\t_mvq.push(['$addItem',\n\t\t\t\t/*\u8ba2\u5355\u53f7*/ orderId, \n\t\t\t\t/*\u5546\u54c1id*/ item2.productId, \n\t\t\t\t/*\u5546\u54c1\u540d\u79f0*/ item2.productName, \n\t\t\t\t/*\u5546\u54c1\u4ef7\u683c*/ item2.price, \n\t\t\t\t/*\u5546\u54c1\u6570\u91cf*/ item2.quantity, \n\t\t\t\t/*\u5546\u54c1\u9875url*/ '', \n\t\t\t\t/*\u5546\u54c1\u9875\u56fe\u7247url*/ '']);\n\t\t});\n  \t}\n}\n_mvq.push(['$logConversion']);\n(function() {\n    var mvl = document.createElement('script');\n    mvl.type = 'text/javascript'; mvl.async = true;\n    mvl.src = ('https:' == document.location.protocol ? 'https://material-ssl.mediav.com/bjjs/mba_ka.js' : 'http://material.mediav.com/bjjs/mba_ka.js');\n    var s = document.getElementsByTagName('script')[0];\n    s.parentNode.insertBefore(mvl, s); \n})();\n\n\u003c/script\u003e",
                        "SupportDocWrite": false,
                        "BX_CLIENT_ID": "",
                        "BX_PDMP_NAME": "",
                        "PROPERTY_ID": "",
                        "SITE_ID": "",
                        "Priority": 0,
                        "StartDate": "",
                        "StartTime": "",
                        "EndDate": "",
                        "EndTime": "",
                        "AB_TESTER_ID": "",
                        "LIBRARY_CDN_URL": "",
                        "FiringConditionIds": [10, 12, 18, 19],
                        "BlockingConditionIds": [],
                        "FiringCondition": null,
                        "BlockingCondition": null,
                        "UseDefineTime": false,
                        "TriggerOnlyPublish": false,
                        "ImageUrl": "",
                        "UseCacheBuster": true,
                        "CacheBusterQueryParam": "hash",
                        "IsCompilerHTML": false,
                        "FuncCall": null,
                        "CreateUserId": 52,
                        "CreateTime": 1499933311,
                        "UpdateUserId": 52,
                        "UpdateTime": 1499933311,
                        "IsDeleted": false,
                        "DeleteUserId": 0,
                        "DeleteTime": 0
                    },
                    "10": {
                        "CodeId": 10,
                        "ContainerId": 10402,
                        "Name": "\u6676\u8d5e\u0026\u54c1\u53cb\u0026\u6cf0\u4e00-\u9996\u9875\u5217\u8868\u9875\u4ee3\u7801",
                        "Type": "HTML",
                        "HTML": "\u003c!--\u6676\u8d5e\u57cb\u7801--\u003e\u003cscript type=\"text/javascript\"\u003eif(location.hostname.indexOf('list')\u003e-1\u0026\u0026window.dspData){window.__zp_tags_params={pagetype:'list',cat1Name:dspData.dsp_gome_c1name||'',cat2Name:dspData.dsp_gome_c2name||'',cat3Name:dspData.dsp_gome_c3name||'',};}\n(window.__zp_tags_params=window.__zp_tags_params||{})[\"idtype\"]=\"pc\";(function(param){var c={query:[],args:param||{}};c.query.push([\"_setAccount\",\"194\"]);c.query.push([\"_setSiteID\",\"1\"]);(window.__zpSMConfig=window.__zpSMConfig||[]).push(c);var zp=document.createElement(\"script\");zp.type=\"text/javascript\";zp.async=true;zp.src=(\"https:\"==document.location.protocol?\"https:\":\"http:\")+\"//js.gomein.net.cn/sitemonitor/tjs/zampda/s.js\";var s=document.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(zp,s);})(window.__zp_tags_params);\u003c/script\u003e\u003c!--\u54c1\u53cb\u4ee3\u7801--\u003e\u003cscript type='text/javascript'\u003e(function(w,d,s,l,a){w._CommandName_=l;w[l]=w[l]||function(){(w[l].q=w[l].q||[]).push(arguments);w[l].track=function(){(w[l].q[w[l].q.length-1].t=[]).push(arguments)};return w[l]},w[l].a=a,w[l].l=1*new Date();var c=d.createElement(s);c.async=1;c.src='//js.gomein.net.cn/sitemonitor/tjs/ipinyou/a.js';var h=d.getElementsByTagName(s)[0];h.parentNode.insertBefore(c,h);})(window,document,'script','py','yC..NYIjWysm5FMJS2gUUQKpCP');py('event','viewPage');\u003c/script\u003e\u003c!--\u6cf0\u4e00\u975e\u8be6\u60c5\u9875--\u003e\u003cscript type='text/javascript'\u003evar _typdr=_typdr||[];_typdr.push(['i','bJ-7ds']);(function(d){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='//js.gomein.net.cn/sitemonitor/tjs/typandian/typdr.js';var e=d.body.getElementsByTagName('script')[0];e.parentNode.insertBefore(s,e);})(document);\u003c/script\u003e",
                        "SupportDocWrite": false,
                        "BX_CLIENT_ID": "",
                        "BX_PDMP_NAME": "",
                        "PROPERTY_ID": "",
                        "SITE_ID": "",
                        "Priority": 0,
                        "StartDate": "",
                        "StartTime": "",
                        "EndDate": "",
                        "EndTime": "",
                        "AB_TESTER_ID": "",
                        "LIBRARY_CDN_URL": "",
                        "FiringConditionIds": [11, 13],
                        "BlockingConditionIds": [],
                        "FiringCondition": null,
                        "BlockingCondition": null,
                        "UseDefineTime": false,
                        "TriggerOnlyPublish": false,
                        "ImageUrl": "",
                        "UseCacheBuster": true,
                        "CacheBusterQueryParam": "hash",
                        "IsCompilerHTML": true,
                        "FuncCall": null,
                        "CreateUserId": 52,
                        "CreateTime": 1499933311,
                        "UpdateUserId": 52,
                        "UpdateTime": 1513217418,
                        "IsDeleted": false,
                        "DeleteUserId": 0,
                        "DeleteTime": 0
                    },
                    "11": {
                        "CodeId": 11,
                        "ContainerId": 10402,
                        "Name": "\u6676\u8d5e\u0026\u54c1\u53cb\u0026\u6cf0\u4e00-\u8d2d\u7269\u8f66\u9875",
                        "Type": "HTML",
                        "HTML": "\u003c!--\u6676\u8d5e\u57cb\u7801--\u003e\u003cscript type=\"text/javascript\"\u003ewindow.__zp_tags_params={pagetype:\"cart\"};(function(){var smStr3=[];var smPre=1;var smNum=0;var cartDom=$('.cart-shop-good');var itemLen=cartDom.length\u003e10?10:cartDom.length;for(var i=0;i\u003citemLen;i++){var priceDom,price,numDom,num;priceDom=$(cartDom[i]).find('.cart-good-real-price')[0];price=$(priceDom).text().match(/\\d+\\.\\d{2}/)[0];numDom=$(cartDom[i]).find('input')[1];num=$(numDom).val();var pid=cartDom[i].getAttribute('data-pid');var sid=cartDom[i].getAttribute('data-sid');smStr3.push(sid);smPre+=price*num;smNum+=num*1;}\nwindow.__zp_tags_params.skuId_list=smStr3.join(',');window.__zp_tags_params.totalPrice=smNum==0?0:smPre;window.__zp_tags_params.totalNum=smNum;})();(window.__zp_tags_params=window.__zp_tags_params||{})[\"idtype\"]=\"pc\";(function(param){var c={query:[],args:param||{}};c.query.push([\"_setAccount\",\"194\"]);c.query.push([\"_setSiteID\",\"1\"]);(window.__zpSMConfig=window.__zpSMConfig||[]).push(c);var zp=document.createElement(\"script\");zp.type=\"text/javascript\";zp.async=true;zp.src=(\"https:\"==document.location.protocol?\"https:\":\"http:\")+\"//js.gomein.net.cn/sitemonitor/tjs/zampda/s.js\";var s=document.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(zp,s);})(window.__zp_tags_params);\u003c/script\u003e\u003cscript type=\"text/javascript\"\u003evar obj=(function(){var py_items=[]\nvar ty_items=[]\nvar smPre=1\nvar smNum=0\nvar cartDom=$('.cart-shop-good')\nfor(var i=0;i\u003ccartDom.length;i++){var priceDom,price,numDom,num\npriceDom=$(cartDom[i]).find('.cart-good-real-price')[0]\nprice=$(priceDom).text().match(/\\d+\\.\\d{2}/)[0]\nnumDom=$(cartDom[i]).find('input')[1]\nnum=$(numDom).val()\nvar pid=cartDom[i].getAttribute('data-pid')\nvar sid=cartDom[i].getAttribute('data-sid')\nsmPre+=price*num\nsmNum+=num*1\npy_items.push({'id':pid,'count':num,'price':price});ty_items.push(pid+'-'+sid+':'+num)}\nreturn{'py':{'money':smPre,'items':py_items},'ty':ty_items};})();(function(w,d,s,l,a){w._CommandName_=l;w[l]=w[l]||function(){(w[l].q=w[l].q||[]).push(arguments);w[l].track=function(){(w[l].q[w[l].q.length-1].t=[]).push(arguments)};return w[l]},w[l].a=a,w[l].l=1*new Date();var c=d.createElement(s);c.async=1;c.src='//js.gomein.net.cn/sitemonitor/tjs/ipinyou/a.js';var h=d.getElementsByTagName(s)[0];h.parentNode.insertBefore(c,h);})(window,document,'script','py','yC..NYIjWysm5FMJS2gUUQKpCP');py('event','viewCart',obj['py']).track('yC.mGs._L4sJAmaDPik2hJs0YRj1X');var _typdr=_typdr||[];_typdr.push(['i','bJ-7ds']);(function(d){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='//js.gomein.net.cn/sitemonitor/tjs/typandian/typdr.js';var e=d.body.getElementsByTagName('script')[0];e.parentNode.insertBefore(s,e);})(document);var _typdc=_typdc||[];_typdc.push(['i','bJ-_u-kMIrKu']);_typdc.push(['d',obj['ty']]);(function(d){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='//js.gomein.net.cn/sitemonitor/tjs/typandian/typdc.js';var e=d.body.getElementsByTagName('script')[0];e.parentNode.insertBefore(s,e);})(document);\u003c/script\u003e",
                        "SupportDocWrite": false,
                        "BX_CLIENT_ID": "",
                        "BX_PDMP_NAME": "",
                        "PROPERTY_ID": "",
                        "SITE_ID": "",
                        "Priority": 0,
                        "StartDate": "",
                        "StartTime": "",
                        "EndDate": "",
                        "EndTime": "",
                        "AB_TESTER_ID": "",
                        "LIBRARY_CDN_URL": "",
                        "FiringConditionIds": [19],
                        "BlockingConditionIds": [],
                        "FiringCondition": null,
                        "BlockingCondition": null,
                        "UseDefineTime": false,
                        "TriggerOnlyPublish": false,
                        "ImageUrl": "",
                        "UseCacheBuster": true,
                        "CacheBusterQueryParam": "hash",
                        "IsCompilerHTML": true,
                        "FuncCall": null,
                        "CreateUserId": 52,
                        "CreateTime": 1499933311,
                        "UpdateUserId": 52,
                        "UpdateTime": 1513218902,
                        "IsDeleted": false,
                        "DeleteUserId": 0,
                        "DeleteTime": 0
                    },
                    "12": {
                        "CodeId": 12,
                        "ContainerId": 10402,
                        "Name": "\u6676\u8d5e\u0026\u54c1\u53cb\u0026\u6cf0\u4e00-\u8be6\u60c5\u9875",
                        "Type": "HTML",
                        "HTML": "\u003c!--\u6676\u8d5e\u57cb\u7801--\u003e\u003cscript type=\"text/javascript\"\u003ewindow.__zp_tags_params={pagetype:'item',skuId:(prdInfo.sku||''),cat1Name:prdInfo.firstCategoryName||\"\",cat2Name:prdInfo.secondCategoryName||\"\",cat3Name:prdInfo.thirdCategoryName||\"\",};(window.__zp_tags_params=window.__zp_tags_params||{})[\"idtype\"]=\"pc\";(function(param){var c={query:[],args:param||{}};c.query.push([\"_setAccount\",\"194\"]);c.query.push([\"_setSiteID\",\"1\"]);(window.__zpSMConfig=window.__zpSMConfig||[]).push(c);var zp=document.createElement(\"script\");zp.type=\"text/javascript\";zp.async=true;zp.src=(\"https:\"==document.location.protocol?\"https:\":\"http:\")+\"//js.gomein.net.cn/sitemonitor/tjs/zampda/s.js\";var s=document.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(zp,s);})(window.__zp_tags_params);\u003c/script\u003e\u003c!--\u54c1\u53cb\u8be6\u60c5\u9875\u4ee3\u7801--\u003e\u003cscript type='text/javascript'\u003e(function(w,d,s,l,a){w._CommandName_=l;w[l]=w[l]||function(){(w[l].q=w[l].q||[]).push(arguments);w[l].track=function(){(w[l].q[w[l].q.length-1].t=[]).push(arguments)};return w[l]},w[l].a=a,w[l].l=1*new Date();var c=d.createElement(s);c.async=1;c.src='//js.gomein.net.cn/sitemonitor/tjs/ipinyou/a.js';var h=d.getElementsByTagName(s)[0];h.parentNode.insertBefore(c,h);})(window,document,'script','py','yC..NYIjWysm5FMJS2gUUQKpCP');py('event','viewPage');py('set','site',{'industry':'retail'});py('event','viewItem',{'product_no':(prdInfo.itemId||prdInfo.prdId||\"\"),'spu_id':prdInfo.sku||'','name':prdInfo.itemName||prdInfo.prdName||\"\",'category':prdInfo.firstCategoryName||\"\",'price':prdInfo.gomePrice,'product_url':document.location.origin+document.location.pathname,'pc_pic_url':\"https:\"+$(\".j-bpic-b\").attr(\"src\"),'sold_out':prdInfo.gdstats==2?1:0,'stock':prdInfo.hasGoods=='Y'?1:0,'brand':prdInfo.breadName||''});\u003c/script\u003e\u003c!--\u6cf0\u4e00\u8be6\u60c5\u9875\u4ee3\u7801--\u003e\u003cscript type=\"text/javascript\"\u003evar _typdr=_typdr||[];_typdr.push(['i','bJ-7ds']);_typdr.push(['p',(prdInfo.itemId||prdInfo.prdId||\"\")+'-'+(prdInfo.sku||'')]);(function(d){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='//js.gomein.net.cn/sitemonitor/tjs/typandian/typdr.js';var e=d.body.getElementsByTagName('script')[0];e.parentNode.insertBefore(s,e);})(document);\u003c/script\u003e",
                        "SupportDocWrite": false,
                        "BX_CLIENT_ID": "",
                        "BX_PDMP_NAME": "",
                        "PROPERTY_ID": "",
                        "SITE_ID": "",
                        "Priority": 0,
                        "StartDate": "",
                        "StartTime": "",
                        "EndDate": "",
                        "EndTime": "",
                        "AB_TESTER_ID": "",
                        "LIBRARY_CDN_URL": "",
                        "FiringConditionIds": [12],
                        "BlockingConditionIds": [],
                        "FiringCondition": null,
                        "BlockingCondition": null,
                        "UseDefineTime": false,
                        "TriggerOnlyPublish": false,
                        "ImageUrl": "",
                        "UseCacheBuster": true,
                        "CacheBusterQueryParam": "hash",
                        "IsCompilerHTML": true,
                        "FuncCall": null,
                        "CreateUserId": 52,
                        "CreateTime": 1499933311,
                        "UpdateUserId": 52,
                        "UpdateTime": 1513218343,
                        "IsDeleted": false,
                        "DeleteUserId": 0,
                        "DeleteTime": 0
                    },
                    "13": {
                        "CodeId": 13,
                        "ContainerId": 10402,
                        "Name": "\u534e\u9662",
                        "Type": "HTML",
                        "HTML": "\u003c!--\u534e\u9662\u57fa\u7840\u4ee3\u7801--\u003e\u003cscript type=\"text/javascript\"\u003evar _star_v=[],_gtype=\"1\",gtmac=\"2071\";_star_v.push([]);var j_protocol=(location.protocol==\"https:\");var url='\u003cscript type=\"text/javascript\" async=\"async\" src=\"'+(j_protocol?\"https://js.gomein.net.cn/sitemonitor/tjs\":\"http://js.gomein.net.cn/sitemonitor/tjs\")+'/huaat/j_REGISTER_rich.js\"\u003e\u003c\\/script\u003e';document.write(url);\u003c/script\u003e\u003cscript type=\"text/javascript\"\u003evar _gtc=_gtc||[];_gtc.push([\"fnSetAccount\",\"gome.com.cn\"]);var j_protocol=(location.protocol==\"https:\");var url='\u003cscript type=\"text/javascript\" async=\"async\" src=\"'+(j_protocol?\"https://js.gomein.net.cn/sitemonitor/tjs/huaat\":\"http://js.gomein.net.cn/sitemonitor/tjs/huaat\")+'/gtc.js\"\u003e\u003c\\/script\u003e';document.write(url);\u003c/script\u003e",
                        "SupportDocWrite": true,
                        "BX_CLIENT_ID": "",
                        "BX_PDMP_NAME": "",
                        "PROPERTY_ID": "",
                        "SITE_ID": "",
                        "Priority": 0,
                        "StartDate": "",
                        "StartTime": "",
                        "EndDate": "",
                        "EndTime": "",
                        "AB_TESTER_ID": "",
                        "LIBRARY_CDN_URL": "",
                        "FiringConditionIds": [11, 13, 12, 19],
                        "BlockingConditionIds": [],
                        "FiringCondition": null,
                        "BlockingCondition": null,
                        "UseDefineTime": false,
                        "TriggerOnlyPublish": false,
                        "ImageUrl": "",
                        "UseCacheBuster": true,
                        "CacheBusterQueryParam": "hash",
                        "IsCompilerHTML": true,
                        "FuncCall": null,
                        "CreateUserId": 52,
                        "CreateTime": 1500260951,
                        "UpdateUserId": 52,
                        "UpdateTime": 1500287704,
                        "IsDeleted": false,
                        "DeleteUserId": 0,
                        "DeleteTime": 0
                    },
                    "14": {
                        "CodeId": 14,
                        "ContainerId": 10402,
                        "Name": "\u534e\u9662\u0026\u54c1\u53cb\u0026\u6cf0\u4e00\u0026adMaster-\u52a0\u5165\u8d2d\u7269\u8f66",
                        "Type": "HTML",
                        "HTML": "\u003cscript\u003evar _star_v=[],_gtype=\"9\",gtmac=\"2071\",_zid=\"1\";_star_v.push(['',getQueryString('pid')+'-'+getQueryString('sid'),'','']);var j_protocol=(location.protocol==\"https:\");var url='\u003cscript type=\"text/javascript\" async=\"async\" src=\"'+(j_protocol?\"https:\":\"http:\")+'//js.gomein.net.cn/sitemonitor/tjs/huaat/j_REGISTER_rich.js\"\u003e\u003c\\/script\u003e';document.write(url);\u003c/script\u003e\u003c!--\u54c1\u53cb\u52a0\u8d2d\u6570\u636e--\u003e\u003cscript type='text/javascript'\u003e(function(w,d,s,l,a){w._CommandName_=l;w[l]=w[l]||function(){(w[l].q=w[l].q||[]).push(arguments);w[l].track=function(){(w[l].q[w[l].q.length-1].t=[]).push(arguments)};return w[l]},w[l].a=a,w[l].l=1*new Date();var c=d.createElement(s);c.async=1;c.src='//js.gomein.net.cn/sitemonitor/tjs/ipinyou/a.js';var h=d.getElementsByTagName(s)[0];h.parentNode.insertBefore(c,h);})(window,document,'script','py','yC..NYIjWysm5FMJS2gUUQKpCP');py('event','viewPage');py('event','addCart',getQueryString('pid')+'-'+getQueryString('sid')).track('yC.KG2.YXaFPyn9nxIN9UtOGL_E-P');\u003c/script\u003e\u003c!--\u6cf0\u4e00\u975e\u8be6\u60c5\u9875--\u003e\u003cscript type='text/javascript'\u003evar _typdr=_typdr||[];_typdr.push(['i','bJ-7ds']);(function(d){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='//js.gomein.net.cn/sitemonitor/tjs/typandian/typdr.js';var e=d.body.getElementsByTagName('script')[0];e.parentNode.insertBefore(s,e);})(document);\u003c/script\u003e\u003c!--\u7b2c\u4e09\u65b9\u76d1\u6d4b\u4ee3\u7801\uff08\u4f9b\u5e94\u5546\u4e3aAdMaster\uff09\uff08\u9632\u6b62\u52a0\u8f7d\u5ef6\u8fdf_smq\u65b9\u6cd5\u4e0d\u5b58\u5728\u9519\u8bef\uff0c\u6b64\u5904\u5355\u72ec\u5f15\u5165\uff09--\u003e\u003cscript\u003esetTimeout(function(){_smq.push(['custom','PC\u7aef\u5b98\u7f51',location.protocol+'//item.gome.com.cn/'+getQueryString('pid')+'-'+getQueryString('sid')+'.html','PC\u7aef\u52a0\u5165\u8d2d\u7269\u8f66']);},500);\u003c/script\u003e",
                        "SupportDocWrite": true,
                        "BX_CLIENT_ID": "",
                        "BX_PDMP_NAME": "",
                        "PROPERTY_ID": "",
                        "SITE_ID": "",
                        "Priority": 1,
                        "StartDate": "",
                        "StartTime": "",
                        "EndDate": "",
                        "EndTime": "",
                        "AB_TESTER_ID": "",
                        "LIBRARY_CDN_URL": "",
                        "FiringConditionIds": [21],
                        "BlockingConditionIds": [],
                        "FiringCondition": null,
                        "BlockingCondition": null,
                        "UseDefineTime": false,
                        "TriggerOnlyPublish": false,
                        "ImageUrl": "",
                        "UseCacheBuster": true,
                        "CacheBusterQueryParam": "hash",
                        "IsCompilerHTML": true,
                        "FuncCall": null,
                        "CreateUserId": 52,
                        "CreateTime": 1500263772,
                        "UpdateUserId": 52,
                        "UpdateTime": 1511847207,
                        "IsDeleted": false,
                        "DeleteUserId": 0,
                        "DeleteTime": 0
                    },
                    "15": {
                        "CodeId": 15,
                        "ContainerId": 10402,
                        "Name": "\u9875\u9762\u76d1\u63a7\u5168\u7ad9\u901a\u57cb\uff08\u4e0d\u5305\u62ec\u8ba2\u5355\u3001\u652f\u4ed8\u3001\u4e2a\u4eba\u4e2d\u5fc3\uff09",
                        "Type": "HTML",
                        "HTML": "\u003cscript\u003e\n  \u003c!--\u7b2c\u4e09\u65b9\u76d1\u6d4b\u4ee3\u7801\uff08\u4f9b\u5e94\u5546\u4e3aAdMaster\uff09--\u003e\nvar _smq = _smq || [];\n\n_smq.push(['_setAccount', '6573e98', new Date()]);\n_smq.push(['_setDomainName', 'gome.com.cn']);\n_smq.push(['pageview']);\n\n(function() {\nvar sm = document.createElement('script'); sm.type = 'text/javascript'; sm.async = true;\nsm.src = '//js.gomein.net.cn/sitemonitor/tjs/admaster/collect.js';\nvar s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(sm, s);\n})();\n\u003c/script\u003e",
                        "SupportDocWrite": false,
                        "BX_CLIENT_ID": "",
                        "BX_PDMP_NAME": "",
                        "PROPERTY_ID": "",
                        "SITE_ID": "",
                        "Priority": 5,
                        "StartDate": "",
                        "StartTime": "",
                        "EndDate": "",
                        "EndTime": "",
                        "AB_TESTER_ID": "",
                        "LIBRARY_CDN_URL": "",
                        "FiringConditionIds": [19, 21, 22],
                        "BlockingConditionIds": [],
                        "FiringCondition": null,
                        "BlockingCondition": null,
                        "UseDefineTime": false,
                        "TriggerOnlyPublish": false,
                        "ImageUrl": "",
                        "UseCacheBuster": true,
                        "CacheBusterQueryParam": "hash",
                        "IsCompilerHTML": false,
                        "FuncCall": null,
                        "CreateUserId": 52,
                        "CreateTime": 1511765711,
                        "UpdateUserId": 52,
                        "UpdateTime": 1515565653,
                        "IsDeleted": false,
                        "DeleteUserId": 0,
                        "DeleteTime": 0
                    },
                    "16": {
                        "CodeId": 16,
                        "ContainerId": 10402,
                        "Name": "\u6676\u8d5e-\u641c\u7d22\u7ed3\u679c\u9875",
                        "Type": "HTML",
                        "HTML": "\u003c!--\u6676\u8d5e\u57cb\u7801--\u003e\u003cscript type=\"text/javascript\"\u003eif(window.dspData\u0026\u0026window.keyLabelVal){window.__zp_tags_params={pagetype:'search',keyword:window.keyLabelVal,cat1Name:dspData.dsp_gome_c1name||'',cat2Name:dspData.dsp_gome_c2name||'',cat3Name:dspData.dsp_gome_c3name||'',};}\n(window.__zp_tags_params=window.__zp_tags_params||{})[\"idtype\"]=\"pc\";(function(param){var c={query:[],args:param||{}};c.query.push([\"_setAccount\",\"194\"]);c.query.push([\"_setSiteID\",\"1\"]);(window.__zpSMConfig=window.__zpSMConfig||[]).push(c);var zp=document.createElement(\"script\");zp.type=\"text/javascript\";zp.async=true;zp.src=(\"https:\"==document.location.protocol?\"https:\":\"http:\")+\"//js.gomein.net.cn/sitemonitor/tjs/zampda/s.js\";var s=document.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(zp,s);})(window.__zp_tags_params);\u003c/script\u003e",
                        "SupportDocWrite": false,
                        "BX_CLIENT_ID": "",
                        "BX_PDMP_NAME": "",
                        "PROPERTY_ID": "",
                        "SITE_ID": "",
                        "Priority": 0,
                        "StartDate": "",
                        "StartTime": "",
                        "EndDate": "",
                        "EndTime": "",
                        "AB_TESTER_ID": "",
                        "LIBRARY_CDN_URL": "",
                        "FiringConditionIds": [7],
                        "BlockingConditionIds": [],
                        "FiringCondition": null,
                        "BlockingCondition": null,
                        "UseDefineTime": false,
                        "TriggerOnlyPublish": false,
                        "ImageUrl": "",
                        "UseCacheBuster": true,
                        "CacheBusterQueryParam": "hash",
                        "IsCompilerHTML": true,
                        "FuncCall": null,
                        "CreateUserId": 52,
                        "CreateTime": 1513061757,
                        "UpdateUserId": 52,
                        "UpdateTime": 1513218492,
                        "IsDeleted": false,
                        "DeleteUserId": 0,
                        "DeleteTime": 0
                    }
                },
                "Conditions": {
                    "10": {
                        "ConditionId": 10,
                        "ContainerId": 10402,
                        "Name": "\u8ba2\u5355\u6210\u529f\u9875",
                        "Type": "DOM_READY",
                        "EventName": "",
                        "EventNameUserRegex": "",
                        "TimerEventName": "",
                        "TimerInterval": 0,
                        "TimerLimit": 0,
                        "UseFilters": false,
                        "Filters": [{"Macro": 1, "Operator": "CONTAINS", "Words": "commitSuccess.jsp"}],
                        "CreateUserId": 52,
                        "CreateTime": 1469167629,
                        "UpdateUserId": 52,
                        "UpdateTime": 1499933311,
                        "IsDeleted": false,
                        "DeleteUserId": 0,
                        "DeleteTime": 0
                    },
                    "11": {
                        "ConditionId": 11,
                        "ContainerId": 10402,
                        "Name": "\u9996\u9875",
                        "Type": "DOM_READY",
                        "EventName": "",
                        "EventNameUserRegex": "",
                        "TimerEventName": "",
                        "TimerInterval": 0,
                        "TimerLimit": 0,
                        "UseFilters": false,
                        "Filters": [{"Macro": 3, "Operator": "EQUALS", "Words": "www.gome.com.cn"}],
                        "CreateUserId": 52,
                        "CreateTime": 1469167683,
                        "UpdateUserId": 52,
                        "UpdateTime": 1499933311,
                        "IsDeleted": false,
                        "DeleteUserId": 0,
                        "DeleteTime": 0
                    },
                    "12": {
                        "ConditionId": 12,
                        "ContainerId": 10402,
                        "Name": "\u666e\u901a\u5546\u54c1\u8be6\u60c5\u9875",
                        "Type": "DOM_READY",
                        "EventName": "",
                        "EventNameUserRegex": "",
                        "TimerEventName": "",
                        "TimerInterval": 0,
                        "TimerLimit": 0,
                        "UseFilters": false,
                        "Filters": [{"Macro": 3, "Operator": "EQUALS", "Words": "item.gome.com.cn"}, {
                            "Macro": 1,
                            "Operator": "NOT_CONTAIN",
                            "Words": "item.gome.com.cn/yuyue"
                        }],
                        "CreateUserId": 52,
                        "CreateTime": 1469167711,
                        "UpdateUserId": 52,
                        "UpdateTime": 1507886933,
                        "IsDeleted": false,
                        "DeleteUserId": 0,
                        "DeleteTime": 0
                    },
                    "13": {
                        "ConditionId": 13,
                        "ContainerId": 10402,
                        "Name": "\u5217\u8868\u9875",
                        "Type": "DOM_READY",
                        "EventName": "",
                        "EventNameUserRegex": "",
                        "TimerEventName": "",
                        "TimerInterval": 0,
                        "TimerLimit": 0,
                        "UseFilters": false,
                        "Filters": [{"Macro": 3, "Operator": "EQUALS", "Words": "list.gome.com.cn"}],
                        "CreateUserId": 52,
                        "CreateTime": 1469167742,
                        "UpdateUserId": 52,
                        "UpdateTime": 1499933311,
                        "IsDeleted": false,
                        "DeleteUserId": 0,
                        "DeleteTime": 0
                    },
                    "14": {
                        "ConditionId": 14,
                        "ContainerId": 10402,
                        "Name": "\u6ce8\u518c\u6210\u529f\u9875",
                        "Type": "DOM_READY",
                        "EventName": "",
                        "EventNameUserRegex": "",
                        "TimerEventName": "",
                        "TimerInterval": 0,
                        "TimerLimit": 0,
                        "UseFilters": false,
                        "Filters": [{"Macro": 1, "Operator": "CONTAINS", "Words": "userActive.jsp"}],
                        "CreateUserId": 52,
                        "CreateTime": 1469167840,
                        "UpdateUserId": 52,
                        "UpdateTime": 1499933311,
                        "IsDeleted": false,
                        "DeleteUserId": 0,
                        "DeleteTime": 0
                    },
                    "15": {
                        "ConditionId": 15,
                        "ContainerId": 10402,
                        "Name": "\u56e2\u8d2d\u641c\u7d22\u9875\u9762",
                        "Type": "DOM_READY",
                        "EventName": "",
                        "EventNameUserRegex": "",
                        "TimerEventName": "",
                        "TimerInterval": 0,
                        "TimerLimit": 0,
                        "UseFilters": false,
                        "Filters": [{"Macro": 1, "Operator": "CONTAINS", "Words": "tuan.gome.com.cn/search"}],
                        "CreateUserId": 52,
                        "CreateTime": 1469167870,
                        "UpdateUserId": 52,
                        "UpdateTime": 1499933311,
                        "IsDeleted": false,
                        "DeleteUserId": 0,
                        "DeleteTime": 0
                    },
                    "16": {
                        "ConditionId": 16,
                        "ContainerId": 10402,
                        "Name": "\u652f\u4ed8\u6210\u529f\u9875",
                        "Type": "DOM_READY",
                        "EventName": "",
                        "EventNameUserRegex": "",
                        "TimerEventName": "",
                        "TimerInterval": 0,
                        "TimerLimit": 0,
                        "UseFilters": false,
                        "Filters": [{"Macro": 1, "Operator": "CONTAINS", "Words": "billpayPaymentSyn.jsp"}],
                        "CreateUserId": 52,
                        "CreateTime": 1469167893,
                        "UpdateUserId": 52,
                        "UpdateTime": 1499933311,
                        "IsDeleted": false,
                        "DeleteUserId": 0,
                        "DeleteTime": 0
                    },
                    "17": {
                        "ConditionId": 17,
                        "ContainerId": 10402,
                        "Name": "\u6d3b\u52a8\u9875",
                        "Type": "DOM_READY",
                        "EventName": "",
                        "EventNameUserRegex": "",
                        "TimerEventName": "",
                        "TimerInterval": 0,
                        "TimerLimit": 0,
                        "UseFilters": false,
                        "Filters": [{"Macro": 1, "Operator": "CONTAINS", "Words": "http://prom.gome.com.cn"}],
                        "CreateUserId": 52,
                        "CreateTime": 1469167933,
                        "UpdateUserId": 52,
                        "UpdateTime": 1499933311,
                        "IsDeleted": false,
                        "DeleteUserId": 0,
                        "DeleteTime": 0
                    },
                    "18": {
                        "ConditionId": 18,
                        "ContainerId": 10402,
                        "Name": "\u6536\u94f6\u53f0",
                        "Type": "DOM_READY",
                        "EventName": "",
                        "EventNameUserRegex": "",
                        "TimerEventName": "",
                        "TimerInterval": 0,
                        "TimerLimit": 0,
                        "UseFilters": false,
                        "Filters": [{"Macro": 1, "Operator": "CONTAINS", "Words": "gpay.gome.com.cn"}],
                        "CreateUserId": 52,
                        "CreateTime": 1469167959,
                        "UpdateUserId": 52,
                        "UpdateTime": 1499933311,
                        "IsDeleted": false,
                        "DeleteUserId": 0,
                        "DeleteTime": 0
                    },
                    "19": {
                        "ConditionId": 19,
                        "ContainerId": 10402,
                        "Name": "\u8d2d\u7269\u8f66",
                        "Type": "DOM_READY",
                        "EventName": "",
                        "EventNameUserRegex": "",
                        "TimerEventName": "",
                        "TimerInterval": 0,
                        "TimerLimit": 0,
                        "UseFilters": false,
                        "Filters": [{"Macro": 3, "Operator": "CONTAINS", "Words": "cart.gome.com.cn"}, {
                            "Macro": 2,
                            "Operator": "REGEXP",
                            "Words": "^(/$|/home/cart)"
                        }],
                        "CreateUserId": 52,
                        "CreateTime": 1469167998,
                        "UpdateUserId": 52,
                        "UpdateTime": 1499933311,
                        "IsDeleted": false,
                        "DeleteUserId": 0,
                        "DeleteTime": 0
                    },
                    "2": {
                        "ConditionId": 2,
                        "ContainerId": 10402,
                        "Name": "\u6240\u6709\u9875\u9762",
                        "Type": "PAGEVIEW",
                        "EventName": "",
                        "EventNameUserRegex": "",
                        "TimerEventName": "",
                        "TimerInterval": 0,
                        "TimerLimit": 0,
                        "UseFilters": false,
                        "Filters": [],
                        "CreateUserId": 52,
                        "CreateTime": 1468490924,
                        "UpdateUserId": 52,
                        "UpdateTime": 1499933311,
                        "IsDeleted": false,
                        "DeleteUserId": 0,
                        "DeleteTime": 0
                    },
                    "20": {
                        "ConditionId": 20,
                        "ContainerId": 10402,
                        "Name": "\u56e2\u8d2d\u8be6\u60c5\u9875",
                        "Type": "DOM_READY",
                        "EventName": "",
                        "EventNameUserRegex": "",
                        "TimerEventName": "",
                        "TimerInterval": 0,
                        "TimerLimit": 0,
                        "UseFilters": false,
                        "Filters": [{"Macro": 1, "Operator": "CONTAINS", "Words": "/deal/"}],
                        "CreateUserId": 52,
                        "CreateTime": 1469168373,
                        "UpdateUserId": 52,
                        "UpdateTime": 1499933311,
                        "IsDeleted": false,
                        "DeleteUserId": 0,
                        "DeleteTime": 0
                    },
                    "21": {
                        "ConditionId": 21,
                        "ContainerId": 10402,
                        "Name": "\u52a0\u5165\u8d2d\u7269\u8f66\u6210\u529f\u9875",
                        "Type": "PAGEVIEW",
                        "EventName": "",
                        "EventNameUserRegex": "",
                        "TimerEventName": "",
                        "TimerInterval": 0,
                        "TimerLimit": 0,
                        "UseFilters": false,
                        "Filters": [{"Macro": 1, "Operator": "CONTAINS", "Words": "cart.gome.com.cn/addsuccess"}],
                        "CreateUserId": 52,
                        "CreateTime": 1500261078,
                        "UpdateUserId": 52,
                        "UpdateTime": 1500261078,
                        "IsDeleted": false,
                        "DeleteUserId": 0,
                        "DeleteTime": 0
                    },
                    "22": {
                        "ConditionId": 22,
                        "ContainerId": 10402,
                        "Name": "\u9875\u9762\u76d1\u6d4b\u901a\u57cb",
                        "Type": "DOM_READY",
                        "EventName": "",
                        "EventNameUserRegex": "",
                        "TimerEventName": "",
                        "TimerInterval": 0,
                        "TimerLimit": 0,
                        "UseFilters": false,
                        "Filters": [{"Macro": 3, "Operator": "NOT_START_WIDTH", "Words": "cart.gome.com.cn"}, {
                            "Macro": 3,
                            "Operator": "NOT_START_WIDTH",
                            "Words": "myhome.gome.com.cn"
                        }, {"Macro": 3, "Operator": "NOT_START_WIDTH", "Words": "gpay.gome.com.cn"}],
                        "CreateUserId": 52,
                        "CreateTime": 1511765067,
                        "UpdateUserId": 52,
                        "UpdateTime": 1511765255,
                        "IsDeleted": false,
                        "DeleteUserId": 0,
                        "DeleteTime": 0
                    },
                    "3": {
                        "ConditionId": 3,
                        "ContainerId": 10402,
                        "Name": "Dom Ready",
                        "Type": "DOM_READY",
                        "EventName": "",
                        "EventNameUserRegex": "",
                        "TimerEventName": "",
                        "TimerInterval": 0,
                        "TimerLimit": 0,
                        "UseFilters": false,
                        "Filters": [],
                        "CreateUserId": 52,
                        "CreateTime": 1468490924,
                        "UpdateUserId": 52,
                        "UpdateTime": 1499933311,
                        "IsDeleted": false,
                        "DeleteUserId": 0,
                        "DeleteTime": 0
                    },
                    "4": {
                        "ConditionId": 4,
                        "ContainerId": 10402,
                        "Name": "\u5217\u8868\u9875\u6539\u7248",
                        "Type": "DOM_READY",
                        "EventName": "",
                        "EventNameUserRegex": "",
                        "TimerEventName": "",
                        "TimerInterval": 0,
                        "TimerLimit": 0,
                        "UseFilters": false,
                        "Filters": [{"Macro": 1, "Operator": "CONTAINS", "Words": "list.gome.com.cn"}],
                        "CreateUserId": 52,
                        "CreateTime": 1469156693,
                        "UpdateUserId": 52,
                        "UpdateTime": 1499933311,
                        "IsDeleted": false,
                        "DeleteUserId": 0,
                        "DeleteTime": 0
                    },
                    "5": {
                        "ConditionId": 5,
                        "ContainerId": 10402,
                        "Name": "\u62a2\u8d2d\u8be6\u60c5\u9875",
                        "Type": "DOM_READY",
                        "EventName": "",
                        "EventNameUserRegex": "",
                        "TimerEventName": "",
                        "TimerInterval": 0,
                        "TimerLimit": 0,
                        "UseFilters": false,
                        "Filters": [{"Macro": 1, "Operator": "CONTAINS", "Words": "http://q.gome.com.cn/item/"}],
                        "CreateUserId": 52,
                        "CreateTime": 1469156944,
                        "UpdateUserId": 52,
                        "UpdateTime": 1499933311,
                        "IsDeleted": false,
                        "DeleteUserId": 0,
                        "DeleteTime": 0
                    },
                    "6": {
                        "ConditionId": 6,
                        "ContainerId": 10402,
                        "Name": "\u4f1a\u5458\u4ff1\u4e50\u90e8",
                        "Type": "DOM_READY",
                        "EventName": "",
                        "EventNameUserRegex": "",
                        "TimerEventName": "",
                        "TimerInterval": 0,
                        "TimerLimit": 0,
                        "UseFilters": false,
                        "Filters": [{"Macro": 1, "Operator": "CONTAINS", "Words": "http://v.gome.com.cn/"}],
                        "CreateUserId": 52,
                        "CreateTime": 1469167516,
                        "UpdateUserId": 52,
                        "UpdateTime": 1499933311,
                        "IsDeleted": false,
                        "DeleteUserId": 0,
                        "DeleteTime": 0
                    },
                    "7": {
                        "ConditionId": 7,
                        "ContainerId": 10402,
                        "Name": "\u641c\u7d22",
                        "Type": "DOM_READY",
                        "EventName": "",
                        "EventNameUserRegex": "",
                        "TimerEventName": "",
                        "TimerInterval": 0,
                        "TimerLimit": 0,
                        "UseFilters": false,
                        "Filters": [{"Macro": 3, "Operator": "EQUALS", "Words": "search.gome.com.cn"}],
                        "CreateUserId": 52,
                        "CreateTime": 1469167560,
                        "UpdateUserId": 52,
                        "UpdateTime": 1513217431,
                        "IsDeleted": false,
                        "DeleteUserId": 0,
                        "DeleteTime": 0
                    },
                    "9": {
                        "ConditionId": 9,
                        "ContainerId": 10402,
                        "Name": "\u62a2\u8d2d\u9996\u9875",
                        "Type": "DOM_READY",
                        "EventName": "",
                        "EventNameUserRegex": "",
                        "TimerEventName": "",
                        "TimerInterval": 0,
                        "TimerLimit": 0,
                        "UseFilters": false,
                        "Filters": [{"Macro": 1, "Operator": "CONTAINS", "Words": "http://q.gome.com.cn/"}],
                        "CreateUserId": 52,
                        "CreateTime": 1469167601,
                        "UpdateUserId": 52,
                        "UpdateTime": 1499933311,
                        "IsDeleted": false,
                        "DeleteUserId": 0,
                        "DeleteTime": 0
                    }
                },
                "Macros": {
                    "1": {
                        "MacroId": 1,
                        "ContainerId": 10402,
                        "Name": "Page URL",
                        "Type": "URL",
                        "CookieName": "",
                        "JsCode": "",
                        "ElementId": "",
                        "ElementAttrName": "",
                        "VarName": "",
                        "VarDefaultValue": "",
                        "ConstantValue": "",
                        "EventVariableType": "",
                        "EventVariableDefaultValue": "",
                        "EventVariableAttrName": "",
                        "AppName": "",
                        "FuncCall": null,
                        "CreateUserId": 52,
                        "CreateTime": 1468490924,
                        "UpdateUserId": 52,
                        "UpdateTime": 1468490924,
                        "IsDeleted": false,
                        "DeleteUserId": 0,
                        "DeleteTime": 0
                    },
                    "2": {
                        "MacroId": 2,
                        "ContainerId": 10402,
                        "Name": "Page Path",
                        "Type": "URL_PATH",
                        "CookieName": "",
                        "JsCode": "",
                        "ElementId": "",
                        "ElementAttrName": "",
                        "VarName": "",
                        "VarDefaultValue": "",
                        "ConstantValue": "",
                        "EventVariableType": "",
                        "EventVariableDefaultValue": "",
                        "EventVariableAttrName": "",
                        "AppName": "",
                        "FuncCall": null,
                        "CreateUserId": 52,
                        "CreateTime": 1468490924,
                        "UpdateUserId": 52,
                        "UpdateTime": 1468490924,
                        "IsDeleted": false,
                        "DeleteUserId": 0,
                        "DeleteTime": 0
                    },
                    "3": {
                        "MacroId": 3,
                        "ContainerId": 10402,
                        "Name": "Page Hostname",
                        "Type": "URL_HOSTNAME",
                        "CookieName": "",
                        "JsCode": "",
                        "ElementId": "",
                        "ElementAttrName": "",
                        "VarName": "",
                        "VarDefaultValue": "",
                        "ConstantValue": "",
                        "EventVariableType": "",
                        "EventVariableDefaultValue": "",
                        "EventVariableAttrName": "",
                        "AppName": "",
                        "FuncCall": null,
                        "CreateUserId": 52,
                        "CreateTime": 1468490924,
                        "UpdateUserId": 52,
                        "UpdateTime": 1468490924,
                        "IsDeleted": false,
                        "DeleteUserId": 0,
                        "DeleteTime": 0
                    },
                    "4": {
                        "MacroId": 4,
                        "ContainerId": 10402,
                        "Name": "Referrer",
                        "Type": "REFERRER",
                        "CookieName": "",
                        "JsCode": "",
                        "ElementId": "",
                        "ElementAttrName": "",
                        "VarName": "",
                        "VarDefaultValue": "",
                        "ConstantValue": "",
                        "EventVariableType": "",
                        "EventVariableDefaultValue": "",
                        "EventVariableAttrName": "",
                        "AppName": "",
                        "FuncCall": null,
                        "CreateUserId": 52,
                        "CreateTime": 1468490924,
                        "UpdateUserId": 52,
                        "UpdateTime": 1468490924,
                        "IsDeleted": false,
                        "DeleteUserId": 0,
                        "DeleteTime": 0
                    },
                    "5": {
                        "MacroId": 5,
                        "ContainerId": 10402,
                        "Name": "Container ID",
                        "Type": "CONTAINER_ID",
                        "CookieName": "",
                        "JsCode": "",
                        "ElementId": "",
                        "ElementAttrName": "",
                        "VarName": "",
                        "VarDefaultValue": "",
                        "ConstantValue": "",
                        "EventVariableType": "",
                        "EventVariableDefaultValue": "",
                        "EventVariableAttrName": "",
                        "AppName": "",
                        "FuncCall": null,
                        "CreateUserId": 52,
                        "CreateTime": 1468490924,
                        "UpdateUserId": 52,
                        "UpdateTime": 1468490924,
                        "IsDeleted": false,
                        "DeleteUserId": 0,
                        "DeleteTime": 0
                    },
                    "6": {
                        "MacroId": 6,
                        "ContainerId": 10402,
                        "Name": "Version ID",
                        "Type": "VERSION_ID",
                        "CookieName": "",
                        "JsCode": "",
                        "ElementId": "",
                        "ElementAttrName": "",
                        "VarName": "",
                        "VarDefaultValue": "",
                        "ConstantValue": "",
                        "EventVariableType": "",
                        "EventVariableDefaultValue": "",
                        "EventVariableAttrName": "",
                        "AppName": "",
                        "FuncCall": null,
                        "CreateUserId": 52,
                        "CreateTime": 1468490924,
                        "UpdateUserId": 52,
                        "UpdateTime": 1468490924,
                        "IsDeleted": false,
                        "DeleteUserId": 0,
                        "DeleteTime": 0
                    },
                    "7": {
                        "MacroId": 7,
                        "ContainerId": 10402,
                        "Name": "Debug Mode",
                        "Type": "DEBUG_MODE",
                        "CookieName": "",
                        "JsCode": "",
                        "ElementId": "",
                        "ElementAttrName": "",
                        "VarName": "",
                        "VarDefaultValue": "",
                        "ConstantValue": "",
                        "EventVariableType": "",
                        "EventVariableDefaultValue": "",
                        "EventVariableAttrName": "",
                        "AppName": "",
                        "FuncCall": null,
                        "CreateUserId": 52,
                        "CreateTime": 1468490924,
                        "UpdateUserId": 52,
                        "UpdateTime": 1468490924,
                        "IsDeleted": false,
                        "DeleteUserId": 0,
                        "DeleteTime": 0
                    }
                }
            },
            "PreviewVersion": null
        }
        , J = e("Object"), K = e("String"), L = Array.isArray || e("Array"), M = e("Function"), N = function (a) {
            return null != a && a == a.window
        }, O = function (a) {
            if (!a) return !1;
            var b = a.length;
            return N(a) ? !1 : 1 === a.nodeType && b ? !0 : L(a) || !M(a) && (0 === b || "number" == typeof b && b > 0 && "undefined" != typeof a[b - 1])
        }, P = /[^\d]+/, Q = /^\s+|\s+$/g, R = function () {
            var c = 0, d = [], e = "interactive" == b.readyState && !b.createEventObject || "complete" == b.readyState,
                f = function () {
                    e || (e = !0, g(d, function (a) {
                        j(0, a)
                    }), d = null)
                }, h = function () {
                    if (!e && 120 > c) {
                        c++;
                        try {
                            b.documentElement.doScroll("left"), f()
                        } catch (d) {
                            a.setTimeout(h, 50)
                        }
                    }
                }, i = function () {
                    if (!e) {
                        if (p(b, "DOMContentLoaded", f), p(b, "readystatechange", f), b.createEventObject && b.documentElement.doScroll) {
                            var c = !0;
                            try {
                                c = !a.frameElement
                            } catch (d) {
                            }
                            c && h()
                        }
                        p(a, "load", f)
                    }
                };
            return i(), function (a) {
                e ? j(0, a) : d.push(a)
            }
        }(), S = "Asynchronously write javascript, even with document.write., v1.3.2 https://krux.github.io/postscribe",
        T = function () {
        }, U = function () {
            function a(a, i) {
                a = a || "", i = i || {};
                for (var j in c) c.hasOwnProperty(j) && (i.autoFix && (i["fix_" + j] = !0), i.fix = i.fix || i["fix_" + j]);
                var k = [], l = b.createElement("div"), m = function (a) {
                    return "string" == typeof a && -1 !== a.indexOf("&") ? (l.innerHTML = a, l.textContent || l.innerText || a) : a
                }, n = function (b) {
                    a += b
                }, o = function (b) {
                    a = b + a
                }, p = {
                    comment: /^<!--/,
                    endTag: /^<\//,
                    atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
                    startTag: /^</,
                    chars: /^[^<]/
                }, q = {
                    comment: function () {
                        var b = a.indexOf("-->");
                        return b >= 0 ? {content: a.substr(4, b), length: b + 3} : void 0
                    }, endTag: function () {
                        var b = a.match(e);
                        return b ? {tagName: b[1], length: b[0].length} : void 0
                    }, atomicTag: function () {
                        var b = q.startTag();
                        if (b) {
                            var c = a.slice(b.length);
                            if (c.match(new RegExp("</\\s*" + b.tagName + "\\s*>", "i"))) {
                                var d = c.match(new RegExp("([\\s\\S]*?)</\\s*" + b.tagName + "\\s*>", "i"));
                                if (d) return {
                                    tagName: b.tagName,
                                    attrs: b.attrs,
                                    content: d[1],
                                    length: d[0].length + b.length
                                }
                            }
                        }
                    }, startTag: function () {
                        var b = a.indexOf(">");
                        if (-1 === b) return null;
                        var c = a.match(d);
                        if (c) {
                            var e = {};
                            return c[2].replace(f, function (a, b) {
                                var c = arguments[2] || arguments[3] || arguments[4] || g.test(b) && b || null;
                                e[b] = m(c)
                            }), {tagName: c[1], attrs: e, unary: !!c[3], length: c[0].length}
                        }
                    }, chars: function () {
                        var b = a.indexOf("<");
                        return {length: b >= 0 ? b : a.length}
                    }
                }, r = function () {
                    for (var b in p) if (p[b].test(a)) {
                        h && console.log("suspected " + b);
                        var c = q[b]();
                        return c ? (h && console.log("parsed " + b, c), c.type = c.type || b, c.text = a.substr(0, c.length), a = a.slice(c.length), c) : null
                    }
                }, s = function (a) {
                    for (var b; b = r();) if (a[b.type] && a[b.type](b) === !1) return
                }, t = function () {
                    var b = a;
                    return a = "", b
                }, u = function () {
                    return a
                };
                return i.fix && !function () {
                    var b = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,
                        c = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i, d = [];
                    d.last = function () {
                        return this[this.length - 1]
                    }, d.lastTagNameEq = function (a) {
                        var b = this.last();
                        return b && b.tagName && b.tagName.toUpperCase() === a.toUpperCase()
                    }, d.containsTagName = function (a) {
                        for (var b, c = 0; b = this[c]; c++) if (b.tagName === a) return !0;
                        return !1
                    };
                    var e = function (a) {
                        return a && "startTag" === a.type && (a.unary = b.test(a.tagName) || a.unary), a
                    }, f = r, g = function () {
                        var b = a, c = e(f());
                        return a = b, c
                    }, h = function () {
                        var a = d.pop();
                        o("</" + a.tagName + ">")
                    }, j = {
                        startTag: function (a) {
                            var b = a.tagName;
                            "TR" === b.toUpperCase() && d.lastTagNameEq("TABLE") ? (o("<TBODY>"), l()) : i.fix_selfClose && c.test(b) && d.containsTagName(b) ? d.lastTagNameEq(b) ? h() : (o("</" + a.tagName + ">"), l()) : a.unary || d.push(a)
                        }, endTag: function (a) {
                            var b = d.last();
                            b ? i.fix_tagSoup && !d.lastTagNameEq(a.tagName) ? h() : d.pop() : i.fix_tagSoup && k()
                        }
                    }, k = function () {
                        f(), l()
                    }, l = function () {
                        var a = g();
                        a && j[a.type] && j[a.type](a)
                    };
                    r = function () {
                        return l(), e(f())
                    }
                }(), {append: n, readToken: r, readTokens: s, clear: t, rest: u, stack: k}
            }

            var c = function () {
                    var a, b = {}, c = this.document.createElement("div");
                    try {
                        a = "<P><I></P></I>", c.innerHTML = a, b.tagSoup = c.innerHTML !== a
                    } catch (d) {
                    }
                    try {
                        c.innerHTML = "<P><i><P></P></i></P>", b.selfClose = 2 === c.childNodes.length
                    } catch (e) {
                    }
                    return b
                }(), d = /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
                e = /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
                f = /([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,
                g = /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i,
                h = !1;
            a.supports = c, a.tokenToString = function (a) {
                var b = {
                    comment: function (a) {
                        return "<--" + a.content + "-->"
                    }, endTag: function (a) {
                        return "</" + a.tagName + ">"
                    }, atomicTag: function (a) {
                        return console.log(a), b.startTag(a) + a.content + b.endTag(a)
                    }, startTag: function (a) {
                        var b = "<" + a.tagName;
                        for (var c in a.attrs) {
                            var d = a.attrs[c];
                            b += " " + c + '="' + (d ? d.replace(/(^|[^\\])"/g, '$1\\"') : "") + '"'
                        }
                        return b + (a.unary ? "/>" : ">")
                    }, chars: function (a) {
                        return a.text
                    }
                };
                return b[a.type](a)
            }, a.escapeAttributes = function (a) {
                var b = {};
                for (var c in a) {
                    var d = a[c];
                    b[c] = d && d.replace(/(^|[^\\])"/g, '$1\\"')
                }
                return b
            };
            for (var i in c) a.browserHasFlaw = a.browserHasFlaw || !c[i] && i;
            return a
        }();
    !function () {
        function a() {
        }

        function b(a) {
            return a !== m && null !== a
        }

        function c(a) {
            return "function" == typeof a
        }

        function d(a, b, c) {
            var d, e = a && a.length || 0;
            for (d = 0; e > d; d++) b.call(c, a[d], d)
        }

        function e(a, b, c) {
            var d;
            for (d in a) a.hasOwnProperty(d) && b.call(c, d, a[d])
        }

        function f(a, b) {
            return e(b, function (b, c) {
                a[b] = c
            }), a
        }

        function g(a, c) {
            return a = a || {}, e(c, function (c, d) {
                b(a[c]) || (a[c] = d)
            }), a
        }

        function h(a) {
            try {
                return o.call(a)
            } catch (b) {
                var c = [];
                return d(a, function (a) {
                    c.push(a)
                }), c
            }
        }

        function i(a) {
            return a && "tagName" in a ? !!~a.tagName.toLowerCase().indexOf("script") : !1
        }

        function j(a) {
            return a && "tagName" in a ? !!~a.tagName.toLowerCase().indexOf("style") : !1
        }

        var k = {
            afterAsync: a,
            afterDequeue: a,
            afterStreamStart: a,
            afterWrite: a,
            beforeEnqueue: a,
            beforeWrite: function (a) {
                return a
            },
            done: a,
            error: function (a) {
                throw a
            },
            releaseAsync: !1
        }, l = this, m = void 0;
        if (!l.postscribe) {
            var n = !1, o = Array.prototype.slice, p = function (a) {
                return a[a.length - 1]
            }, q = function () {
                function a(a, c, d) {
                    var e = k + c;
                    if (2 === arguments.length) {
                        var f = a.getAttribute(e);
                        return b(f) ? String(f) : f
                    }
                    b(d) && "" !== d ? a.setAttribute(e, d) : a.removeAttribute(e)
                }

                function g(b, c) {
                    var d = b.ownerDocument;
                    f(this, {
                        root: b,
                        options: c,
                        win: d.defaultView || d.parentWindow,
                        doc: d,
                        parser: U("", {autoFix: !0}),
                        actuals: [b],
                        proxyHistory: "",
                        proxyRoot: d.createElement(b.nodeName),
                        scriptStack: [],
                        writeQueue: []
                    }), a(this.proxyRoot, "proxyof", 0)
                }

                var k = "data-ps-";
                return g.prototype.write = function () {
                    [].push.apply(this.writeQueue, arguments);
                    for (var a; !this.deferredRemote && this.writeQueue.length;) a = this.writeQueue.shift(), c(a) ? this.callFunction(a) : this.writeImpl(a)
                }, g.prototype.callFunction = function (a) {
                    var b = {type: "function", value: a.name || a.toString()};
                    this.onScriptStart(b), a.call(this.win, this.doc), this.onScriptDone(b)
                }, g.prototype.writeImpl = function (a) {
                    this.parser.append(a);
                    for (var b, c, d, e = []; (b = this.parser.readToken()) && !(c = i(b)) && !(d = j(b));) e.push(b);
                    this.writeStaticTokens(e), c && this.handleScriptToken(b), d && this.handleStyleToken(b)
                }, g.prototype.writeStaticTokens = function (a) {
                    var b = this.buildChunk(a);
                    if (b.actual) return b.html = this.proxyHistory + b.actual, this.proxyHistory += b.proxy, this.proxyRoot.innerHTML = b.html, n && (b.proxyInnerHTML = this.proxyRoot.innerHTML), this.walkChunk(), n && (b.actualInnerHTML = this.root.innerHTML), b
                }, g.prototype.buildChunk = function (a) {
                    var b = this.actuals.length, c = [], e = [], f = [];
                    return d(a, function (a) {
                        if (c.push(a.text), a.attrs) {
                            if (!/^noscript$/i.test(a.tagName)) {
                                var d = b++;
                                e.push(a.text.replace(/(\/?>)/, " " + k + "id=" + d + " $1")), "ps-script" !== a.attrs.id && "ps-style" !== a.attrs.id && f.push("atomicTag" === a.type ? "" : "<" + a.tagName + " " + k + "proxyof=" + d + (a.unary ? " />" : ">"))
                            }
                        } else e.push(a.text), f.push("endTag" === a.type ? a.text : "")
                    }), {tokens: a, raw: c.join(""), actual: e.join(""), proxy: f.join("")}
                }, g.prototype.walkChunk = function () {
                    for (var c, d = [this.proxyRoot]; b(c = d.shift());) {
                        var e = 1 === c.nodeType, f = e && a(c, "proxyof");
                        if (!f) {
                            e && (this.actuals[a(c, "id")] = c, a(c, "id", null));
                            var g = c.parentNode && a(c.parentNode, "proxyof");
                            g && this.actuals[g].appendChild(c)
                        }
                        d.unshift.apply(d, h(c.childNodes))
                    }
                }, g.prototype.handleScriptToken = function (a) {
                    var b = this.parser.clear();
                    b && this.writeQueue.unshift(b), a.src = a.attrs.src || a.attrs.SRC, a.src && this.scriptStack.length ? this.deferredRemote = a : this.onScriptStart(a);
                    var c = this;
                    this.writeScriptToken(a, function () {
                        c.onScriptDone(a)
                    })
                }, g.prototype.handleStyleToken = function (a) {
                    var b = this.parser.clear();
                    b && this.writeQueue.unshift(b), a.type = a.attrs.type || a.attrs.TYPE || "text/css", this.writeStyleToken(a), b && this.write()
                }, g.prototype.writeStyleToken = function (a) {
                    var b = this.buildStyle(a);
                    this.insertStyle(b), a.content && (b.styleSheet && !b.sheet ? b.styleSheet.cssText = a.content : b.appendChild(this.doc.createTextNode(a.content)))
                }, g.prototype.buildStyle = function (a) {
                    var b = this.doc.createElement(a.tagName);
                    return b.setAttribute("type", a.type), e(a.attrs, function (a, c) {
                        b.setAttribute(a, c)
                    }), b
                }, g.prototype.insertStyle = function (a) {
                    this.writeImpl('<span id="ps-style"/>');
                    var b = this.doc.getElementById("ps-style");
                    b.parentNode.replaceChild(a, b)
                }, g.prototype.onScriptStart = function (a) {
                    a.outerWrites = this.writeQueue, this.writeQueue = [], this.scriptStack.unshift(a)
                }, g.prototype.onScriptDone = function (a) {
                    return a !== this.scriptStack[0] ? void this.options.error({message: "Bad script nesting or script finished twice"}) : (this.scriptStack.shift(), this.write.apply(this, a.outerWrites), void(!this.scriptStack.length && this.deferredRemote && (this.onScriptStart(this.deferredRemote), this.deferredRemote = null)))
                }, g.prototype.writeScriptToken = function (a, b) {
                    var c = this.buildScript(a), d = this.shouldRelease(c), e = this.options.afterAsync;
                    a.src && (c.src = a.src, this.scriptLoadHandler(c, d ? e : function () {
                        b(), e()
                    }));
                    try {
                        this.insertScript(c), (!a.src || d) && b()
                    } catch (f) {
                        this.options.error(f), b()
                    }
                }, g.prototype.buildScript = function (a) {
                    var b = this.doc.createElement(a.tagName);
                    return e(a.attrs, function (a, c) {
                        b.setAttribute(a, c)
                    }), a.content && (b.text = a.content), b
                }, g.prototype.insertScript = function (a) {
                    this.writeImpl('<span id="ps-script"/>');
                    var b = this.doc.getElementById("ps-script");
                    b.parentNode.replaceChild(a, b)
                }, g.prototype.scriptLoadHandler = function (a, b) {
                    function c() {
                        a = a.onload = a.onreadystatechange = a.onerror = null
                    }

                    function d() {
                        c(), b()
                    }

                    function e(a) {
                        c(), g(a), b()
                    }

                    var g = this.options.error;
                    f(a, {
                        onload: function () {
                            d()
                        }, onreadystatechange: function () {
                            /^(loaded|complete)$/.test(a.readyState) && d()
                        }, onerror: function () {
                            e({message: "remote script failed " + a.src})
                        }
                    })
                }, g.prototype.shouldRelease = function (a) {
                    var b = /^script$/i.test(a.nodeName);
                    return !b || !!(this.options.releaseAsync && a.src && a.hasAttribute("async"))
                }, g
            }();
            T = function () {
                function b() {
                    var a, b = j.shift();
                    b && (a = p(b), a.afterDequeue(), b.stream = d.apply(null, b), a.afterStreamStart())
                }

                function d(c, d, g) {
                    function j(a) {
                        a = g.beforeWrite(a), m.write(a), g.afterWrite(a)
                    }

                    m = new q(c, g), m.id = i++, m.name = g.name || m.id, e.streams[m.name] = m;
                    var k = c.ownerDocument, l = {close: k.close, open: k.open, write: k.write, writeln: k.writeln};
                    f(k, {
                        close: a, open: a, write: function () {
                            return j(h(arguments).join(""))
                        }, writeln: function () {
                            return j(h(arguments).join("") + "\n")
                        }
                    });
                    var n = m.win.onerror || a;
                    return m.win.onerror = function (a, b, c) {
                        g.error({msg: a + " - " + b + ":" + c}), n.apply(m.win, arguments)
                    }, m.write(d, function () {
                        f(k, l), m.win.onerror = n, g.done(), m = null, b()
                    }), m
                }

                function e(d, e, f) {
                    c(f) && (f = {done: f}), f = g(f, k), d = /^#/.test(d) ? l.document.getElementById(d.substr(1)) : d.jquery ? d[0] : d;
                    var h = [d, e, f];
                    return d.postscribe = {
                        cancel: function () {
                            h.stream ? h.stream.abort() : h[1] = a
                        }
                    }, f.beforeEnqueue(h), j.push(h), m || b(), d.postscribe
                }

                var i = 0, j = [], m = null;
                return f(e, {streams: {}, queue: j, WriteStream: q})
            }()
        }
    }(S);
    var V = /\b\.Super\b/;
    z.extend = function (a, b) {
        function c(a, b) {
            return -46018 === a ? this : (a && "string" == typeof a || (b = a, a = "CONSTRUCTOR"), a = h[a], a.apply(this, b || []))
        }

        function e() {
            var a = this.CONSTRUCTOR;
            return a && M(a) && a.apply(this, arguments), this
        }

        var f, h = this.prototype;
        return c.prototype = h, f = e.prototype = new c(-46018), a.CONSTRUCTOR = a.CONSTRUCTOR || b || d, g(a, function (a, b) {
            f[b] = M(a) && V.test(a.toString()) ? function () {
                return N(this) || (this.Super = c), a.apply(this, arguments)
            } : a
        }), f.constructor = e, e.extend = this.extend, e
    };
    var W = z.extend({
        fields: {}, convert: function (a) {
            var b = {}, c = this.fields;
            return g(a, function (a, d) {
                var e = d;
                d in c && (e = c[d]), b[e] = a
            }), b
        }, each: function (a, b) {
            var c = this;
            g(a, function (a, d) {
                var e = c.convert(a);
                b.call(c, e, d)
            })
        }
    }), X = z.extend({
        CONSTRUCTOR: function () {
            var a = this;
            a.prefix = "tg.", a.keys = [], a.data = {}
        }, set: function (a, b) {
            var c = this;
            c.keys.push(a), c.data[c.prefix + a] = b
        }, get: function (a) {
            var b = this;
            return b.data[b.prefix + a]
        }, contain: function (a) {
            return h(this.keys, a) > -1
        }, map: function (a) {
            for (var b = this, c = 0; c < b.keys.length; c++) {
                var d = b.keys[c], e = b.get(d);
                e && a(d, e)
            }
        }
    }), Y = W.extend({
        varsTypeMap: {
            URL: {handler: "varUrl"},
            URL_HOSTNAME: {handler: "varUrlHostname"},
            URL_PATH: {handler: "varUrlPath"},
            REFERRER: {handler: "varReferrer"},
            CONTAINER_ID: {handler: "varContainerId"},
            VERSION_ID: {handler: "varVerId"},
            DEBUG_MODE: {handler: "varDebugMode"},
            CONSTANT: {handler: "varConst", param: ["ConstantValue"]},
            COOKIE: {handler: "varCookie", param: ["CookieName"]},
            ELEMENT: {handler: "varElement", param: ["ElementId", "ElementAttrName"]},
            RANDOM: {handler: "varRandom"},
            DATALAYER: {handler: "varDataLayer", param: ["VarName", "VarDefaultValue"]},
            CUSTOM_JAVASCRIPT: {handler: "varJs", param: ["JsCode"]},
            EVENET_VARIABLE: {
                handler: "varEveVar",
                param: ["EventVariableType", "EventVariableDefaultValue", "EventVariableAttrName"]
            }
        }, fields: {Type: "type", Name: "name"}, CONSTRUCTOR: function (a, b) {
            this.data = a, this.cache = {}, this.dataLayer = b, this.eventVariableObj = {}
        }, init: function () {
            this.each(this.data.macros, function (a, b) {
                this.resolve(b, a)
            })
        }, resolve: function (a, b) {
            var c = this, d = b.type, e = b.name, f = c.varsTypeMap;
            if (d && d in f) {
                var h = f[d], j = h.handler, k = [j, c];
                return g(h.param, function (a) {
                    k.push(b[a])
                }), void(c.cache[e] = {id: a, name: e, handler: i.apply(null, k)})
            }
            y("unexpect macro type + [" + d + "]")
        }, get: function (a) {
            return a in this.cache ? this.cache[a].handler() : null
        }, getById: function (a) {
            var b = null;
            return g(this.cache, function (c) {
                return c.id == a ? void(b = c.handler()) : void 0
            }), b
        }, updateEventVariable: function (a) {
            var b = a.target, c = this.eventVariableObj;
            b && (c.element = b, c.elementClasses = b.className, c.elementId = b.id, c.elementTarget = s(b, "target"), c.elementText = b.innerText || b.textContent, c.elementUrl = s(b, "FORM" === b.tagName ? "action" : "href"))
        }, varUrl: function () {
            return location.href.split("#").shift()
        }, varUrlHostname: function () {
            return location.hostname
        }, varUrlPath: function () {
            return location.pathname
        }, varReferrer: function () {
            try {
                return b.referrer
            } catch (a) {
                return null
            }
        }, varContainerId: function () {
            return this.data.containerId
        }, varVerId: function () {
            return this.data.versionId
        }, varDebugMode: function () {
            return H
        }, varConst: function (a) {
            return a
        }, varCookie: function (a) {
            var c = b.cookie.match("(?:^|;)\\s*" + a + "=([^;]*)");
            return c ? unescape(c[1]) : null
        }, varElement: function (a, b) {
            var c = r(a);
            if (c) {
                if (b) return s(c, b);
                var d = c.innerText || c.textContent || "";
                return d && " " !== d && (d = d.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " ")), d
            }
        }, varRandom: f, varDataLayer: function (a, b) {
            return this.dataLayer.contain(a) ? this.dataLayer.get(a) : b
        }, varJs: function (a) {
            var b = function () {
            };
            try {
                return c("(" + a + ")()").call(b)
            } catch (d) {
                return null
            }
        }, varEveVar: function (a, b, c) {
            var d = this.eventVariableObj;
            switch (a) {
                case"ELEMENT":
                    return d.element || b;
                case"ELEMENT_CLASSES":
                    return d.elementClasses || b;
                case"ELEMENT_ID":
                    return d.elementId || b;
                case"ELEMENT_TARGET":
                    return d.elementTarget || b;
                case"ELEMENT_TEXT":
                    return d.elementText || b;
                case"ELEMENT_URL":
                    return d.elementUrl || b;
                case"ELEMENT_ATTR":
                    return s(d.element, c) || b;
                default:
                    return b
            }
        }
    }), Z = W.extend({
        tagEvalutorMap: {
            HTML: {handler: "evalHTML", param: ["HTML", "SupportDocWrite"]},
            IMAGE: {handler: "evalImage", param: ["ImageUrl", "UseCacheBuster", "CacheBusterQueryParam"]},
            BX_WHISKY: {handler: "evalBxWhisky", param: ["BX_CLIENT_ID"]},
            BX_WHISKY_PDMP: {handler: "evalBxWhiskyPdmp", param: ["BX_CLIENT_ID", "BX_PDMP_NAME"]},
            BX_PDMP: {handler: "evalBxPdmp", param: ["BX_CLIENT_ID", "BX_PDMP_NAME"]},
            UA: {handler: "evalUa", param: ["PROPERTY_ID"]},
            SM_V3: {handler: "evalSmV3", param: ["SITE_ID"]},
            AB_TESTER: {handler: "evalABTester", param: ["AB_TESTER_ID"]},
            LIBRARY: {handler: "evalLibrary", param: ["LIBRARY_CDN_URL"]}
        },
        fields: {
            Name: "name",
            Type: "type",
            FiringConditionIds: "firingCondition",
            BlockingConditionIds: "blockingCondition",
            TriggerOnlyPublish: "triggerOnlyPublish",
            UseDefineTime: "useDefineTime",
            StartDate: "startDate",
            StartTime: "startTime",
            EndDate: "endDate",
            EndTime: "endTime",
            Priority: "priority"
        },
        CONSTRUCTOR: function (a, b) {
            var c = this;
            c.data = a, c.variable = b
        },
        setTgName: function (a) {
            this.tgName = a
        },
        run: function (a) {
            var b = this, c = [];
            b.each(b.data.tags, function (b, d) {
                var e, f = !1, g = b.firingCondition || [], h = b.blockingCondition || [];
                for (e = 0; e < h.length; e++) if (h[e] in a) return;
                for (e = 0; e < g.length; e++) if (g[e] in a) {
                    f = !0;
                    break
                }
                f && (b.id = d, c.push(b))
            }), c = b.filterTags(c);
            var d = b.separateTags(c), e = d.shift(), f = d.shift();
            b.runTags(e, !0), b.runTags(b.sortTags(f), !1)
        },
        filterTags: function (a) {
            var b = [], c = this;
            return g(a, function (a) {
                return a.triggerOnlyPublish && G ? void y("the tag [" + a.name + "(" + a.id + ")] only can be triggered on publish!") : c.checkTagTime(a) ? void b.push(a) : void y("the tag [" + a.name + "(" + a.id + ")] is out of date!")
            }), b
        },
        checkTagTime: function (a) {
            if (!a.useDefineTime) return !0;
            var b = l(a.startDate, a.startTime), c = l(a.endDate, a.endTime), d = k();
            return d >= b && c >= d ? !0 : !1
        },
        separateTags: function (a) {
            var b = [], c = [];
            return g(a, function (a) {
                a.priority = parseInt(a.priority, 10) || 0, 0 === a.priority ? b.push(a) : c.push(a)
            }), [b, c]
        },
        sortTags: function (a) {
            return a = a.sort(function (a, b) {
                return b.priority - a.priority
            })
        },
        runTags: function (a, b, c) {
            var e = this, f = a.shift(), g = arguments, h = arguments.callee, i = function () {
                b || h.apply(e, g)
            };
            if (f) {
                var j = f.name, k = f.id;
                e.resolve(f, function () {
                    y("run tag [" + j + "(" + k + ")] success"), i()
                }, function () {
                    y("run tag [" + j + "(" + k + ")] fail"), i()
                }), b && h.apply(e, g)
            } else (c = c || d)()
        },
        resolve: function (a, b, c, d) {
            var e = this, f = a.type, h = e.tagEvalutorMap;
            if (f && f in h) {
                var i = h[f], k = i.handler, l = [];
                return g(i.param, function (b) {
                    l.push(a[b])
                }), e[k].apply(e, l.concat([b, c])), void(d && j(d, c))
            }
            y("can not evalutor the tag with type"), c()
        },
        evalHTML: function (a, b, c, e) {
            var f = this;
            c = c || d, e = e || d, a = f.replaceMacro(a), b ? R(i(f.htmlWithWrite, f, a, c, e)) : f.htmlWithoutWrite(a, c, e)
        },
        scriptSrcReplacer: /(<script[^>]*?)src\s*(?=\=\s*["'])/gi,
        scriptTypeReplacer: /(<script[^>]*?)(\s*type\s*\=\s*["']text\/javascript["'])?([^>]*?>)/gi,
        prepareScriptAttr: function (a) {
            return m(String(a)).replace(this.scriptSrcReplacer, "$1data-tgmrsrc").replace(this.scriptTypeReplacer, "$1 type='text/tgmrscript'$3")
        },
        scriptElmementMather: /(<script[^>]*?>)([\s\S]*?)(?=<\/script>)/gi,
        macroReplacer: /{{([^}]+)}}/gm,
        replaceMacro: function (a) {
            var b = this;
            return a.replace(b.scriptElmementMather, function (a, c, d) {
                return c + d.replace(b.macroReplacer, function (a, c) {
                    return b.tgName + "['" + b.data.containerId + "'].macro('" + c + "')"
                })
            }).replace(b.macroReplacer, function (a, c) {
                return b.variable.get(c) || ""
            })
        },
        prepareHtml: function (a) {
            return this.prepareScriptAttr(a)
        },
        htmlWithWrite: function (a, c, d) {
            var e = b.createElement("div");
            e.style.display = "none", e.style.visibility = "hidden", b.body.appendChild(e);
            try {
                T(e, a, c)
            } catch (f) {
                j(0, d)
            }
        },
        stringToNode: function (a) {
            var c = [], d = b.createElement("div");
            d.innerHTML = "tagmanager<div>" + a + "</div>";
            for (var e = d.lastChild; e.firstChild;) c.push(e.removeChild(e.firstChild));
            return c
        },
        htmlWithoutWrite: function (a, c, d) {
            var e = this;
            b.body ? (a = e.prepareHtml(a), e.appendNodes(b.body, e.stringToNode(a), c, d)()) : j(200, e.htmlWithoutWrite, e, a, c, d)
        },
        appendNodes: function (a, c, d, e) {
            var f = this;
            return function () {
                try {
                    if (c.length > 0) {
                        var g = c.shift(), h = f.appendNodes(a, c, d, e);
                        if ("SCRIPT" === String(g.nodeName).toUpperCase() && "text/tgmrscript" === g.type) {
                            var i = b.createElement("script");
                            i.async = !1, i.type = "text/javascript", i.id = g.id, i.text = g.text || g.textContent || g.innerHTML || "", g.charset && (i.charset = g.charset);
                            var j = g.getAttribute("data-tgmrsrc");
                            j && (i.src = j, u(i, h)), a.insertBefore(i, null), j || h()
                        } else if (g.innerHTML && g.innerHTML.toLowerCase().indexOf("<script") > -1) {
                            for (var k = []; g.firstChild;) k.push(g.removeChild(g.firstChild));
                            a.insertBefore(g, null), f.appendNodes(g, k, h, e)
                        } else a.insertBefore(g, null), h()
                    } else d()
                } catch (l) {
                    e()
                }
            }
        },
        evalImage: function (a, b, c, d, e) {
            if (a = a || "", b) {
                var f = a.split("#"), g = f.shift(), h = g.indexOf("?") > -1 ? "&" : "?";
                g += h + (c || "hash") + "=" + k(), f.unshift(g), a = f.join("#")
            }
            v(a, d, e)
        },
        bxWhiskyTpl: ['<script type="text/javascript">', "window._CWiQ = window._CWiQ || [];", "window.BX_CLIENT_ID = {{BX_CLIENT_ID}};", "(function() {", 'var c = document.createElement("script")', ',p = "https:"==document.location.protocol;', 'c.type = "text/javascript";', "c.async = true;", 'c.src = (p?"https://":"http://")+"whisky.ana.biddingx.com/boot/0";', 'var h = document.getElementsByTagName("script")[0];', "h.parentNode.insertBefore(c, h);", "})();", "</script>"].join("\n"),
        evalBxWhisky: function (a, b, c) {
            var d = this, e = x(d.bxWhiskyTpl, "BX_CLIENT_ID", a);
            d.htmlWithoutWrite(e, b, c)
        },
        bxPdmpImageTpl: "//masky.biddingx.com/pdmp/do/pri?cid={{BX_CLIENT_ID}}&cate={{BX_PDMP_NAME}}",
        evalBxPdmp: function (a, b, c, d) {
            var e = this, f = x(e.bxPdmpImageTpl, {BX_CLIENT_ID: a, BX_PDMP_NAME: encodeURIComponent(b)});
            e.evalImage(f, !0, "_", c, d)
        },
        evalBxWhiskyPdmp: function (a, b, c, d) {
            var e = this, f = 0, g = function () {
                2 == ++f && c()
            }, h = !1, i = function () {
                h || (h = !0, d())
            };
            e.evalBxPdmp(a, b, g, i), e.evalBxWhisky(a, b, g, i)
        },
        uaTpl: ["<script>", '(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){', "(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),", "m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)", '})(window,document,"script","//www.google-analytics.com/analytics.js","ga");', 'ga("create", "{{PROPERTY_ID}}", "auto");', 'ga("send", "pageview");', "</script>"].join("\n"),
        evalUa: function (a, b, c) {
            var d = this, e = x(d.uaTpl, "PROPERTY_ID", a);
            d.htmlWithoutWrite(e, b, c)
        },
        smV3Tpl: ['<script type="text/javascript">', "(function() {", "window._CiQ{{SITE_ID}} = window._CiQ{{SITE_ID}} || [];", 'window._CiQ{{SITE_ID}}.push(["_cookieUseRootDomain", true]);', 'var c = document.createElement("script");', 'c.type = "text/javascript";', "c.async = true;", 'c.charset = "utf-8";', 'c.src = "//collect.cn.miaozhen.com/ca/{{SITE_ID}}";', 'var h = document.getElementsByTagName("script")[0];', "h.parentNode.insertBefore(c, h);", "})();", "</script>"].join("\n"),
        evalSmV3: function (a, b, c) {
            var d = this, e = x(d.smV3Tpl, "SITE_ID", a);
            d.htmlWithoutWrite(e, b, c)
        },
        abTesterUrlTpl: "//static.abtester.cn/boot/{{AB_TESTER_ID}}.js",
        evalABTester: function (a, b, c) {
            var d = x(this.abTesterUrlTpl, "AB_TESTER_ID", a);
            t(d, b, c)
        },
        evalLibrary: function (a, b, c) {
            t(a, b, c)
        }
    }), $ = W.extend({
        fields: {Macro: "macro", Operator: "operator", Words: "words"}, CONSTRUCTOR: function (a) {
            this.variable = a
        }, resolve: function (a) {
            var b = !0;
            return this.each(a, function (a) {
                return this.match(a.macro, a.operator, a.words) ? void 0 : void(b = !1)
            }), b
        }, match: function (a, b, c) {
            var d = this, e = d.variable.getById(a);
            switch (e && e.nodeType && K(e.tagName) && (e = e.tagName.toLowerCase()), b) {
                case"EQUALS":
                    return e === c;
                case"CONTAINS":
                    return e && String(e).indexOf(c) > -1;
                case"STARTS_WITH":
                    return n(e, c);
                case"ENDS_WITH":
                    return o(e, c);
                case"REGEXP":
                    return new RegExp(c, "m").test(e);
                case"REGEXP_IGNORE_CASE":
                    return new RegExp(c, "mi").test(e);
                case"LESS":
                    return c > e;
                case"LESS_OR_EQUAL":
                    return c >= e;
                case"GREATER":
                    return e > c;
                case"GREATER_OR_EQUAL":
                    return e >= c;
                case"NOT_EQUAL":
                    return e !== c;
                case"NOT_CONTAIN":
                    return e && -1 === String(e).indexOf(c);
                case"NOT_START_WIDTH":
                    return !n(e, c);
                case"NOT_END_WITH":
                    return !o(e, c);
                case"NOT_REGEXP":
                    return !new RegExp(c, "m").test(e);
                case"NOT_REGEXP_IGNORE_CASE":
                    return !new RegExp(c, "mi").test(e);
                default:
                    return !1
            }
        }
    }), _ = W.extend({
        eventTypeMap: {
            PAGEVIEW: {binder: "bindPV", merge: !0},
            DOM_READY: {binder: "bindReady", merge: !0},
            LOADED: {binder: "bindLoad", merge: !0},
            CLICK: {binder: "bindClick", merge: !0},
            LINK_CLICK: {binder: "bindAnchor", merge: !0},
            ERROR: {binder: "bindError", merge: !0},
            FORM_SUBMIT: {binder: "bindSubmit", merge: !0},
            TIMER: {
                binder: "bindTimer",
                merge: !1,
                trigger: {match: "TimerEventName"},
                param: ["TimerInterval", "TimerLimit"]
            },
            CUSTOM_EVENT: {merge: !1, trigger: {match: "EventName", useReg: "EventNameUseRegex"}}
        }, fields: {Name: "name", Type: "type", Filters: "filters"}, CONSTRUCTOR: function (a, b, c) {
            var d = this;
            d.data = a, d.listen = c, d.variable = b, d.filter = new $(b), d.events = [], d.typeIndex = {}
        }, init: function () {
            this.each(this.data.conditions, function (a, b) {
                this.bind(b, a)
            }), this.fire("PAGEVIEW")
        }, bind: function (a, b) {
            var c = this, d = c.events, e = c.eventTypeMap, f = b.type;
            if (f && f in e) {
                var h, i = e[f];
                if (i.merge) {
                    if (f in c.typeIndex) return h = d[c.typeIndex[f]], h.ids = h.ids || [], void h.ids.push(a);
                    c.typeIndex[f] = d.length
                }
                h = {type: f, ids: [a]};
                var j = i.trigger;
                j && j.match && (h.trigger = {match: b[j.match], useReg: j.useReg && b[j.useReg]}), d.push(h);
                var k = i.binder;
                if (k) {
                    var l = [h];
                    g(i.param, function (a) {
                        l.push(b[a])
                    }), c[k].apply(c, l)
                }
                return !0
            }
            return y("the event type [" + f + "] is not in the eventTypeMap!!"), !1
        }, onEventTrigger: function (a) {
            a.timestamp = a.timestamp || k();
            var b = a.ids, c = this, d = {};
            c.variable.updateEventVariable(a), g(b, function (a) {
                var b = c.convert(c.data.conditions[a]);
                c.filter.resolve(b.filters) && (y("the condition [" + b.name + "(" + a + ")] fired"), d[a] = 1)
            }), c.listen(d, a)
        }, fire: function (a) {
            var b = this;
            return g(b.events, function (c) {
                c.type === a && b.onEventTrigger(c)
            }), b
        }, trigger: function (a) {
            var b = this;
            g(b.events, function (c) {
                var d = c.trigger, e = !1;
                if (d) {
                    var f = d.match;
                    e = d.useReg ? new RegExp(f, "g").match(a) : f === a, e && j(0, b.onEventTrigger, b, c)
                }
            })
        }, bindPV: function () {
        }, bindReady: function (a) {
            R(i(this.onEventTrigger, this, a))
        }, bindLoad: function (b) {
            p(a, "load", i(this.onEventTrigger, this, b))
        }, bindClick: function (a) {
            var c = this;
            p(b, "click", i(c.afterEvent, c, a))
        }, bindAnchor: function (a) {
            var c = this;
            p(b, "click", i(c.afterAnchor, c, a))
        }, bindSubmit: function (a) {
            var c = this;
            "undefined" != typeof HTMLFormElement && (HTMLFormElement.prototype.oldFormSubmit || (HTMLFormElement.prototype.oldFormSubmit = HTMLFormElement.prototype.submit, HTMLFormElement.prototype.submit = function () {
                a.target = this, c.onEventTrigger(a), HTMLFormElement.prototype.oldFormSubmit.call(this)
            })), R(function () {
                g(b.getElementsByTagName("form"), function (b) {
                    p(b, "submit", i(c.afterEvent, c, a))
                })
            })
        }, afterAnchor: function (b, c) {
            for (var d = !1, e = ["a", "area"], f = q(c || a.event), g = 0; 100 > g; g++) {
                var i = f && f.tagName.toLowerCase();
                if (!f || "body" === i) break;
                if (h(e, i) > -1) {
                    d = !0;
                    break
                }
            }
            d && this.afterEvent.apply(this, arguments)
        }, afterEvent: function (b, c) {
            b.target = q(c || a.event), this.onEventTrigger(b)
        }, bindError: function (b) {
            p(a, "error", i(this.onEventTrigger, this, b))
        }, bindTimer: function (b, c, d) {
            var e = this, f = 0, g = k(), h = a.setInterval(function () {
                f++, b.count = f, b.startTime = g, e.onEventTrigger(b), f >= d && clearInterval(h)
            }, c)
        }
    }), ab = z.extend({
        CONSTRUCTOR: function (a) {
            var b = this;
            b.json = a, b.data = {}, b.dataLayer = new X, b.variable = new Y(b.data, b.dataLayer), b.trigger = new _(b.data, b.variable, i(b.eventListen, b)), b.evalutor = new Z(b.data, b.variable)
        }, init: function () {
            var a = this;
            a.setData(), a.global(), a.variable.init(), a.trigger.init(), a.evalutor.setTgName(a.tgName), a.entity.init()
        }, setData: function () {
            var a = this, b = a.data, c = a.json, d = (G ? c.PreviewVersion : c.PublishVersion) || {};
            b.projectId = c.ProjectId, b.containerId = c.ContainerId, b.versionId = d.VersionId, b.tags = d.Tags, b.macros = d.Macros, b.conditions = d.Conditions
        }, global: function () {
            var b = this, c = b.data.containerId, d = a[A] || a[B] || C, e = a[d] || {}, f = e[c] || {},
                g = f.dlName = f.dlName || D, h = a[g] || [];
            f.dataLayer = b.dataLayer, f.macro = i(b.variable.get, b.variable), f.init = function () {
                e[c] = f, a[d] = e, a[g] = h
            }, b.entity = f, b.tgName = d;
            var j = h.push;
            h.push = function () {
                var a = E.call(arguments, 0);
                j.apply(h, a), b.onDataLayerPush(a)
            }, b.onDataLayerPush(h.slice(0))
        }, onDataLayerPush: function (a) {
            var b = this;
            g(a, function (a) {
                g(a, function (a, c) {
                    "event" === c && b.trigger.trigger(a), y("you put [" + c + ":" + a + "] in dataLayer"), b.dataLayer.set(c, a)
                })
            })
        }, eventListen: function (a) {
            this.evalutor.run(a)
        }
    });
    new ab(I).init()
}(window, document, function (data) {
    return eval(data)
});