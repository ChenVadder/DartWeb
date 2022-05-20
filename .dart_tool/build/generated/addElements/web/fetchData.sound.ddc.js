define(['dart_sdk'], (function load__web__fetchData(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const convert = dart_sdk.convert;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var fetchData = Object.create(dart.library);
  var $onKeyUp = dartx.onKeyUp;
  var $onClick = dartx.onClick;
  var $_get = dartx._get;
  var $toString = dartx.toString;
  var $checked = dartx.checked;
  var $text = dartx.text;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    EventN: () => (T.EventN = dart.constFn(dart.nullable(html.Event)))(),
    EventNTovoid: () => (T.EventNTovoid = dart.constFn(dart.fnType(dart.void, [], [T.EventN()])))(),
    MapOfString$dynamic: () => (T.MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    IdentityMapOfString$ObjectN: () => (T.IdentityMapOfString$ObjectN = dart.constFn(_js_helper.IdentityMap$(core.String, T.ObjectN())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(fetchData._showJson, T.EventNTovoid());
    }
  }, false);
  var C = [void 0];
  fetchData.main = function main() {
    fetchData.favoriteNumber[$onKeyUp].listen(C[0] || CT.C0);
    fetchData.valueOfPi[$onKeyUp].listen(C[0] || CT.C0);
    fetchData.loveChocolate[$onClick].listen(C[0] || CT.C0);
    fetchData.noLoveForChocolate[$onClick].listen(C[0] || CT.C0);
    fetchData.horoscope[$onKeyUp].listen(C[0] || CT.C0);
    fetchData.favOne[$onKeyUp].listen(C[0] || CT.C0);
    fetchData.favTwo[$onKeyUp].listen(C[0] || CT.C0);
    fetchData.favThree[$onKeyUp].listen(C[0] || CT.C0);
    fetchData._populateFromJson();
    fetchData._showJson();
  };
  fetchData._populateFromJson = function _populateFromJson() {
    let jsonDataAsString = "{\n    \"favoriteNumber\": 73,\n    \"valueOfPi\": 3.141592,\n    \"chocolate\": true,\n    \"horoscope\": \"Cancer\",\n    \"favoriteThings\": [\"monkeys\", \"parrots\", \"lattes\"]\n  }";
    let jsonData = T.MapOfString$dynamic().as(convert.json.decode(jsonDataAsString));
    fetchData.favoriteNumber.value = dart.toString(jsonData[$_get]("favoriteNumber"));
    fetchData.valueOfPi.value = dart.toString(jsonData[$_get]("valueOfPi"));
    fetchData.horoscope.value = dart.toString(jsonData[$_get]("horoscope"));
    let favoriteThings = core.List.as(jsonData[$_get]("favoriteThings"));
    fetchData.favOne.value = core.String.as(favoriteThings[$_get](0));
    fetchData.favTwo.value = core.String.as(favoriteThings[$_get](1));
    fetchData.favThree.value = core.String.as(favoriteThings[$_get](2));
    let chocolateRadioButton = dart.equals(jsonData[$_get]("chocolate"), false) ? fetchData.noLoveForChocolate : fetchData.loveChocolate;
    chocolateRadioButton[$checked] = true;
  };
  fetchData._showJson = function _showJson(_ = null) {
    let t0, t0$, t0$0, t0$1, t0$2;
    let favNum = core.int.tryParse((t0 = fetchData.favoriteNumber.value, t0 == null ? "" : t0));
    let pi = core.double.tryParse((t0$ = fetchData.valueOfPi.value, t0$ == null ? "" : t0$));
    let chocolate = fetchData.loveChocolate[$checked];
    let sign = fetchData.horoscope.value;
    let favoriteThings = T.JSArrayOfString().of([(t0$0 = fetchData.favOne.value, t0$0 == null ? "" : t0$0), (t0$1 = fetchData.favTwo.value, t0$1 == null ? "" : t0$1), (t0$2 = fetchData.favThree.value, t0$2 == null ? "" : t0$2)]);
    let formData = new (T.IdentityMapOfString$ObjectN()).from(["favoriteNumber", favNum, "valueOfPi", pi, "chocolate", chocolate, "horoscope", sign, "favoriteThings", favoriteThings]);
    fetchData.intAsJson[$text] = convert.json.encode(favNum);
    fetchData.doubleAsJson[$text] = convert.json.encode(pi);
    fetchData.boolAsJson[$text] = convert.json.encode(chocolate);
    fetchData.stringAsJson[$text] = convert.json.encode(sign);
    fetchData.listAsJson[$text] = convert.json.encode(favoriteThings);
    fetchData.mapAsJson[$text] = convert.json.encode(formData);
  };
  dart.defineLazy(fetchData, {
    /*fetchData.favoriteNumber*/get favoriteNumber() {
      return html.InputElement.as(html.querySelector("#favoriteNumber"));
    },
    /*fetchData.valueOfPi*/get valueOfPi() {
      return html.InputElement.as(html.querySelector("#valueOfPi"));
    },
    /*fetchData.horoscope*/get horoscope() {
      return html.InputElement.as(html.querySelector("#horoscope"));
    },
    /*fetchData.favOne*/get favOne() {
      return html.InputElement.as(html.querySelector("#favOne"));
    },
    /*fetchData.favTwo*/get favTwo() {
      return html.InputElement.as(html.querySelector("#favTwo"));
    },
    /*fetchData.favThree*/get favThree() {
      return html.InputElement.as(html.querySelector("#favThree"));
    },
    /*fetchData.loveChocolate*/get loveChocolate() {
      return html.RadioButtonInputElement.as(html.querySelector("#loveChocolate"));
    },
    /*fetchData.noLoveForChocolate*/get noLoveForChocolate() {
      return html.RadioButtonInputElement.as(html.querySelector("#noLoveForChocolate"));
    },
    /*fetchData.intAsJson*/get intAsJson() {
      return html.TextAreaElement.as(html.querySelector("#intAsJson"));
    },
    /*fetchData.doubleAsJson*/get doubleAsJson() {
      return html.TextAreaElement.as(html.querySelector("#doubleAsJson"));
    },
    /*fetchData.stringAsJson*/get stringAsJson() {
      return html.TextAreaElement.as(html.querySelector("#stringAsJson"));
    },
    /*fetchData.listAsJson*/get listAsJson() {
      return html.TextAreaElement.as(html.querySelector("#listAsJson"));
    },
    /*fetchData.boolAsJson*/get boolAsJson() {
      return html.TextAreaElement.as(html.querySelector("#boolAsJson"));
    },
    /*fetchData.mapAsJson*/get mapAsJson() {
      return html.TextAreaElement.as(html.querySelector("#mapAsJson"));
    }
  }, false);
  dart.trackLibraries("web/fetchData", {
    "org-dartlang-app:///web/fetchData.dart": fetchData
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["fetchData.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAgC0C,IAAxC,AAAe,AAAQ;AACY,IAAnC,AAAU,AAAQ;AACqB,IAAvC,AAAc,AAAQ;AACsB,IAA5C,AAAmB,AAAQ;AACQ,IAAnC,AAAU,AAAQ;AACc,IAAhC,AAAO,AAAQ;AACiB,IAAhC,AAAO,AAAQ;AACmB,IAAlC,AAAS,AAAQ;AAEE,IAAnB;AACW,IAAX;EACF;;AAIQ;AAQe,mBACa,2BAA9B,AAAK,oBAAO,gBAAgB;AAE4B,IAA5D,AAAe,iCAAmC,cAA3B,AAAQ,QAAA,QAAC;AACkB,IAAlD,AAAU,4BAA8B,cAAtB,AAAQ,QAAA,QAAC;AACuB,IAAlD,AAAU,4BAA8B,cAAtB,AAAQ,QAAA,QAAC;AACrB,yBAA4C,aAA3B,AAAQ,QAAA,QAAC;AACU,IAA1C,AAAO,yBAA0B,eAAlB,AAAc,cAAA,QAAC;AACY,IAA1C,AAAO,yBAA0B,eAAlB,AAAc,cAAA,QAAC;AACc,IAA5C,AAAS,2BAA0B,eAAlB,AAAc,cAAA,QAAC;AAE1B,+BACoB,YAAtB,AAAQ,QAAA,QAAC,cAAgB,SAAQ,+BAAqB;AACvB,IAAnC,AAAqB,oBAAD,aAAW;EACjC;2CAGuB;;AAEf,iBAAa,mBAA8B,KAArB,AAAe,gCAAA,aAAS;AAC9C,aAAY,sBAAyB,MAAhB,AAAU,2BAAA,cAAS;AACxC,oBAAY,AAAc;AAC1B,eAAO,AAAU;AACjB,yBAAyB,yBAChB,OAAb,AAAO,wBAAA,eAAS,aACH,OAAb,AAAO,wBAAA,eAAS,aACD,OAAf,AAAS,0BAAA,eAAS;AAGd,mBAAW,4CACf,kBAAkB,MAAM,EACxB,aAAa,EAAE,EACf,aAAa,SAAS,EACtB,aAAa,IAAI,EACjB,kBAAkB,cAAc;AAIE,IAApC,AAAU,6BAAO,AAAK,oBAAO,MAAM;AACA,IAAnC,AAAa,gCAAO,AAAK,oBAAO,EAAE;AACM,IAAxC,AAAW,8BAAO,AAAK,oBAAO,SAAS;AACF,IAArC,AAAa,gCAAO,AAAK,oBAAO,IAAI;AACS,IAA7C,AAAW,8BAAO,AAAK,oBAAO,cAAc;AACN,IAAtC,AAAU,6BAAO,AAAK,oBAAO,QAAQ;EACvC;;MA/FmB,wBAAc;YACI,sBAAjC,mBAAc;;MACC,mBAAS;YAA+B,sBAA5B,mBAAc;;MAC1B,mBAAS;YAA+B,sBAA5B,mBAAc;;MAC1B,gBAAM;YAA4B,sBAAzB,mBAAc;;MACvB,gBAAM;YAA4B,sBAAzB,mBAAc;;MACvB,kBAAQ;YAA8B,sBAA3B,mBAAc;;MACd,uBAAa;YACP,iCAAhC,mBAAc;;MACY,4BAAkB;YACP,iCAArC,mBAAc;;MAGI,mBAAS;YACC,yBAA5B,mBAAc;;MACI,sBAAY;YACC,yBAA/B,mBAAc;;MACI,sBAAY;YACC,yBAA/B,mBAAc;;MACI,oBAAU;YACC,yBAA7B,mBAAc;;MACI,oBAAU;YACC,yBAA7B,mBAAc;;MACI,mBAAS;YACC,yBAA5B,mBAAc","file":"fetchData.sound.ddc.js"}');
  // Exports:
  return {
    web__fetchData: fetchData
  };
}));

//# sourceMappingURL=fetchData.sound.ddc.js.map
