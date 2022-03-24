
// const handler = async e =>
// {
// 	const chatHandler = () =>
// 	{
// 		const chat = iframe.contentWindow.document.querySelector( `[data-page="chat"]` );

// 		console.log( chat );

// 	}
	
// 	const iframe = document.body.querySelector( `[data-component="hnschat"]` );

// 	iframe.addEventListener( "load", chatHandler, false );

// }

// document.addEventListener( "DOMContentLoaded", handler, false );

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request) {
        if (request.msg == "save") {
            // do cool things with the request then send response
            // ...
			alert( "from popup" );
            sendResponse({ sender: "popup.js", data: "answer"  }); // This response is sent to the message's sender 
        }
    }
});