import React from "react";

function Page4() {
  return (
    <section>
      <h1>Building an API</h1>
      <p>
        When building an API, you first want to determine what technologies you
        want to use to build everything out with. Personally, I prefer, and
        recommend using NodeJS with Express, Dotenv and MongoDb. After you
        determine the technologies, you want to use and, in this case, we are
        going through the steps of the above technologies, you will want to use
        “npm init -y” unless you want to have control of what the information in
        the package.json file. After installing everything you need, you will
        want to build out a server.js file that will help the API run. Next, you
        will need to build out an app.js file that uses Express to run the API
        on whatever endpoints you want to add, as well as error handling for if
        an invalid endpoint is requested or if something is broken server-side
        and will contain the connection to you MongoDB. Next, you will build out
        your data models and routes so the user can input and receive data
        through your API to MongoDB. After functionality is finished and
        thoroughly tested, you will then push your code to a github repo and if
        you choose to add a front-end UI then you can deploy the completed
        project to Heroku or Netlify.
      </p>
    </section>
  );
}

export default Page4;
