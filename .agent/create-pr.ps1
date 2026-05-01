$ErrorActionPreference = "Stop"

$credInput = "protocol=https`nhost=github.com`n`n"
$cred = $credInput | git credential fill
$token = ($cred | Where-Object { $_ -like "password=*" }) -replace "^password=", ""

if (-not $token) {
  throw "No GitHub token found in git credential manager."
}

$prBody = @"
## Summary
- add Facebook to the footer social links
- update contact form delivery to help@zoemed.ai with Resend support
- add Google reCAPTCHA v3 verification and hide the newsletter subscribe checkbox
- refresh product mockup imagery/presentation in homepage sections

## Verification
- npm run build
"@

$payload = @{
  title = "Polish contact form and footer links"
  head = "C-AmaZinG:content/remove-drug-references"
  base = "main"
  body = $prBody
} | ConvertTo-Json -Compress

$response = curl.exe -s -X POST `
  -H "Authorization: Bearer $token" `
  -H "Accept: application/vnd.github+json" `
  -H "X-GitHub-Api-Version: 2022-11-28" `
  -H "User-Agent: codex-agent" `
  -d $payload `
  "https://api.github.com/repos/Medical-Transcribe/zoemd-website/pulls"

$json = $response | ConvertFrom-Json

if ($json.html_url) {
  $json.html_url
  exit 0
}

$response
exit 1
