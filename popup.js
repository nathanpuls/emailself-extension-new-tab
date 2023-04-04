document.getElementById("send-email").addEventListener("click", function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var subject = tabs[0].title;
    var body = tabs[0].url;
    var emailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent("natepuls@gmail.com") + "&su=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    chrome.tabs.create({url: emailUrl});
  });
});
