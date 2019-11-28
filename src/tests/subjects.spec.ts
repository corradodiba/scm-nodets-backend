import chai from "chai";
import chaiHttp = require("chai-http");
import "mocha";
import { PORT } from "../app";

const PATH = `http://localhost:${PORT}/subjects`;
let expect = chai.expect;
chai.use(chaiHttp);
describe(`Testing ${PATH} `, () => {
  describe(`GET / `, () => {
    it(" should return an array w/status code 200", async () => {
      const subject = await chai.request(PATH).get("/");
      expect(subject.error).to.be.false;
      expect(subject).to.have.status(200);
      expect(subject.body).to.be.a("array");
    });
  });

  describe(`GET /:id `, () => {
    let id: string;
    before(async () => {
      const subject = await chai
        .request(PATH)
        .post("/")
        .send({ name: "test get", hours: 0 });
      id = subject.body._id;
    });
    after(async () => {
      await chai.request(PATH).delete(`/${id}`);
    });
    it(" should return status 200 and a single JSON", async () => {
      const subject = await chai.request(PATH).get(`/${id}`);
      expect(subject.error).to.be.false;
      expect(subject).to.have.status(200).and.to.be.json;
      expect(subject.body).to.have.property("name");
    });
    it(" should return status 404", async () => {
      const subject = await chai.request(PATH).get("/blablabla");
      expect(subject).to.have.status(404);
    });
  });

  describe(" POST /", () => {
    let id: string;
    after(async () => {
      await chai.request(PATH).delete(`/${id}`);
    });
    it("should post a test obj w/ status 201 and a json body", async () => {
      const subject = await chai
        .request(PATH)
        .post("/")
        .send({ name: "test post", hours: 0 })
        .set("Content-Type", "application/json");
      expect(subject.error).to.be.false;
      expect(subject).to.have.status(201);
      id = subject.body._id;
    });
  });

  describe(" PUT /:id", () => {
    let id: string;
    before(async () => {
      const subject = await chai
        .request(PATH)
        .post("/")
        .send({ name: "test put", hours: 0 })
        .set("Content-Type", "application/json");
      id = subject.body._id;
    });
    it("should modifiy data w/ status 200 and return a json body", async () => {
      const subject = await chai
        .request(PATH)
        .put(`/${id}`)
        .send({ name: "test modified", hours: 0 });
      expect(subject.error).to.be.false;
      expect(subject).to.have.status(200);
      expect(subject.body.after).to.have.property("name");
      expect(subject.body.after).to.have.property("hours");
      expect(subject.body.after.name).to.be.string;
      expect(subject).to.have.headers;
      expect(subject.body.after.hours).to.be.a("number");
    });
    after(async () => {
      await chai.request(PATH).delete(`/${id}`);
    });
  });

  describe(" DELETE /", () => {
    let id: string;
    before(async () => {
      const subject = await chai
        .request(PATH)
        .post(`/`)
        .send({ name: "test delete", hours: 0 })
        .set("Content-Type", "application/json");
      id = subject.body._id;
    });
    it("should delete a test obj w/ status 200", async () => {
      const subject = await chai.request(PATH).delete(`/${id}`);
      expect(subject.error).to.be.false;
      expect(subject).to.have.status(200);
    });
  });
});
