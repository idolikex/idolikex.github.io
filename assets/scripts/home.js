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
	var keywords = JSON.parse(keywordContainer.getAttribute('data-keywords') || '[]');
	var keywordIndex = 0;
	var rotationDelay = 1800;

	if (keywordTrack && keywords.length > 1) {
		window.setInterval(function () {
			keywordIndex = (keywordIndex + 1) % keywords.length;
			keywordTrack.style.transform = 'translateY(-' + keywordIndex + 'em)';
		}, rotationDelay);
	}
}
