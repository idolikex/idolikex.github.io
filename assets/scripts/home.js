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
	var keywords = keywordItems.map(function (item) {
		return item.textContent.trim();
	}).filter(Boolean);
	var keywordIndex = 0;
	var displayDuration = 3000;
	var transitionDuration = 550;

	if (keywordTrack && keywords.length > 0) {
		keywordTrack.innerHTML = '' +
			'<span class="likes-keyword likes-keyword-sizer" aria-hidden="true"></span>' +
			'<span class="likes-keyword likes-keyword-current"></span>' +
			'<span class="likes-keyword likes-keyword-next"></span>';

		var keywordSizer = keywordTrack.querySelector('.likes-keyword-sizer');
		var currentKeyword = keywordTrack.querySelector('.likes-keyword-current');
		var nextKeyword = keywordTrack.querySelector('.likes-keyword-next');

		var measureTicker = function () {
			var longestKeyword = keywords.reduce(function (longest, keyword) {
				return keyword.length > longest.length ? keyword : longest;
			}, keywords[0]);

			keywordSizer.textContent = longestKeyword;
			keywordContainer.style.width = keywordSizer.offsetWidth + 'px';
			keywordContainer.style.height = keywordSizer.offsetHeight + 'px';
		};

		currentKeyword.textContent = keywords[0];
		nextKeyword.textContent = keywords[1] || keywords[0];
		measureTicker();
		window.addEventListener('resize', measureTicker);

		if (keywords.length > 1) {
			window.setInterval(function () {
				var nextIndex = (keywordIndex + 1) % keywords.length;

				nextKeyword.textContent = keywords[nextIndex];
				keywordTrack.classList.add('is-animating');

				window.setTimeout(function () {
					keywordIndex = nextIndex;
					currentKeyword.textContent = keywords[keywordIndex];
					keywordTrack.classList.remove('is-animating');
				}, transitionDuration);
			}, displayDuration);
		}
	}
}
