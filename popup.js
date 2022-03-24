
const handler = async e =>
{
	const chatHandler = () =>
	{
		const chat = iframe.contentWindow.document.querySelector( `[data-page="chat"]` );

		console.log( chat );

	}
	
	const iframe = document.body.querySelector( `[data-component="hnschat"]` );

	iframe.addEventListener( "load", chatHandler, false );

}

document.addEventListener( "DOMContentLoaded", handler, false );
