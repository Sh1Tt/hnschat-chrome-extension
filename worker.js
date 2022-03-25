// worker.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) =>
{
    if (message==="fired")
    {
        const optionsNotification = {
            type: "basic",
            iconUrl: "/images/notify-128.png",
            title: "hnschat",
            message: "Unread chat message..",
            priority: 2
        };
        
        chrome.notifications.create('NOTIFICATION_ID', optionsNotification );

        sendResponse("ok");

    }

});