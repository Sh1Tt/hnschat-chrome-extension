const eventHandler = e => 
{
	if ( e.target == undefined ) return;

	if ( e.target.classList.contains("contents") )
	{
		const msgTime = e.target.parentNode.dataset.time;

		console.log( msgTime, parseInt( Date.now() / 1000 ) );

		if ( msgTime == parseInt( Date.now() / 1000 ) )
		{
			chrome.runtime.sendMessage("fired", response => {});
			
		}

	}

}

function handler()
{	
	const messages = document.body.querySelector( `#messages` );

	messages.addEventListener( "DOMNodeInserted", eventHandler, false );

}

handler();
