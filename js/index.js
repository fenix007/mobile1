document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    navigator.globalization.getLocaleName(
        function (locale) {
            alert(locale.value);
        },
        function (error) {
            alert(error);
        });
}