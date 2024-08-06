var currentlyHovering = false;
var blur = "blur(5px)";
var unblur = "blur(0)";

onload = function() {
	repeatScrubScrubber();
};

function blurBlocks(blocks) {

	for (var i = 0; i < blocks.length; i += 1) {
		var viewBlock = blocks[i];
		var viewText = viewBlock.textContent;

		var parentBlock = viewBlock.closest("ytd-rich-item-renderer");

		// If the element text contains the word "views" and has less than 1000 views (not K, M, or B), blur them out
		if (window.location.href.split("?")[0] == "https://www.youtube.com/"
			&& viewText.includes("view")
			&& !viewText.includes("K")
			&& !viewText.includes("M")
			&& !viewText.includes("B")
		) {
			blurParent(parentBlock);
		}
		else if (viewText.includes("view")) {
			unblurParent(parentBlock);
		}
		else if (viewText.includes("LIVE")) {
			blurParent(parentBlock);
		}
		else if (viewText.includes("Mix")) {
			blurParent(parentBlock);
		}
	}
}

function blurParent(parent) {
	if (!currentlyHovering) {
		// Only blur when not hovering over a video
		parent.style.filter = blur;
		parent.style.webkitFilter = blur;
	}
	parent.addEventListener("mouseover", function() {
		this.style.filter = unblur;
		this.style.webkitFilter = unblur;
		currentlyHovering = true;
	});
	parent.addEventListener("mouseout", function() {
		this.style.filter = blur;
		this.style.webkitFilter = blur;
		currentlyHovering = false;
	});
}

function unblurParent(parent) {
	if (parent == null) {
		return;
	}
	parent.style.filter = unblur;
	parent.style.webkitFilter = unblur;
}

function repeatScrubScrubber() {
	var interval = 1000 * 0.5;
	setInterval(scrubScrubber, interval);
}

function scrubScrubber() {

	var viewBlocks = document.querySelectorAll("ytd-video-meta-block:not([inline-badges]) #metadata-line.ytd-video-meta-block span.ytd-video-meta-block");
	blurBlocks(viewBlocks);

	var liveBlocks = document.querySelectorAll("p.ytd-badge-supported-renderer");
	blurBlocks(liveBlocks);

	var mixBlocks = document.querySelectorAll("yt-formatted-string.ytd-thumbnail-overlay-bottom-panel-renderer");
	blurBlocks(mixBlocks);
}