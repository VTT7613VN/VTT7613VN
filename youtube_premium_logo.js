/*
Sửa đổi logo YouTube thành Premium cho Shadowrocket
*/

let body = $response.body;
if (body) {
    // Tìm kiếm từ khóa logo trong luồng dữ liệu và thay thế
    body = body.replace(/\"logo\"/g, '\"premium_logo\"');
    $done({ body });
} else {
    $done({});
}
