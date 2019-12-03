import chai from "chai";
import chaiHttp from "chai-http";
import "mocha";
import { PORT } from "../app";

const PATH = `http://localhost:${PORT}/teachers`;
let expect = chai.expect;
chai.use(chaiHttp);

describe(`Testing ${PATH} `, () => {
  const props = {
    fiscalCode: "HTGIII05N67B342G",
    name: "Pippo",
    surname: "Franco",
    dateOfBirth: new Date(),
    email: "test@test.it",
    password: "test"
  };
  describe(`GET / `, () => {
    it(" should return an array w/status code 200", async () => {
      const teacher = await chai.request(PATH).get("/");
      expect(teacher).to.have.status(200);
      expect(teacher.error).to.be.false;
      expect(teacher.body).to.be.a("array");
    });
  });

  describe(`GET /:id `, () => {
    let id: string;
    before(async () => {
      const subject = await chai
        .request(PATH)
        .post("/")
        .send({ ...props });
      id = subject.body._id;
    });
    after(async () => {
      await chai.request(PATH).delete(`/${id}`);
    });
    it(" should return status 200 and a single JSON", async () => {
      const teacher = await chai.request(PATH).get(`/${id}`);
      expect(teacher.error).to.be.false;
      expect(teacher).to.have.status(200).and.to.be.json;
      expect(teacher.body).to.have.property("fiscalCode");
    });
  });

  describe(" POST /", () => {
    let id: string;
    it("should post a test obj w/ status 201 and a json body", async () => {
      const teacher = await chai
        .request(PATH)
        .post("/")
        .send({ ...props })
        .set("Content-Type", "application/json");
      expect(teacher).to.have.status(200);
      id = teacher.body._id;
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
        .post("/")
        .send({ ...props })
        .set("Content-Type", "application/json");
      id = subject.body._id;
    });
    it(" should return status 200 and a single JSON", async () => {
      const teacher = await chai.request(PATH).delete(`/${id}`);
      expect(teacher.error).to.be.false;
      expect(teacher).to.have.status(200);
      expect(teacher.body).to.have.property("name");
    });
  });

  describe(" PUT /:id", () => {
    let id: string;
    before(async () => {
      const teacher = await chai
        .request(PATH)
        .post("/")
        .send({ ...props })
        .set("Content-Type", "application/json");
      id = teacher.body._id;
    });
    it("should modifiy data w/ status 200 and return a json body", async () => {
      const teacher = await chai
        .request(PATH)
        .put(`/${id}`)
        .send({ ...props });
      expect(teacher).to.have.status(200);
    });
    after(async () => {
      await chai.request(PATH).delete(`/${id}`);
    });
  });
});
