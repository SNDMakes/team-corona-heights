# Team Corona Heights

See it in action at http://sndmakes.github.io/team-corona-heights/

## Building

Search data is stored in a Google Spreadsheet for editing and moderation. When you're ready to publish updated content, you need to generate updated JSON to power the search:

1. Run `make install` the first time to ensure you have dependencies installed
2. Run `make` to pull from the Google spreasdsheet and create an updated `clips.json` file, generate thumbnails, and deploy the app.

You should see updated data instantly at http://clips.gifs.is/

## Our ideas

### Members

* Angelica Rogers, wireframes and visual design
* Ashley Wu, frontend
* Aviva Loeb, content curation and sorting
* Dave Stanton, search and deployment

### Inspirations for community building

* Newsletters
* Dribble
* StackOverflow
* Kerning and other design game for learning

### Idea generation thought fragments

* Neighborhood forums
* Maybe related to SND regions?
* Topic and geographic areas
* Physical and virtuals meetups
* Moderators
* Weekly newsletter
* Remix based on open-source Sketch files
* Daily challenge
* Small 5-minute bits
* Not purely educational, more community based
* What is the goal of learning? Color
* Designs that died … didn’t make it - what happens to them?
* Story forms gallery 
* Individual orgs have Tumblr or other blogs
* Aggregate or submissions for how we treat different kinds of info (e.g. stocks, obits, public opinion polls)
* Story forms gallery
* Network of Dribbble accounts
* Whitelist organizations through some submission process
* Weekly newsletter of the most loved design from the last week
* Website directory for the Dribbble feeds of participating organizations

### What is your idea? What was your thought process? 

* Curation for news design story forms (similar to http://pttrns.com/)
* Being able to search by concept, organization and platform and filter by popularity 
* Allow conversations (comments)
* Distribute a digest (email newsletter)
* Current sites like Dribbble or Pttrn are more for product design and UI/UX concepts, don’t meet the niche that is news design
* Connect to SND Website
* Aggregate some content from personal/organization sites in the beginning
* Incentivize users to post/share using a points system with rewards

### What problem are you solving and why is this problem worth solving? For whom? 

Individual news designers have to spend a lot of time to find current news design best practices and inspiration. Typically this takes the form of blog and Tumblr trawling and bookmarking. This current behavior makes it difficult to refer back to specific design forms later when you are presented with a challenge. 

* I don’t know how different organizations are handling different kinds of news design
* Why were choices made? (across different platforms)
* There isn’t cross-pollination of design ideas between news and other design communities
* Creates conversation around designs, outside of conversation had between co-workers. 
* Designers can save their favorite story presentations in one place that can be easily filtered
* Gives news organizations distributable directories for collecting/tracking their design projects
* Points earned (like hotel loyalty program) that gives you some freebies from SND (e.g. free awards entry)

### What is the current state of your project? Have you divided out the work? Have you written up a work plan? 

Functional prototype with duct-tape dependencies. 

* Angular frontend
* Meteor search
* Wufoo forms
* Google Spreadsheets for data store and cleaning
* `make` tasks for build and deploy (should 

### Work plan

#### Find design blogs from companies or prominent influencers

* http://bostonglobedesign.tumblr.com/
* http://washingtonpost-design.tumblr.com/
* http://www.charlesapple.com/
* http://chartsnthings.tumblr.com/
* http://blog.apps.npr.org/work/
* http://www.newseum.org/todaysfrontpages/
* http://www.usatoday.com/topic/E01C4890-85A2-4E0B-A3DD-58BD88E71251/interactive-graphics/
* http://www.theguardian.com/graphics
* https://www.texastribune.org/data/
* https://www.revealnews.org/data/
* http://garciamedia.com/blog
* https://www.facebook.com/PhxDesignStudio/?fref=ts
* http://fivethirtyeight.com/interactives/
* http://www.snd.org/2015/03/winners-list-2014-best-of-digital-design-competition/
* http://www.malofiejgraphics.com/wp-content/uploads/2016/03/M24_-AWARDS-LIST_OK.pdf (ugh sorry, PDF no links..)
* https://www.facebook.com/startribunedesign/?fref=ts
* https://www.facebook.com/designstudiosgannett/?fref=ts
* http://www.nytimes.com/interactive/2015/04/22/upshot/happy-birthday-upshot.html
* http://projects.fivethirtyeight.com/
* http://interactivenarratives.tumblr.com/
* Behance 
* https://www.facebook.com/NABJ-Visual-Task-Force-139365296089811/
* SPD 
* AIGA 
* http://yourshot.nationalgeographic.com/
* http://depot.thethrust.net/

#### Find end-of-year collections for organizations

* 2015 NYT graphics
* 2015 Washington Post graphics
* 2015 Los Angeles Times graphics
* 2014 Huff Po Year in Graphics

#### Evaluate platform integrations

##### Dribbble

* Third-party has to approve of accounts in order to submit
* Too much friction to enter and upload I think maybe at least for a prototype
* Costs $200/yr for a team of 20 people :’-(

##### Hugo (static site generator)

* We could give contributor GitHub access to people from each org that want to submit
* Also any can submit via forks
* Pull request templates for how to contribute and whatnot
* Disqus for comments

##### MailChimp

* Pulls in RSS

##### Twitter

* Tweet new posts

### Taxonomies

* Topics (political option)
* Organizations (NPR)
* Designers (Mary, Jane, Bob)
* Types (map)
* Platforms (iPhone, magazine, Apple Watch)
* Need a link back to the source
* How would we do parts of the whole?

### Why have previous attempts failed?

#### Interactive Narratives

* Dated website design
* Can be an ONA member to post ($75 a year membership) or can fill out a form to post without membership
* Very few comments

#### News Page Designer

* Hard to browse 
* Site looks dated
* Not enough information to go along with the post (basic run-down of story)
* People host their designs on their own personal websites
* Groups available to join on the sidebar are not monitored or specific enough, very random
* Forum is mixed in with the front page, messy
* Specific to one platform in an era of multi platforms 

#### Charles apple blog

* Too time consuming for one person to maintain
* HOWEVER, love that there are cutaways/separate parts of web designs featured




