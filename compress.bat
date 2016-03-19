rem **** For Windows installed Node.js and UglifyJS ****
cmd /c "uglifyjs -c -m --source-map flmmlonhtml5.min.js.map -o flmmlonhtml5.min.js flmmlonhtml5.js"
cmd /c "uglifyjs -c -m --source-map flmmlworker.min.js.map -o flmmlworker.min.js flmmlworker.js"
cmd /c "uglifyjs -c -m --source-map flmmlplayer.min.js.map -o flmmlplayer.min.js flmmlplayer.js"
pause
