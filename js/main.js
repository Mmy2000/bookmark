var siteName = document.getElementById("websiteName");
var siteUrl = document.getElementById("websiteUrl");
var sites;

if (localStorage.getItem("userSites")) {
    sites = JSON.parse(localStorage.getItem("userSites"));
    displayBookmark();
} else {
    sites = [];
}

function addSite() {
    var siteNameValue = siteName.value.trim();
    var siteUrlValue = siteUrl.value.trim();

    if (siteNameValue === "" || siteUrlValue === "") {
        alert("Please enter both site name and URL.");
        return;
    }

    var urlPattern = /^((http|https|ftp):\/\/)/;
    if (!urlPattern.test(siteUrlValue)) {
        alert("Please enter a valid URL with http:// or https://");
        return;
    }
    var site = {
        names: siteName.value,
        url: siteUrl.value
    }
    sites.push(site);
    localStorage.setItem("userSites", JSON.stringify(sites))
    console.log(sites);
    clear();
    displayBookmark();
}

function clear() {
    siteName.value = ""
    siteUrl.value = ""
}

function displayBookmark() {
    var urlBox = ''
    for (var i = 0; i < sites.length; i++) {
        urlBox += `<tr>
                        <th scope="row">${i+1}</th>
                        <td>${sites[i].names}</td>
                        <td><a target="_blank" href="${sites[i].url}"  class="btn btn-info "><i class="fa-solid fa-eye pe-1"></i>Visit</a></td>
                        <td><button onclick="deleteUrl(${i})"  class="btn btn-danger"><i class="fa-solid fa-trash-can pe-1"></i>Delete</button></td>
                    </tr>`

    }
    document.getElementById("rowData").innerHTML = urlBox;
}

function deleteUrl(id) {
    sites.splice(id, 1)
    localStorage.setItem("userSites", JSON.stringify(sites))
    displayBookmark();
}
