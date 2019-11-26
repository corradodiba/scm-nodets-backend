import chai from "chai";
import chaiHttp = require("chai-http");
import "mocha";

const PATH = "http://localhost:3000/students";

chai.use(chaiHttp);

let expect = chai.expect;

describe(`GET/`, () => {
  it("should return an array, status code 200", () => {
    return new Promise(async (resolve) => {
      const students = await chai.request(PATH).get("/");
      expect(students.error).to.be.false;
      expect(students).to.have.status(200);
      expect(students.body).to.be.a("array");
      resolve();
    });
  });
});

describe(`GET/:id `, () => {
  let id: string;
  return new Promise(async (resolve) => {
    before(async () => {
      const result = await chai
        .request(PATH)
        .post("/")
        .send({
          fiscalCode: "HTGIII05N67B342G",
          name: "Pippo",
          surname: "Franco",
          dateOfBirth: new Date().toDateString()
        });
      id = result.body._id;
    });
    after(async () => {
      await chai.request(PATH).delete(`/${id}`);
    });
    it(" should return status 200 and a single JSON", async () => {
      const student = await chai.request(PATH).get(`/${id}`);
      expect(student).to.have.status(200);
      expect(student.body).to.have.property("fiscalCode");
      expect(student.body).to.have.property("name");
      expect(student.body).to.have.property("surname");
      expect(student.body).to.have.property("dateOfBirth");
    });
    it(" should return status 404", async () => {
      const student = await chai.request(PATH).get("/hello");
      expect(student).to.have.status(404);
      resolve();
    });
  });
});

describe("POST/", () => {
  let id: string;
  return new Promise(async (resolve) => {
    after(async () => {
      await chai.request(PATH).delete(`/${id}`);
    });
    it("should post a test obj, status 201 and a json body", async () => {
      const student = await chai
        .request(PATH)
        .post("/")
        .send({
          fiscalCode: "HTGORI05N67B342G",
          name: "Prova",
          surname: "Post",
          dateOfBirth: new Date().toDateString()
        })
        .set("Content-Type", "application/json");
      expect(student).to.have.status(201);
      id = student.body._id;
      resolve();
    });
  });
});

describe("PUT/:id", () => {
  let id: string;
  return new Promise(async (resolve) => {
    before(async () => {
      const result = await chai
        .request(PATH)
        .post("/")
        .send({
          fiscalCode: "HTGILI05B67B342G",
          name: "Prova",
          surname: "Put",
          dateOfBirth: new Date().toDateString()
        });
      id = result.body._id;
    });
    after(async () => {
      await chai.request(PATH).delete(`/${id}`);
    });
    it("should modifiy data, status 201 and return a json body", async () => {
      const student = await chai
        .request(PATH)
        .put(`/${id}`)
        .send({
          fiscalCode: "HTGIII05N67B342G",
          name: "Ciccio",
          surname: "Franco",
          dateOfBirth: new Date().toDateString()
        });
      expect(student).to.have.status(201);
      expect(student.body.before).to.have.property("surname");
      expect(student.body.before.name).to.be.string;
      resolve();
    });
  });
});

describe("DELETE/:id", () => {
  let id: string;
  return new Promise(async (resolve) => {
    before(async () => {
      const result = await chai
        .request(PATH)
        .post("/")
        .send({
          fiscalCode: "HTGAAA05N67B342G",
          name: "Prova",
          surname: "Delete",
          dateOfBirth: new Date().toDateString()
        });
      id = result.body._id;
    });
    after(async () => {
      await chai.request(PATH).delete(`/${id}`);
    });
    it("should delete a test obj, status 201", async () => {
      const student = await chai.request(PATH).delete(`/${id}`);
      expect(student).to.have.status(201);
      resolve();
    });
  });
});
