onload = function() {
	scrubScrubber();
};

function scrubScrubber() {
	var blur = "blur(5px)";
	var unblur = "blur(0)";

	var viewBlocks = document.querySelectorAll("ytd-video-meta-block:not([inline-badges]) #metadata-line.ytd-video-meta-block span.ytd-video-meta-block");

	for (var i = 0; i < viewBlocks.length; i += 1) {
		var viewBlock = viewBlocks[i];
		var viewText = viewBlock.textContent;

		// If the element text contains the word "views" and has less than 1000 views (not K, M, or B), blur them out
		if (viewText.includes("views")
			&& !viewText.includes("K")
			&& !viewText.includes("M")
			&& !viewText.includes("B")
		) {
			var parentBlock = viewBlocks[i].closest("ytd-rich-item-renderer");
			parentBlock.style.filter = blur;
			parentBlock.style.webkitFilter = blur;
			parentBlock.addEventListener("mouseover", function() {
				this.style.filter = unblur;
			});
			parentBlock.addEventListener("mouseout", function() {
				this.style.filter = blur;
			});
		}
	}
}