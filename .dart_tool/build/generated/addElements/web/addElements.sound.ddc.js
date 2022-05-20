define(['dart_sdk'], (function load__web__addElements(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var addElements = Object.create(dart.library);
  var $onChange = dartx.onChange;
  var $text = dartx.text;
  var $children = dartx.children;
  var $add = dartx.add;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    EventTovoid: () => (T.EventTovoid = dart.constFn(dart.fnType(dart.void, [html.Event])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(addElements.addToDoItem, T.EventTovoid());
    }
  }, false);
  var C = [void 0];
  addElements.main = function main() {
    addElements.toDoInput[$onChange].listen(C[0] || CT.C0);
  };
  addElements.addToDoItem = function addToDoItem(e) {
    let t0;
    let newToDo = (t0 = html.LIElement.new(), (() => {
      t0[$text] = addElements.toDoInput.value;
      return t0;
    })());
    addElements.toDoInput.value = "";
    addElements.toDoList[$children][$add](newToDo);
  };
  dart.defineLazy(addElements, {
    /*addElements.toDoInput*/get toDoInput() {
      return html.InputElement.as(html.querySelector("#to-do-input"));
    },
    /*addElements.toDoList*/get toDoList() {
      return html.UListElement.as(html.querySelector("#to-do-list"));
    }
  }, false);
  dart.trackLibraries("web/addElements", {
    "org-dartlang-app:///web/addElements.dart": addElements
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["addElements.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;AAMwC,IAAtC,AAAU,AAAS;EACrB;iDAEuB;;AACf,8CAAU;AAAa,kBAAO,AAAU;;;AAC1B,IAApB,AAAU,8BAAQ;AACY,IAA9B,AAAS,AAAS,sCAAI,OAAO;EAC/B;;MAXmB,qBAAS;YAAiC,sBAA9B,mBAAc;;MAC1B,oBAAQ;YAAgC,sBAA7B,mBAAc","file":"addElements.sound.ddc.js"}');
  // Exports:
  return {
    web__addElements: addElements
  };
}));

//# sourceMappingURL=addElements.sound.ddc.js.map
