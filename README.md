# Team Corona Heights

See it in action at http://sndmakes.github.io/team-corona-heights/

## Building search data

Search data is stored in a Google Spreadsheet for editing and moderation. When you're ready to publish updated content, you need to generate updated JSON to power the search:

1. Run `make install` the first time to ensure you have dependencies installed
2. Run `make sheet-to-json` to pull from the Google spreasdsheet and create an updated `clips.json` file

You should see updated data instantly at http://clips.gifs.is/
