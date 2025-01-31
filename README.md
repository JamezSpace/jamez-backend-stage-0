# HNG Stage 0 Backend API

## Project Overview
This is a public api developed for the HNG12 internship Stage 0 task. It provides:
- My registered email used for the HNG 12 slack workspace.
- The current date time in ISO 8601 format UTC.
- The GitHub repository URL for my project's codebase.

## Technology Stack 
- Programming Language: TypeScript (Node js)
- Framework: Express.js
- Hosting platform: Render
- Version control: GitHub

## API documentation 

### Base URL
https://jamez-backend-stage-0.onrender.com

### Endpoint
<b> To access any endpoint, base url must be suffixed with '/api' then follwed by the enpoint</b>

GET /
<br> Response format (404 Not Found) 

```
Route Not Found!
```

<br>

GET /api/
<br> Response format (200 OK) 

```
{
    "email" : "my-email@example.com",
    "current_datetime" : "2025-01-31T08:41:33.710Z",
    "github_url" : "https://github.com/JamezSpace/jamez-backend-stage-0.git"
}
```

## Setup Instructions

### 1. Clone the Repository
```
git clone https://github.com/JamezSpace/jamez-backend-stage-0.git
cd jamez-backend-stage-0
```
### 2. Install Dependencies
```
npm install
```
### 3. Run Locally
```
npm run dev
```

The API will start on http://localhost:4200.


## Hire Developers
Looking for Node.js developers? Check out: <br>https://hng.texh/hire/nodejs-developers