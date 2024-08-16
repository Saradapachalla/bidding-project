## Market Place Bidding Project

### Introduction
We are building a Market Place where people can post contract jobs to be performed. The jobs are bid on in an auction format similar to eBay but for jobs/tasks instead products.
The Market Place has two actors:
1. Poster: Person looking for someone to complete a specific job/task.
2. Bidder: Self-employed individual that isbidding on work at a fixedprice.

### Features
The site has a home page that:
● Displays the 10 most recently published job postings.
● Displays the top 10 most active and open jobs (measured by
number of bids).
● Includes a link to publish a new job posting.
● The site has a page allowing new jobs to be posted that:
● Displays a form collecting the following data points:
● Job description with maximum length of 16KB.
● Job requirements with maximum length of 16KB.
● Name and contact info of the job poster.
● Displays the current lowest bid amount.
● Displays the number of bids.
● Displays the auction expiration date/time and time remaining to
bid.
● Includes a form for placing a bid.
● The system:
● Automatically closes bidding when the posting expiration
date/time is reached.
● Automatically assigns the lowest Bidder as the winner of the
auction when the auction is closed.

### Installation
#### Prerequisites
Prerequisites are Node.js, Docker

### `git clone https://github.com/Saradapachalla/bidding-project`

In the project directory, you can run:
### `npm install`
### `npx tsc --watch`
### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:8000](http://localhost:8000) to view it in your browser.

For Graphql - Open [http://localhost:8000/graphql](http://localhost:8000/graphql) to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Technologies Used
Frontend: React. TypeScript, Graphql, Apollo client, Ant design 
Backend: Node.js, Express, Graphql Apollo server, Express server, TypeScript, Prisma.
Database: PostgreSQL
Others: VS Code, Docker Desktop.
