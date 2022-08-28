
# RedFeed:

RedFeed demonstrates how to use Redis caching to increase efficiency in an AWS DynamoDB powered Serverless application and make it load faster.

<br/>

_RedFeed's System Architecture Before using Redis:_

![RedFeed's System Architecture Before using Redis](/public/docs/sdb.png)

</br>

_RedFeed's System Architecture After using Redis:_

![RedFeed's System Architecture After using Redis](/public/docs/sda.png)

</br>

_RedFeed's API:_

![RedFeed's API](/public/docs/page1.png)

</br>

_Video describing RedFeed:_

[<img alt="RedFeed demonstrates the efficiency of using Redis in an AWS Serverless app" src="/public/docs/redis.png"/>](https://www.youtube.com/watch?v=anUyyh1qJYo)

<br/>

## How Redis is Used:

The project demonstrates how to use Redis to create a faster Amazon DynamoDB based RESTful API with pagination and a serverless framework Architecture.

Redis is used for caching purpose. 

If the API data being fetched is not frequently changing then we cache the previous API result data and on the next requests re-send the cached data from Redis.

The API is a seeded dataset of crypto financial transactions. A transaction API fetched will look like below.


```json

{
    "page":"",
    "currency":"",
    "country":"",
    "limit":"",
    "search":"",
    "transactions":[
        {
            "Transaction_Id": "", 
            "By": "", 
            "Amount": "", 
            "Country": "", 
            "Currency": "", 
            "Created_At": "",
            "Bitcoin_Address": "", 
            "Updated_At": "",
            "Customer_Email": "", 
            "Customer_Id": ""
        },
        {
            "Transaction_Id": "", 
            "By": "", 
            "Amount": "", 
            "Country": "", 
            "Currency": "", 
            "Created_At": "",
            "Bitcoin_Address": "", 
            "Updated_At": "",
            "Customer_Email": "", 
            "Customer_Id": ""
        }]
}

```

<br/>


Redis is initialized.

```js

const redis = new Redis({
    port: 6379,
    host: "127.0.0.1",
    tls: {},});

```

Redis checks if data is already cached, then returns the cached data if available.

Else, it queries the database.


```js

const cachedResult = await redis.get(page);

if (cachedResult) {
    console.log('Returning cached data');

    return {
        statusCode: 200,
        body: JSON.stringify(JSON.parse(cachedResult))
      };
} 

```

<br/>

## Redis Performance is Faster:

Using Redis to return cached data can make the application load faster which is very important when we either have a lot of data in the response or the backend takes time to send the response or we're making an API call to get data from the database.

<br/>

## RedFeed Installation:

Install the following applications on your PC before installing RedFeed.

- [Node.JS](https://nodejs.org/en/download/current/), v16.9.1 

- Redis (For Linux Users), v7.21.1

- [Memurai](https://www.memurai.com/get-memurai) (For Windows Users), v2.0.3.

</br>

### Download RedFeed:

First, download or clone RedFeed from Github:

Go to https://github.com/p2pteamz/redfeed and download or clone RedFeed.

Then install Node.JS project dependency.

</br>

### Install NPM dependencies:

Open the unzipped or cloned RedFeed app folder in your favorite code editor (I use VS Code) and in the command line terminal of the project folder.

</br>

Install Serverless Framework:

_npm i -g serverless_

</br>

Install Serverless Offline:

_npm i -g serverless-offline_

</br>

Install Serverless Bundle:

_npm i --save-dev serverless-bundle_

</br>

Install the app's npm dependency modules. 

_npm install_

</br>

Run Serverless Offline:

_serverless plugin install -n serverless-offline_

</br>

Install DynamoDB Offline:

_sls dynamodb install_

</br>

## Running RedFeed:

You can now run the RedFeed app by executing the CLI command below.

_sls offline start_

</br>

If the run was successful, you should see the message "Server ready: http://localhost:3000 🚀" in your console.

</br>

## API Navigation:

Open your browser and visit 'http://localhost:3000/dev/transactions ' to view the raw JSON data. 

</br>

The RESTful URL Endpoints have the following parameters.

> GET/  dev/transactions?cur=BTC&cc=BW&lm=10&s=Tom&pg=1

</br>

_API Endpoint Parameter definitions:_

> "cur" - crypto currency type. Eligible currency codes: "ETH", "BTC", "LTC", "USDT" 

> "cc" - country code. Eligible codes: "US", "NG", "SA", "BW", "GH

> "lm" - page size limit. Integer only. Setting it to '10' means you want only 10 results per page.

> "s" - customer Name. String text only.

> "pg" - page number. Integer only.

</br>

_Examples;_

To get page 1 of the API, send a GET request like;

GET/ http://localhost:3000/dev/transactions?cur=BTC&cc=NG&lm=10&s=&pg=1

</br>

To get page 2 of the API, send a GET request like;

GET/ http://localhost:3000/dev/transactions?cur=BTC&cc=NG&lm=10&s=&pg=2

