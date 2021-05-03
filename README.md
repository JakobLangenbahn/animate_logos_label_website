# Code for the labeling website belonging to the Team Project "SVG Logo Animation using Machine Learning" at the University of Mannheim

This website belongs to the GitHub repository https://github.com/J4K08L4N63N84HN/animate_logos.git.
It can be visited at https://animate-logos.web.app/.
The website is based on a Google Firebase backend and used to rate SVG logo animations. 
These ratings are then used as examples to train a model which learns to generate aesthetic animations for a given SVG logo.

The website consists of three main pages:
- Logo Animation Rating: A given 5-second logo animation can be rated from "very bad" to "very good".
- Path Animation Rating: For a given logo animation, the animation of each animated element can be rated from "very bad" to "very good" individually.
- Path Selection: For a given logo, up to 8 elements, which should be animated, can be chosen.

Besides that, the website contains a Highscores table, an About Us page, a Data Protection Declaration, a Legal Disclosure and the possibility to change the Cookie preferences.

## Usage

The code contains HTML, CSS, and JavaScript files and can be opened using Visual Studio Code.
In order to have a look at the Frontend without functionality, just clone this Repository and open one of the .html files in Visual Studio Code with the Live Server Extension.
For full functionality, the setup of a Google Firebase project is required.
