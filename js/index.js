/*
 * index.js
 * Last modified: 2011-03-24 21:15:11
 *
 * Simply just a bit of fun on the front page.
 */

// When the DOM's ready
dojo.ready(function(){
	var baseCol = new dojo.Color(dojo.style(dojo.body(), 'backgroundColor')),
		cycle = 1000;

	function augment() {
		// Get our Blue
		var start = baseCol.toHex(),
			b = baseCol.b,
			end;

		// Shift it by +/- 2
		b += Math.floor(Math.random() * 11) - 5;

		// Make sure we're in range
		b = Math.min(255, Math.max(0, b));

		// Set it back and set on the body
		baseCol.b = b;
		end = baseCol.toHex();
		dojo.animateProperty({
			node: dojo.body(),
			properties: {
				backgroundColor: {
					start: start,
					end: end
				}
			},
			duration: cycle * 0.9
		}).play();
	}

	setInterval(augment, cycle);
}); // dojo.ready
