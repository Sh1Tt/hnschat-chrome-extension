// popup.js
const handler = () =>
{
	const iframe = document.body.querySelector( `[data-component="hnschat"]` );

	chrome.storage.sync.get("data", response =>
	{
		iframe.height = parseInt( response.data.height || 600 );

		iframe.width = parseInt( response.data.width || 320 );

	});

}

document.addEventListener("DOMContentLoaded",handler,false);
