import chai from "chai";
import chaiHttp from "chai-http";
import "mocha";

const PATH = "http://localhost:3000/teachers";
let expect = chai.expect;
chai.use(chaiHttp);
describe(`Testing ${PATH} `, () => {
    describe(`GET / `, () => {
        it(" should return an array w/status code 200", (done) => {
            chai
                .request(PATH)
                .get("/")
                .end((err, data) => {
                    expect(data).to.have.status(200);
                    expect(err).to.be.null;
                    expect(data.body).to.be.a('array');
                    done();
                });
        });
    });
    describe(`GET /:id `, () => {
        let id: string;
        before(async () => {
            const subject = await chai.request(PATH).post("/").send({ name: "test", surname: "testagain", fiscalCode: "NOBODYOFSORA2000", dateOfBirth: "2019-11-26T11:34:00.729Z" });
            id = subject.body._id;
        });
        after(() => {
            chai.request(PATH).delete(`/${id}`).end()
        });
        it(" should return status 200 and a single JSON", (done) => {
            console.log(id);
            chai.request(PATH).get(`/${id}`).end((err, data) => {
                expect(err).to.be.null;
                expect(data).to.have.status(200).and.to.be.json;
                expect(data.body).to.have.property("fiscalCode");
                done();
            });
        });
    });
});
describe(" POST /", () => {
    let id: string;
    it("should post a test obj w/ status 201 and a json body", (done) => {
        chai
            .request(PATH)
            .post("/")
            .send({ name: "test", surname: "testagain", fiscalCode: "NOBODYOFSORA2000", dateOfBirth: "2019-11-26T11:34:00.729Z" })
            .set('Content-Type', 'application/json')
            .end((err, data) => {
                expect(data).to.have.status(200);
                id = data.body._id;
                done();
            });
    });
    // To be fixed
    after(() => {
        chai.request(PATH)
            .delete(`/${id}`)
            .end();
    });
});
describe(" DELETE /", () => {
    let id: string;
    before(async () => {
        const subject = await chai.request(PATH).post("/").send({
            fiscalCode: "1234567890000000",
            name: "test",
            surname: "testagain",
            dateOfBirth: "2019-11-26T11:34:00.729Z"
        }).set('Content-Type', 'application/json');
        id = subject.body._id;
    });
    it(" should return status 200 and a single JSON", (done) => {
        chai.request(PATH).delete(`/${id}`).end((err, data) => {
            expect(err).to.be.null;
            expect(data).to.have.status(200);
            expect(data.body).to.have.property("name");
            done();
        });
    });
});
describe(" PUT /:id", () => {
    let id: string;
    before(async () => {
        const teacher = await chai
            .request(PATH)
            .post("/")
            .send({ name: "Matteo", surname: "Di Cara", fiscalCode: "NOBODYOFSORA1992", dateOfBirth: "2019-11-26T11:34:00.729Z" })
            .set('Content-Type', 'application/json');
        id = teacher.body._id;
    });
    it("should modifiy data w/ status 200 and return a json body", (done) => {
        chai.request(PATH)
            .put(`/${id}`)
            .send({ name: "testput", surname: "testagain", fiscalCode: "NOBODYOFSORA2000", dateOfBirth: "2019-11-26T11:34:00.729Z" })
            .end((err, data) => {
                expect(data).to.have.status(200);
                done();
            });
        // To be fixed
        after(() => {
            chai.request(PATH)
                .delete(`/${id}`)
                .end();
        });
    });
});
