# PopFlick!
A very decisive Movie Search Tool. Leave the thinking to our app!
### Deployed Version of Our Site: https://popflick.herokuapp.com/

# Project Team Members

* David Broxton -  Father of 2 kids. Wins the award for most modes of transit to commute to class (car, ferry, bus, foot)
* Dan Muldrew -  Dan is an avid hackathon addict. In his free time he likes to create new music.
* Tyler Walser - Microsoft Apprentice through the Apprenti program. New to coding and having a blast!
* Quinn Liu - An aspiring software developer who is a former biochemist working on renewable energy research under Department of Energy. She is currently learning front-end web development at Code Fellows.

# Our Problem Domain:

What is the problem we are solving?

With a lot of movies available out there to watch, it is hard to know which movies or shows you should try to watch next. No one likes to devote a chunk of time to a movie just to find out that the movie was no good. A lot of time is wasted simply scrolling through movie lists when that time could be spent relaxing and entertaining yourself instead.

What will be our solution to the problem?

What if there was a way to narrow down all of the movies out there and have a movie selection done for you? We would like to create an application in which it takes in a few of your favorite movies or tv shows compares data between them, and finds the highest comparison within a movie database. The application would finally return a single recommendation for you in which you can comfortably decide to watch.

What are the benefits to our solution?

There are services out there that perform this type of function, however, most of the time, they only provide selections for their own network and recommend too many titles (which defeats the purpose of a recommendation in the first place.)The benefit to our solution is you don’t have to think for yourself to decide a movie. Leave the thinking to our app!

# How our project is put together:

The PopFlick Project uses jQuery and Handlebars (HTML templating) to create a single-page application on the client side, along with a mobile-first, responsive UI.  A Node.js server interacts with the Movie Database API to retrieve and parse movie data, and also acts as an API to the PostgreSQL database. Deployed via Heroku, and planned/executed using Agile methodologies during a weeklong sprint.
