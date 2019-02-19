function getFunc() {
  let value = "test";

  let func = function() { alert(value); };

  return func;
}

getFunc()();