# hng12-api-

HNG12 API – Stage 0 Task

This is my submission for the HNG12 Internship Stage 0 task. It's a public API that returns:
My registered email (for HNG12 Slack)
The current date and time in ISO 8601 format (UTC)
A link to this GitHub repository

It’s built using TypeScript and Express.js and is deployed online so you can test it.

How to Set Up & Run the API Locally
1. Clone the Repository
First, download the code to your local machine:
    git clone https://github.com/Farouq-okeniyi/hng12-api-.git
    cd hng12-api-

2️. Install Dependencies
Make sure you have Node.js installed, then run:
    npm install

3️Start the API
To run the API locally, use:

npm run dev
By default, the server will start on http://localhost:4000/.

API Documentation
Endpoint: GET /
    This API responds with a simple JSON object containing the required details.

Example Response
{
  "email": "farouqokeniyi2004@gmail.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/Farouq-okeniyi/hng12-api-"
}

How to Test the API
Using Your Browser
    Open https://hng12-api-mkhr.onrender.com/ in your browser, and you should see the JSON response.


Useful Links
GitHub Repo: https://github.com/Farouq-okeniyi/hng12-api-
HNG Internship (Node.js Developers): https://hng.tech/hire/nodejs-developers