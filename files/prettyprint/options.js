// options.js
const limit = { height: 600, width: 800, min: 280 };

const submitHandler = e =>
{
	e.preventDefault();

	const h = document.querySelector( `#popup-height` ).value;

	const w = document.querySelector( `#popup-width` ).value;

    const s = document.querySelector( `#popup-source` ).value;

    if ( h > limit.height )
    {
        alert(`height cannot exceed max-height of the extension (${limit.height}).`);

        document.querySelector( `#popup-height` ).value = limit.height;

        return;

    }
    
    if ( w > limit.width )
    {
        alert(`width cannot exceed max-width of the extension (${limit.width}).`);

        document.querySelector( `#popup-width` ).value = limit.width;

        return;

    }

    if ( h < limit.min || w < limit.min )
    {
    	alert(`it cannot be less then ${limit.min} :(.`);

    	if ( h < limit.min )
    	{ 
    		document.querySelector( `#popup-height` ).value = limit.min;

    		return;
    	}

    	document.querySelector( `#popup-width` ).value = limit.min;

 		return;

    }

	chrome.storage.sync.set({"settings": { width: w, height: h, source: s }}, () =>
	{
		close();

	});

}


const handler = () =>
{
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
			console.log( err );

			__.w = 324;

			__.h = 600;

			__.s = "https://hnschat/";

			chrome.storage.sync.set({"settings": { width: __.w, height: __.h, source: __.s }});

		}
		
		document.querySelector( `#popup-width` ).value = __.w;
		
		document.querySelector( `#popup-height` ).value = __.h;

		document.querySelector( `#popup-source` ).value = __.s;		

		document.querySelector( `#popup-submit` ).addEventListener("click",submitHandler,false);

	});

}

document.addEventListener("DOMContentLoaded",handler,false);