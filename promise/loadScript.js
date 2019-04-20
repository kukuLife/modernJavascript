"use strict"

/*		
function loadScript(src, callBack) {
  let script = document.createElement('script'); 
  script.src = src;
  script.onload = () => callBack(null, src);
  script.onerror = () => callBack(new Error(`Script load error for $(src)`))
  document.head.append(script);
}
*/

/*
function step(error, src) {
	if(error) {
		alert("error happened when load script");
	} else {
		alert(`Cool, the ${src} is loaded`);

		if(src == 'promise/referenceScript.js') {
			src = 'promise/referenceScript2.js';
			loadScript(src, step);
		} else if(src == 'promise/referenceScript2.js') {
			src = 'promise/referenceScript3.js'
			loadScript(src, step);
		} else {
			alert('function complete');
		}

	}
}
*/


/*
loadScript('promise/referenceScript.js', function() {
	referenceFunc();
	alert("function complete successfully");
});
*/

/*
function loadScript(src) {
	return new Promise(function(resolve, reject) {
		let script = document.createElement('script');
		script.src = src;
		script.onload = function(script) {
			resolve(script);
		}
		script.onerror = () => reject(new Error("Script load error" + src));
	});
}


let promise = loadScript('promise/referenceScript.js');

promise.then(
	script => alert(`$(script.src) is loaded`),
	error => alert(`Error: $(error.message)`)
);

promise.then(script => alert('One more handler to do something else'));



let promise = new Promise(function(resolve, reject) {

	setTimeout(() => resolve("done"), 999999999999999)
	
});

*/

let promise = new Promise(function(resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1 second signal that the job is done with the result "done"
  setTimeout(() => resolve("done"), 1000);
});


promise.then(
  result => alert(result), // shows "done!" after 1 second
  error => alert(error) // doesn't run
);
