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
	var keywords = (keywordContainer.getAttribute('data-keywords') || '')
		.split('||')
		.map(function (keyword) {
			return keyword.trim();
		})
		.filter(Boolean);
	var currentKeyword = keywordContainer.querySelector('.likes-keyword-current');
	var nextKeyword = keywordContainer.querySelector('.likes-keyword-next');
	var keywordIndex = 0;
	var displayDuration = 3000;
	var transitionDuration = 550;
	var isAnimating = false;

	if (currentKeyword && nextKeyword && keywords.length > 0) {
		currentKeyword.textContent = keywords[0];
		nextKeyword.textContent = '';

		if (keywords.length > 1) {
			window.setInterval(function () {
				var nextIndex;

				if (isAnimating) {
					return;
				}

				nextIndex = (keywordIndex + 1) % keywords.length;
				nextKeyword.textContent = keywords[nextIndex];
				isAnimating = true;
				keywordContainer.classList.add('is-animating');

				window.setTimeout(function () {
					keywordIndex = nextIndex;
					currentKeyword.textContent = keywords[keywordIndex];
					nextKeyword.textContent = '';
					keywordContainer.classList.remove('is-animating');
					isAnimating = false;
				}, transitionDuration);
			}, displayDuration);
		}
	}
}
