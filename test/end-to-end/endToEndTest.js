const chai = require("chai");
const supertest = require("supertest");
const app = require("../../server"); // Replace with the path to your Express app file

const { expect } = chai;
const request = supertest(app);

describe("Get my all Posts End-to-End Tests", () => {
  let authToken; // This will hold the authentication token

  // Assuming you have a route for user login, authenticate and get the token
  before(async () => {
    const loginResponse = await request.post("/login").send({
      /* your login credentials here */
      userName: "ashish",
      password: "ashish",
    });

    authToken = loginResponse.body.data;
  });

  it("Should be able to retrieve all the posts of the user", async () => {
    const response = await request
      .get("/posts")
      .set("Authorization", `Bearer ${authToken}`);

    expect(response.status).to.equal(200);
    expect(response.body.success).to.be.true;
    expect(response.body.message).to.equal("Successfully returned all posts");
  });
});

describe("Get my Single Post End-to-End Tests", () => {
  let authToken; // This will hold the authentication token

  // Assuming you have a route for user login, authenticate and get the token
  before(async () => {
    const loginResponse = await request.post("/login").send({
      /* your login credentials here */
      userName: "ashish",
      password: "ashish",
    });

    authToken = loginResponse.body.data;
  });

  it("Should be able to retrieve single posts from the logged in user", async () => {
    const response = await request
      .get("/posts/:postId")
      .set("Authorization", `Bearer ${authToken}`);

    expect(response.status).to.equal(200);
    expect(response.body.success).to.be.true;
    expect(response.body.message).to.equal("Successfully returned post");
  });
});
