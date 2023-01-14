import domtoimage from 'dom-to-image';

function captureShot() {
	domtoimage.toJpeg(document.getElementById('devstar'), { quality: 0.95 }).then(function (dataUrl) {
		var link = document.createElement('a');
		link.download = 'devstar.jpeg';
		link.href = dataUrl;
		link.click();
	});
}

export default captureShot;
