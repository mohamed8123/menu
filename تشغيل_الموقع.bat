@echo off
chcp 65001 > nul
echo ========================================================
echo   جاري تشغيل سيرفر مطعم مشاوي الأصيل محلياً...
echo ========================================================
echo   الموقع متاح على الرابط: http://localhost:8080
echo   اضغط Ctrl+C لإيقاف السيرفر في أي وقت.
echo ========================================================

powershell -NoProfile -ExecutionPolicy Bypass -Command "$port = 8080; $listener = New-Object System.Net.HttpListener; $listener.Prefixes.Add('http://localhost:' + $port + '/'); $listener.Start(); Start-Process ('http://localhost:' + $port + '/'); Write-Host 'السيرفر يعمل الآن بنجاح على http://localhost:8080' -ForegroundColor Green; while ($listener.IsListening) { $context = $listener.GetContext(); $request = $context.Request; $response = $context.Response; $urlPath = $request.Url.LocalPath.TrimStart('/'); if ([string]::IsNullOrEmpty($urlPath)) { $urlPath = 'index.html' }; $filePath = Join-Path (Get-Location) $urlPath; if (Test-Path $filePath -PathType Leaf) { $bytes = [System.IO.File]::ReadAllBytes($filePath); $ext = [System.IO.Path]::GetExtension($filePath).ToLower(); $contentType = switch ($ext) { '.html' { 'text/html; charset=utf-8' } '.css' { 'text/css; charset=utf-8' } '.js' { 'application/javascript; charset=utf-8' } '.json' { 'application/json' } '.png' { 'image/png' } '.jpg' { 'image/jpeg' } '.svg' { 'image/svg+xml' } default { 'application/octet-stream' } }; $response.ContentType = $contentType; $response.ContentLength64 = $bytes.Length; $response.OutputStream.Write($bytes, 0, $bytes.Length) } else { $response.StatusCode = 404; $err = [System.Text.Encoding]::UTF8.GetBytes('File Not Found'); $response.OutputStream.Write($err, 0, $err.Length) }; $response.OutputStream.Close() }"
pause
