export default function ajaxGET(url) {
    var xmlhttp=new XMLHttpRequest();
    var result;
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            result = JSON.parse(this.responseText);
        }
    };
    xmlhttp.open("GET", url, false);
    xmlhttp.setRequestHeader("Authorization", "Token 5876e596bd4a4f94ef2f32f991d5b7d77e836507");
    xmlhttp.send();
    return result;
}