/*
const app = require('../index'); // Get test agent
const request = require('supertest'); // Get test agent

// Test '/transactions' API
describe("GET /transactions ", () => {

    test("API should respond with JSON Array", async () => {
      const response = await request(app).get("/transactions");
      expect(response.statusCode).toBe(200);
      expect('Content-Type', /json/);
      expect(response.body.length).toBe(6);
      expect(response.body).toHaveProperty("page");
      expect(response.body).toHaveProperty("currency");
      expect(response.body).toHaveProperty("country");
      expect(response.body).toHaveProperty("limit");
      expect(response.body).toHaveProperty("search");
      expect(response.body).toHaveProperty("transactions");
      done();
  
    });

});

*/

