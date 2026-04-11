var sr = ScrollReveal({
	origin   : "bottom",
	distance : "64px",
	duration : 800,
	delay    : 0,
	scale    : 1
});

sr.reveal('.projects-list a');
sr.reveal('.posts-list a');

var keywordContainer = document.querySelector('.likes-keywords');

if (keywordContainer) {
	var keywordTrack = keywordContainer.querySelector('.likes-keywords-track');
	var keywordItems = keywordTrack ? Array.prototype.slice.call(keywordTrack.querySelectorAll('.likes-keyword')) : [];
	var keywordIndex = 0;
	var rotationDelay = 2200;
	var transitionDuration = 650;
	var keywordHeight = 0;

	if (keywordTrack && keywordItems.length > 0) {
		var measureTicker = function () {
			var maxWidth = 0;

			keywordItems.forEach(function (item) {
				maxWidth = Math.max(maxWidth, item.offsetWidth);
			});

			keywordHeight = keywordItems[0].offsetHeight;
			keywordContainer.style.width = maxWidth + 'px';
			keywordContainer.style.height = keywordHeight + 'px';
			keywordTrack.style.transform = 'translateY(-' + (keywordIndex * keywordHeight) + 'px)';
		};

		measureTicker();
		window.addEventListener('resize', measureTicker);
	}

	if (keywordTrack && keywordItems.length > 1) {
		keywordTrack.appendChild(keywordItems[0].cloneNode(true));

		window.setInterval(function () {
			keywordIndex += 1;
			keywordTrack.style.transition = 'transform ' + transitionDuration + 'ms ease';
			keywordTrack.style.transform = 'translateY(-' + (keywordIndex * keywordHeight) + 'px)';

			if (keywordIndex === keywordItems.length) {
				window.setTimeout(function () {
					keywordTrack.style.transition = 'none';
					keywordIndex = 0;
					keywordTrack.style.transform = 'translateY(0)';
				}, transitionDuration);
			}
		}, rotationDelay);
	}
}
