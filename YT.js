/*
* Script đổi logo YouTube Premium 2026
*/
let obj = JSON.parse($response.body);
if (obj.responseContext) {
    // Mã này can thiệp vào luồng dữ liệu hiển thị của YouTube
    obj.logo = {"premiumLogoRenderer": {"unlimitedSubscribedBadge": {"unlimitedBadgeRenderer": {"badge": {"item": {"unlimitedBadgeContentsRenderer": {"icon": {"iconType": "YOUTUBE_LOGO_PREMIUM"}}}}}}}};
}
$done({body: JSON.stringify(obj)});
