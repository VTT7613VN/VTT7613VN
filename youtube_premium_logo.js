/*
* Chỉnh sửa Logo YouTube thành Premium cho Shadowrocket
* Cơ chế: Ghi đè trường 'logo' trong phản hồi JSON/Protobuf
*/

let body = $response.body;
if (body) {
    try {
        // Thay thế chuỗi logo mặc định bằng logo premium trong dữ liệu hệ thống
        body = body.replace(/\"logo\"/g, '\"premium_logo\"');
        body = body.replace(/\"branding_logo\"/g, '\"premium_branding_logo\"');
        $done({ body });
    } catch (e) {
        $done({});
    }
} else {
    $done({});
}
