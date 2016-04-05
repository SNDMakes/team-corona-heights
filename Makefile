all: sheet-to-json thumbnails upload

install:
	@npm install -g google-spreadsheet-to-json
	@brew install imagemagick

sheet-to-json:
	@gsjson 1kuu0_8i1S5hj9hZffnlG5OqQBcxWk6kN6-oqchgfoq4 clips.json
	@sed -i "" -- 's/publishedUrl/publishedURL/g' clips.json

thumbnails:
	@rm -rf img/thumbs/
	@mkdir img/thumbs/
	@cd img && bash -c 'for f in *.jpg; do convert $$f -resize 300 thumbs/$$f; done'

upload:
	@git pull origin master
	@git add clips.json
	@git commit -m "Updated clips.json"
	@git push origin master