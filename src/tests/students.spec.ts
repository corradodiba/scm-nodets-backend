import chai from "chai";
import chaiHttp = require("chai-http");
import "mocha";
import { PORT } from "../app";

import {
  CreateStudent,
  deleteById,
  add
} from "../models/student/student.model";

const PATH = `http://localhost:${PORT}/students`;

chai.use(chaiHttp);

let expect = chai.expect;

describe(`Testing ${PATH}`, () => {
  const props = {
    fiscalCode: "HTGIII05N67B342G",
    name: "Pippo",
    surname: "Franco",
    dateOfBirth: new Date(),
    email: "test@test.it",
    password: "test"
  };
  describe(`GET/`, () => {
    it("should return an array, status code 200", async () => {
      const students = await chai.request(PATH).get("/");
      expect(students.error).to.be.false;
      expect(students).to.have.status(200);
      expect(students.body).to.be.a("array");
    });
  });

  describe(`GET/id`, () => {
    let id: string;
    before(async () => {
      const student = await add(await CreateStudent(props));
      id = student._id;
    });
    it(" should return status 200 and a single JSON", async () => {
      const student = await chai.request(PATH).get(`/${id}`);
      expect(student).to.have.status(200);
      expect(student.body).to.have.property("fiscalCode", props.fiscalCode);
      expect(student.body).to.have.property("name", props.name);
      expect(student.body).to.have.property("surname", props.surname);
      expect(student.body).to.have.property(
        "dateOfBirth",
        props.dateOfBirth.toISOString()
      );
    });
    it(" should return status 404", async () => {
      const student = await chai.request(PATH).get("/dummyId");
      expect(student).to.have.status(404);
      expect(student.error).to.have.property("message");
    });
    after(async () => {
      await deleteById(id);
    });
  });

  /* TODO - "to redo" - corradodiba
  describe.only(`GET/:id/grades`, () => {
    
  }); 
  */

  describe("POST/", () => {
    let id: string;
    after(async () => {
      await chai.request(PATH).delete(`/${id}`);
    });
    it("should post a test obj, status 201 and a json body", async () => {
      const student = await chai
        .request(PATH)
        .post("/")
        .send({ ...props })
        .set("Content-Type", "application/json");
      expect(student).to.have.status(201);
      id = student.body._id;
      // TODO verificare inoltre esistenza e valore degli altri campi
    });
  });

  describe("PUT/:id", () => {
    let id: string;
    before(async () => {
      const result = await chai
        .request(PATH)
        .post("/")
        .send({ ...props })
        .set("Content-Type", "application/json");
      id = result.body._id;
    });
    it("should modifiy data, status 201 and return a json body", async () => {
      const student = await chai
        .request(PATH)
        .put(`/${id}`)
        .send({ ...props });
      expect(student).to.have.status(201);
      // TODO verificare che il nuovo valore sia corretto
      expect(student.body.before).to.have.property("surname");
      expect(student.body.before.name).to.be.string;
    });
    after(async () => {
      await chai.request(PATH).delete(`/${id}`);
    });
  });

  describe("DELETE/:id", () => {
    let id: string;
    before(async () => {
      const result = await chai
        .request(PATH)
        .post("/")
        .send({ ...props });
      id = result.body._id;
    });
    after(async () => {
      // await chai.request(PATH).delete(`/${id}`);
    });
    it("should delete a test obj, status 201", async () => {
      const student = await chai.request(PATH).delete(`/${id}`);
      expect(student).to.have.status(201);
      // 201 è per la creazione, 200
    });
  });
});
