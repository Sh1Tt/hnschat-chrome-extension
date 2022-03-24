const eventHandler = e => 
{
	if ( typeof e.target != undefined && e.target.classList.contains("contents") )
	{
		const msg = e.target.querySelector( `.message` );

		msg.style.background = e.target.parentNode.classList.contains("self") ? "#409aed" : "linear-gradient(45deg, blueviolet, rgba( 234, 34, 79, .99 ) )";

	}

}

function ini()
{	
	const messages = document.body.querySelector( `#messages` );

	messages.addEventListener( "DOMNodeInserted", eventHandler, false );

}

ini();