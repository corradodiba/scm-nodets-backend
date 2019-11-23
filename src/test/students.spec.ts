import chai from "chai";
import chaiHttp = require("chai-http");
import "mocha";

const PATH = "http://localhost:3050/students";

chai.use(chaiHttp);

describe("Test API from Student", () => {
  it("should return response on call", () => {
    chai
      .request(PATH)
      .get("/5dd702b1ab5ec10aa49fa108")
      .end((err, data) => {
        console.log(data.body);
      });
  });
});
