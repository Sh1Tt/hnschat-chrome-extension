

document.addEventListener("DOMContentLoaded", () =>
{
    const submitHandler = () =>
    {
        alert( "OK" );
        chrome.runtime.sendMessage({ msg: "save", data: "databody" }, (response) => {
            // If this message's recipient sends a response it will be handled here 
            if (response) {
                // do cool things with the response
                // ...    
                alert( "hi" );
            }
        });    
    }

    const w = document.querySelector( `#extension_width`);

    const h = document.querySelector( `#extension_height`);

    const b = document.querySelector( `#options_submit` );

    b.addEventListener( "click", submitHandler, false );

}, false);