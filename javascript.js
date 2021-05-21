function copyTextToClipboard(text) {
	if (!navigator.clipboard) {
	  fallbackCopyTextToClipboard(text);
	  return;
	}
	navigator.clipboard.writeText(text).then(function() {
	  console.log('Async: Copying to clipboard was successful!');
	}, function(err) {
	  console.error('Async: Could not copy text: ', err);
	});
  }
  
  var copyBobBtn = document.querySelector('.mail');
	
  
  copyBobBtn.addEventListener('click', function(event) {
	copyTextToClipboard('clsayart@gmail.com');
  });

console.log("coucou toi")c