// popup.js
const handler = () =>
{
	const iframe = document.body.querySelector( `[data-component="hnschat"]` );

	chrome.storage.sync.get("size", data =>
	{
		iframe.height = parseInt( data.size.height ) || 600;

		iframe.width = parseInt( data.size.width ) || 320;

	});

}

document.addEventListener("DOMContentLoaded",handler,false);
