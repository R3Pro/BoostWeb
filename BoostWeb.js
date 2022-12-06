function JSloader(Links, element = document.body) {
			for (const link of Links) {
				const e = document.createElement("script");
				e.setAttribute('src', link)
				element.insertBefore(e, null);
			}
	}

// If you use JQuery use this code


elementToObserve = document.getElementById('afterLoad'); // create empty Div with id like afterLoad


observer = new MutationObserver(function (mutationsList, observer) {
	console.log(mutationsList);

	setTimeout(() => {
		(function ($) {
		  // your plugin code
	  })(jQuery);
	}, 500); // you can change time out
	
});

observer.observe(elementToObserve, { characterData: false, childList: true, attributes: false });

JSloader([/* Links Array , List scripts */],elementToObserve)
