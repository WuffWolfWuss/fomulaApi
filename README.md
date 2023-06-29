# Formula 1 API

This project allow user to crawl data from [fomula1's race result](https://www.formula1.com/en/results.html/2023/races.html) page content. And put it on your own database.
For testing i only crawing race result data from 2020 - 2023.

## Installation

Once download source code, open with any IDE(VS Code) and install all dependencies of the project using command in your terminal

```bash
npm install
```

Because this project using MongoDB as database you have to enter your Mongo_URI to the MONGO_URL field in 'src-ts/server.ts'
[click here](https://www.mongodb.com/docs/atlas/driver-connection/#connect-your-application) or [here](https://www.mongodb.com/docs/guides/atlas/connection-string/) for more info.

```python
const MONGO_URL = <ENTER YOUR MONGO_URI HERE>;

#your uri should look like this
const MONGO_URL = ""mongodb+srv://<username>:<password>@<clusterName>.mongodb.net/<databaseName>?retryWrites=true&w=majority"";
```

When all that done, run command to start server
```bash
npm run server
```

If the connect success, your terminal should show
```python
LISTEN TO PORT...
```

## Testing using POSTMAN
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/21641871-03c4cd4e-2f30-4058-b337-c3c97c281194?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D21641871-03c4cd4e-2f30-4058-b337-c3c97c281194%26entityType%3Dcollection%26workspaceId%3D9f9f0a6c-69cc-4aa6-8773-978a5714d9d6)

The first get request is just a simple ('get all races') will return all race result from the data base.

The second API is a POST request that allow you return result match query conditions in the body.
The query condtion can be single condition and multiple conditions: 
```python
#this will return all result match year 2023.
{
    "year": 2023
}

#return all result match year 2023, with the car 'Red Bull Racing Honda RBPT' .
{
    "car": "Red Bull Racing Honda RBPT",
    "year": 2023
}
```

I combine all get request allows searching for contents by year, winner, team,... and searching using various conditions
on one POST request. The request suports these fields for searching:
- grandPrix: String
- year: Number
- winner: String
- car: String   //in formula1 web site, the team name is also the car name.
- lap: String
- time: String
