# FreeCodeCamp Random Exercise Generator

This is a React app to help keep those coding skills sharp! A user clicks on the "Challenge Me!" button, and a link to a randomly selected lesson from FreeCodeCamp is displayed.

## Installation

TBD? It's a website, so oughta easy to access from any browser. Code can be modified with any common text editor.

## Outline

?? where do I put the onClick? I think it will be in the linkmaker?

- data model:
  -- to start, hand built array of objects in data.js
  -- this should be fancier with either
  --- a freecodecamp API?
  --- web scraping to go round up all the relevant links?
  -- for now, page will simply display: "Selecting a random lesson from X, Y, Z courses on freeCodeCamp". Eventually, will have the option of user selection (checkboxes) to determine which courses to pull from.

- index.js
  -- imports:
  --- react
  --- reactDOM
  --- confetti (b/c learning is fun!)
  --- LinkMaker from LinkMaker.js
  --- data model to feed into LinkMaker
  -- to really make it Reactive, ought to have separate parts for each language you want to practce; for now, just the one link

- LinkMaker.js
  -- functional component to render link to challenge
  -- link isn't very pretty; rework this to have just the title, and link in the href
  -- also a button?

- styles.css
  -- keep it super simple

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
