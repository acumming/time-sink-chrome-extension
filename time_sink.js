(function() {
    if (window && document && document.title && window.location) {
        var hostname = window.location.hostname.replace(/^www./i, "");
        if (hostname) {
            document.title += " [[" + String(hostname) + "]]";
        };
    };
})();
