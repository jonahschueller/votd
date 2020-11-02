### REST-API for vodt

#### Overview

What can the REST-API do?

- Fetching polls:
  - Latest polls ✅
  - Most popular polls ✅
  - Polls by ID ✅

### Schema

##### /polls/:id

This path will fetch the poll with the identifier specified in **:id**. In case the poll doesn't exist the API will send you an error.


##### /polls/latest

This path will send you the latest polls.

###### Parameters

_limit:_ The limit parameter will limit the amount of polls the API sends to you. The overall maximum is 50 polls.

Example:
```
curl <api-endpoint>/polls/latest/?limit=10
```

This will give you the 10 latest polls.


##### /polls/popular

This path will send you the most popular polls.

###### Parameters

_limit:_ The limit parameter will limit the amount of polls the API sends to you. The overall maximum is 50 polls.

Example:
```
curl <api-endpoint>/polls/popular/?limit=10
```

This will give you the 10 latest polls.