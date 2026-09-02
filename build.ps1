$nodeDir = "C:\Program Files\nodejs"
$env:PATH = "$nodeDir;$env:PATH"
& "$nodeDir\node.exe" "$nodeDir\node_modules\npm\bin\npm-cli.js" run build
