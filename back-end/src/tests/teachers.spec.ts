import chai from "chai";
import chaiHttp from "chai-http";
import "mocha";
import { ETIME } from "constants";

const PATH = "http://localhost:3000/teachers";
let expect = chai.expect;
chai.use(chaiHttp);
describe(`Testing ${PATH} `, () => {
    describe(`GET / `, () => {
        return new Promise(async (resolve) => {
            it(" should return an array w/status code 200", async () => {
                const teacher = await chai.request(PATH).get("/");
                expect(teacher).to.have.status(200);
                expect(teacher.error).to.be.false;
                expect(teacher.body).to.be.a('array');
                resolve();
            });
        });
    });
    describe(`GET /:id `, () => {
        let id: string;
        return new Promise(async (resolve) => {
            before(async () => {
                const subject = await chai.request(PATH).post("/").send({ name: "test", surname: "testagain", fiscalCode: "NOBODYOFSORA2000", dateOfBirth: "2019-11-26T11:34:00.729Z" });
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
                resolve();
            });
        });
    });
    describe(" POST /", () => {
        let id: string;
        return new Promise(async (resolve) => {
            it("should post a test obj w/ status 201 and a json body", async () => {
                const teacher = await chai
                    .request(PATH)
                    .post("/")
                    .send({ name: "test", surname: "testagain", fiscalCode: "NOBODYOFSORA2000", dateOfBirth: "2019-11-26T11:34:00.729Z" })
                    .set('Content-Type', 'application/json');
                expect(teacher).to.have.status(200);
                id = teacher.body._id;
                resolve();
            });
            after(async () => {
                await chai.request(PATH)
                    .delete(`/${id}`);
            });
        });
    });
    describe(" DELETE /", () => {
        let id: string;
        return new Promise(async (resolve) => {
            before(async () => {
                const subject = await chai.request(PATH).post("/").send({
                    fiscalCode: "1234567890000000",
                    name: "test",
                    surname: "testagain",
                    dateOfBirth: "2019-11-26T11:34:00.729Z"
                }).set('Content-Type', 'application/json');
                id = subject.body._id;
            });
            it(" should return status 200 and a single JSON", async () => {
                const teacher = await chai.request(PATH).delete(`/${id}`);
                expect(teacher.error).to.be.false;
                expect(teacher).to.have.status(200);
                expect(teacher.body).to.have.property("name");
                resolve();
            });
        });
    });
    describe(" PUT /:id", () => {
        let id: string;
        return new Promise(async (resolve) => {
            before(async () => {
                const teacher = await chai
                    .request(PATH)
                    .post("/")
                    .send({ name: "Matteo", surname: "Di Cara", fiscalCode: "NOBODYOFSORA1992", dateOfBirth: "2019-11-26T11:34:00.729Z" })
                    .set('Content-Type', 'application/json');
                id = teacher.body._id;
            });
            it("should modifiy data w/ status 200 and return a json body", async () => {
                const teacher = await chai.request(PATH)
                    .put(`/${id}`)
                    .send({ name: "testput", surname: "testagain", fiscalCode: "NOBODYOFSORA2000", dateOfBirth: "2019-11-26T11:34:00.729Z" });
                expect(teacher).to.have.status(200);
                resolve();
            });
            after(async () => {
                await chai.request(PATH)
                    .delete(`/${id}`)
            });
        });
    });
});
