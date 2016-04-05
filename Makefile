all: sheet-to-json upload

install:
	@npm install -g google-spreadsheet-to-json

sheet-to-json:
	@gsjson 1kuu0_8i1S5hj9hZffnlG5OqQBcxWk6kN6-oqchgfoq4 clips.json

upload:
	@git pull origin master
	@git add clips.json
	@git commit -m "Updated clips.json"
        @git push origin master
