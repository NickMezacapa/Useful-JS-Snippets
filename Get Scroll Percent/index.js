/* 

Function to get user scroll percent on page relative to scroll progress.
This can be used to alter and produce cool animations.
Vanilla JavaScript.

Sidenote:
This function was completely created by an AI bot using GPT-3 and the OpenAI API. I was skeptical if it would actually work but it surprisingly works very well. I asked the bot to print the scroll percent to the console each time the scroll percent changes.

*/

function getScrollPercent() {
	var h = document.documentElement,
		b = document.body,
		st = "scrollTop",
		sh = "scrollHeight";
	return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
}

window.onscroll = function () {
	var scrollPercent = getScrollPercent();
	console.log(scrollPercent);
};
