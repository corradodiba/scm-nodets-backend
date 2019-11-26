import chai from "chai";
import chaiHttp = require("chai-http");
import "mocha";
import { ObjectID } from "bson";

const PATH = "http://localhost:3050/students";

chai.use(chaiHttp);

let expect = chai.expect;

describe(`GET/`, () => {
  it("should return an array, status code 200", (done) => {
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

describe(`GET/:id `, () => {
  let id: ObjectID;
  before(async () => {
    const result = await chai.request(PATH).post("/").send({ fiscalCode: "HTGIII05N67B342G", name: "Pippo", surname: "Franco", dateOfBirth: "1995-05-20" })
    id = result.body._id
  });
  after(() => {
    chai
      .request(PATH)
      .delete(`/${id}`)
      .end()
  });
  it(" should return status 200 and a single JSON", (done) => {
    chai
      .request(PATH)
      .get(`/${id}`)
      .end((err, data) => {
        expect(data).to.have.status(200);
        expect(data.body).to.have.property("name");
        done();
      });
  });
  it(" should return status 404", (done) => {
    chai
      .request(PATH)
      .get("/hello")
      .end((err, data) => {
        expect(data).to.have.status(404);
        done();
      });
  });
});

describe("POST/", () => {
  let id: ObjectID;
  after(() => {
    chai
      .request(PATH)
      .delete(`/${id}`)
      .end();
  });
  it("should post a test obj, status 201 and a json body", (done) => {
    chai
      .request(PATH)
      .post("/")
      .send({ fiscalCode: "HTGORI05N67B342G", name: "Prova", surname: "Post", dateOfBirth: "1995-04-20" })
      .set('Content-Type', 'application/json')
      .end((err, data) => {
        expect(data).to.have.status(201);
        id = data.body._id;
        done();
      });
  });
});

describe("PUT/:id", () => {
  let id: ObjectID;
  before(async () => {
    const result = await chai.request(PATH).post("/").send({ fiscalCode: "HTGILI05B67B342G", name: "Prova", surname: "Put", dateOfBirth: "1995-03-20" })
    id = result.body._id
  });
  after(() => {
    chai
      .request(PATH)
      .delete(`/${id}`)
      .end();
  });
  it("should modifiy data, status 201 and return a json body", (done) => {
    chai
      .request(PATH)
      .put(`/${id}`)
      .send({ fiscalCode: "HTGIII05N67B342G", name: "Ciccio", surname: "Franco", dateOfBirth: "1995-05-20" })
      .end((err, data) => {
        expect(data).to.have.status(201);
        expect(data.body.before).to.have.property('surname');
        expect(data.body.before.name).to.be.string;
        expect(data.body.before.name).to.be.a('string');
        done();
      });
  });
});

describe("DELETE/:id", () => {
  let id: ObjectID;
  before(async () => {
    const result = await chai.request(PATH).post("/").send({ fiscalCode: "HTGAAA05N67B342G", name: "Prova", surname: "Delete", dateOfBirth: "1995-09-20" })
    id = result.body._id
  });
  after(() => {
    chai
      .request(PATH)
      .delete(`/${id}`)
      .end()
  });
  it("should delete a test obj, status 201", (done) => {
    chai
      .request(PATH)
      .delete(`/${id}`)
      .end((err, data) => {
        expect(data).to.have.status(201);
        done();
      });
  });
});