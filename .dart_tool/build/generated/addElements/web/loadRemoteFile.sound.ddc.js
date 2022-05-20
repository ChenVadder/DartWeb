define(['dart_sdk'], (function load__web__loadRemoteFile(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var loadRemoteFile = Object.create(dart.library);
  var $onClick = dartx.onClick;
  var $children = dartx.children;
  var $text = dartx.text;
  var $add = dartx.add;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    FutureOfvoid: () => (T.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    EventToFutureOfvoid: () => (T.EventToFutureOfvoid = dart.constFn(dart.fnType(T.FutureOfvoid(), [html.Event])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(loadRemoteFile.makeRequest, T.EventToFutureOfvoid());
    }
  }, false);
  var C = [void 0];
  loadRemoteFile.main = function main() {
    dart.nullCheck(html.querySelector("#getWords"))[$onClick].listen(C[0] || CT.C0);
  };
  loadRemoteFile.makeRequest = function makeRequest(_) {
    return async.async(dart.void, function* makeRequest() {
      let t1;
      try {
        let jsonString = (yield html.HttpRequest.getString("portmanteaux.json"));
        loadRemoteFile.processResponse(jsonString);
      } catch (e$) {
        let e = dart.getThrown(e$);
        if (core.Object.is(e)) {
          core.print("Couldn't open " + "portmanteaux.json");
          loadRemoteFile.wordList[$children][$add]((t1 = html.LIElement.new(), (() => {
            t1[$text] = "Request failed.";
            return t1;
          })()));
        } else
          throw e$;
      }
    });
  };
  loadRemoteFile.processResponse = function processResponse(jsonString) {
    let t1;
    for (let portmanteau of core.List.as(convert.json.decode(jsonString))) {
      loadRemoteFile.wordList[$children][$add]((t1 = html.LIElement.new(), (() => {
        t1[$text] = core.String.as(portmanteau);
        return t1;
      })()));
    }
  };
  dart.defineLazy(loadRemoteFile, {
    /*loadRemoteFile.wordList*/get wordList() {
      return html.UListElement.as(html.querySelector("#wordList"));
    }
  }, false);
  dart.trackLibraries("web/loadRemoteFile", {
    "org-dartlang-app:///web/loadRemoteFile.dart": loadRemoteFile
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["loadRemoteFile.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;AAOyD,IAA7B,AAAE,AAAQ,eAApC,mBAAc;EAChB;oDAE+B;AAAP;;AAEtB;AAEQ,0BAAa,MAAkB;AAEV,QAA3B,+BAAgB,UAAU;;YACnB;AAAP;AAE4B,UAA5B,WAAM,AAAqB;AACiC,UAA5D,AAAS,AAAS,qEAAI;AAAa,wBAAO;;;;;;IAE9C;;4DAE4B;;AAC1B,aAAW,cAAuC,cAAxB,AAAK,oBAAO,UAAU;AAEkB,MAAhE,AAAS,AAAS,qEAAI;AAAa,oBAAmB,eAAZ,WAAW;;;;EAEzD;;MAzBmB,uBAAQ;YAA8B,sBAA3B,mBAAc","file":"loadRemoteFile.sound.ddc.js"}');
  // Exports:
  return {
    web__loadRemoteFile: loadRemoteFile
  };
}));

//# sourceMappingURL=loadRemoteFile.sound.ddc.js.map
