define(['dart_sdk'], (function load__web__removeElements(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var removeElements = Object.create(dart.library);
  var $onChange = dartx.onChange;
  var $onClick = dartx.onClick;
  var $children = dartx.children;
  var $clear = dartx.clear;
  var $text = dartx.text;
  var $remove = dartx.remove;
  var $add = dartx.add;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    EventTovoid: () => (T.EventTovoid = dart.constFn(dart.fnType(dart.void, [html.Event])))(),
    MouseEventTovoid: () => (T.MouseEventTovoid = dart.constFn(dart.fnType(dart.void, [html.MouseEvent])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(removeElements.addToDoItem, T.EventTovoid());
    }
  }, false);
  var C = [void 0];
  removeElements.main = function main() {
    removeElements.toDoInput[$onChange].listen(C[0] || CT.C0);
    removeElements.deleteAll[$onClick].listen(dart.fn(_ => removeElements.toDoList[$children][$clear](), T.MouseEventTovoid()));
  };
  removeElements.addToDoItem = function addToDoItem(e) {
    let t0;
    let newToDo = (t0 = html.LIElement.new(), (() => {
      t0[$text] = removeElements.toDoInput.value;
      return t0;
    })());
    newToDo[$onClick].listen(dart.fn(_ => newToDo[$remove](), T.MouseEventTovoid()));
    removeElements.toDoInput.value = "";
    removeElements.toDoList[$children][$add](newToDo);
  };
  dart.defineLazy(removeElements, {
    /*removeElements.toDoInput*/get toDoInput() {
      return html.InputElement.as(html.querySelector("#to-do-input"));
    },
    /*removeElements.toDoList*/get toDoList() {
      return html.UListElement.as(html.querySelector("#to-do-list"));
    },
    /*removeElements.deleteAll*/get deleteAll() {
      return html.ButtonElement.as(html.querySelector("#delete-all"));
    }
  }, false);
  dart.trackLibraries("web/removeElements", {
    "org-dartlang-app:///web/removeElements.dart": removeElements
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["removeElements.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAOwC,IAAtC,AAAU,AAAS;AACuC,IAA1D,AAAU,AAAQ,0CAAO,QAAC,KAAM,AAAS,AAAS;EACpD;oDAEuB;;AACf,8CAAU;AAAa,kBAAO,AAAU;;;AACC,IAA/C,AAAQ,AAAQ,OAAT,kBAAgB,QAAC,KAAM,AAAQ,OAAD;AACjB,IAApB,AAAU,iCAAQ;AACY,IAA9B,AAAS,AAAS,yCAAI,OAAO;EAC/B;;MAdmB,wBAAS;YAAiC,sBAA9B,mBAAc;;MAC1B,uBAAQ;YAAgC,sBAA7B,mBAAc;;MACxB,wBAAS;YAAgC,uBAA7B,mBAAc","file":"removeElements.sound.ddc.js"}');
  // Exports:
  return {
    web__removeElements: removeElements
  };
}));

//# sourceMappingURL=removeElements.sound.ddc.js.map
