var siteName = document.getElementById("websiteName");
var siteUrl = document.getElementById("websiteUrl");
sites = [];

function addSite() {
    var site = {
        names : siteName.value,
        url : siteUrl.value
    }
    sites.push(site);
    console.log(sites);
    clear();

}
function clear() {
    siteName.value = ""
    siteUrl.value = ""
}