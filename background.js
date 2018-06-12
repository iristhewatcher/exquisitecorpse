chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create("corpse.html",
    {  id: "CorpseID",
       state: "fullscreen",
    }
  );
});
