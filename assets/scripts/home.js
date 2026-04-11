if (typeof ScrollReveal !== 'undefined') {
	var sr = ScrollReveal({
		origin   : "bottom",
		distance : "64px",
		duration : 800,
		delay    : 0,
		scale    : 1
	});

	sr.reveal('.projects-list a');
	sr.reveal('.posts-list a');
}

var keywordContainer = document.querySelector('.likes-keywords');

if (keywordContainer) {
	var keywords = (keywordContainer.getAttribute('data-keywords') || '')
		.split('||')
		.map(function (keyword) {
			return keyword.trim();
		})
		.filter(Boolean);
	var currentKeyword = keywordContainer.querySelector('.likes-keyword-current');
	var keywordIndex = 0;
	var displayDuration = 3000;

	if (currentKeyword && keywords.length > 0) {
		currentKeyword.textContent = keywords[0];

		if (keywords.length > 1) {
			window.setInterval(function () {
				keywordIndex = (keywordIndex + 1) % keywords.length;
				currentKeyword.textContent = keywords[keywordIndex];
			}, displayDuration);
		}
	}
}
