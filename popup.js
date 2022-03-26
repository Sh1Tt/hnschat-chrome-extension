// popup.js
const errorHandler = err =>
{
	console.log( err );

	// const changeNetwork = prompt( "https://hns.chat/ ?", "y");

	// document.body.querySelector(`[data-component="hnschat"]`).src = changeNetwork == "y" ? "https://hns.chat/" : "https://hnschat/";

}

const handler = () =>
{
	const iframe = document.body.querySelector(`[data-component="hnschat"]`);

	chrome.storage.sync.get("settings", r =>
	{
		const __ = {};

		try
		{
			__.w = parseInt( r.settings.width );

			__.h = parseInt( r.settings.height );

			__.s = r.settings.source;
		}
		catch( err )
		{
			__.w = 324;

			__.h = 600;

			__.s = "https://hnschat/";

			chrome.storage.sync.set({"settings": { width: __.w, height: __.h, source: __.s }});

		}
		
		iframe.onError = errorHandler;

		iframe.width = __.w;
	
		iframe.height = __.h;
	
		iframe.src = __.s;

	});

}

document.addEventListener("DOMContentLoaded", handler, false );