import chai from "chai";
import chaiHttp = require("chai-http");
import "mocha";
import { ObjectID } from "bson";

const PATH = "http://localhost:3000/subjects";
let expect = chai.expect;
chai.use(chaiHttp);
describe(`Testing ${PATH} `, () => {
  describe(`GET / `, () => {
    it(" should return an array w/status code 200", (done) => {
      chai
        .request(PATH)
        .get("/")
        .end((err, data) => {
          expect(err).to.be.null;
          expect(data).to.have.status(200);
          expect(data.body).to.be.a('array');
          done();
        });
    });
  });
  describe(`GET /:id `, () => {
    let id: string;
    before(async () => {
      const subject = await chai.request(PATH).post("/").send({ name: "test get", hours: 0 });
      id = subject.body._id;
    });
    after(() => {
      chai.request(PATH).delete(`/${id}`).end()
    });
    it(" should return status 200 and a single JSON", (done) => {
      chai.request(PATH).get(`/${id}`).end((err, data) => {
        expect(err).to.be.null;
        expect(data).to.have.status(200).and.to.be.json;
        expect(data.body).to.have.property("name");
        done();
      });
    });

    it(" should return status 404", (done) => {
      chai.request(PATH).get("/blablabla").end((err, data) => {
        expect(data).to.have.status(404);
        done();
      });
    });
  });
  describe(" POST /", () => {
    let id: string;
    after(() => {
      chai.request(PATH).delete(`/${id}`).end();
    });
    it("should post a test obj w/ status 201 and a json body", (done) => {
      chai.request(PATH).post("/").send({ name: "test post", hours: 0 }).set('Content-Type', 'application/json')
        .end((err, data) => {
          expect(err).to.be.null;
          expect(data).to.have.status(201);
          id = data.body._id;
          done();
        });
    });
  });
  describe(" PUT /:id", () => {
    let id: string;
    before(async () => {
      const subject = await chai.request(PATH).post("/").send({ name: "test put", hours: 0 }).set('Content-Type', 'application/json');
      id = subject.body._id;
    });
    it("should modifiy data w/ status 200 and return a json body", (done) => {
      chai.request(PATH)
        .put(`/${id}`)
        .send({ name: "test modified", hours: 0 })
        .end((err, data) => {
          expect(err).to.be.null;
          expect(data).to.have.status(200);
          expect(data.body.after).to.have.property('name');
          expect(data.body.after).to.have.property('hours');
          expect(data.body.after.name).to.be.string;
          expect(data).to.have.headers;
          expect(data.body.after.hours).to.be.a('number');
          done();
        });
    });
    after(() => {
      chai.request(PATH).delete(`/${id}`).end();
    });

  });
  describe(" DELETE /", () => {
    let id: string;
    before(async () => {
      const subject = await chai.request(PATH).post(`/`).send({ name: "test delete", hours: 0 }).set('Content-Type', 'application/json');
      id = subject.body._id;
    });
    it("should delete a test obj w/ status 200", (done) => {
      chai
        .request(PATH)
        .delete(`/${id}`)
        .end((err, data) => {
          expect(err).to.be.null;
          expect(data).to.have.status(200);
          done();
        });
    });
  });
});