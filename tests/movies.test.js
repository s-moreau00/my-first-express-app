const request = require("supertest");
const app = require("../app");

describe("GET /api/movies", () => {
    it("should return all movies", async () => {
    const response = await request(app).get("/api/movies");
   
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
  });
});

describe("GET /api/movies/1", () => {
    it("should return 1st movie", async () => {
    const response = await request(app).get("/api/movies/1");
   
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
  });
});

describe("GET /api/movies/:id=0", () => {
    it("should return Not Found", async () => {
    const response = await request(app).get("/api/movies/:id=0");
   
    expect(response.status).toEqual(404);
  });
});
 