// Đoạn mã thay thế văn bản
let body = $response.body;
if (body) {
    // Tìm và thay thế chữ YouTube thành Premium
    body = body.replace(/"text":"YouTube"/g, '"text":"Premium"');
    $done({ body });
} else {
    $done({});
}
