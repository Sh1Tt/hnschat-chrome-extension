// options.js
const heightLimit = 600;

const submitHandler = e =>
{
	e.preventDefault();

	let h = document.querySelector( `#height` ).value;

	let w = document.querySelector( `#width` ).value;

    const src = document.querySelector( `#src` ).value;

    if ( h > heightLimit )
    {
        alert( "height cannot exceed max-height of the extension (600px).");

        return;

    }

    h = h < 1 ? 1 : h;

    w = w < 1 ? 1 : w;

	chrome.storage.sync.set({"data": { width: w, height: h, src: src }}, () =>
	{
		close();

	});

}

const handler = () =>
{
	chrome.storage.sync.get("data", response =>
	{
		document.querySelector( `#height` ).value = parseInt( response.data.height ) || 600;;

		document.querySelector( `#width` ).value = parseInt( response.data.width ) || 320;

        document.querySelector( `#src` ).value = response.data.src || "https://hnschat/";

		document.querySelector( `#submit` ).addEventListener("click",submitHandler,false);
	
	});

}

document.addEventListener("DOMContentLoaded",handler,false);