
#  Steve Jobs: Class Management
<p align=center>
  <img src=https://i.imgur.com/nUnIWCS.jpg alt=SteveJobs Academy>
</p>

This product is a **management software** developed by five of Steve Jobs Academy's students, with the intent of **automate all of the usual operations** used by the Steve Jobs Academy regarding the **managing** of all the students, the teachers, the subjects and the grades.


The **APIs** use the RESTful approach, and the Database used is **MONGODB**.

  # _NPM commands:_
    
   
   :computer: Run `npm run dev` for a dev server. Navigate to http://localhost:3000/. The app will automatically reload if you change any of the source files. 
   
   :bug: Run `npm test` to execute the unit tests via Mocha. 
   
   :hammer: Run `npm run build` to build the project. The build artifacts will be stored in the /build directory. 
   
   
   :arrow_forward: Run `npm start` to start the distributed server 
   

 # The following list shows how we structured the file system

 ## :notebook_with_decorative_cover: The _**source**_ folder (_**src**_)
  :file_folder: models folder 
  
  :file_folder: routes folder 
  
  :file_folder: tests folder 
  
  :page_with_curl: app.ts files 
### _**App.ts**_ folder
  It is where all api are linked together and where the PORT is decided.
 ```
 ...
 app.use("/teachers", teachersRoutes);
app.use("/students", studentsRoutes);
app.use("/subjects", subjectsRoutes);
...
 ```
  
  
### _**Routes**_ folder
   It contains the APIs management that have been used for.
   

  ```
  import express from "express";
import {
  getAllStudents,
  getStudentById,
  deleteStudentById,
  addStudent,
  editStudentById,
  getAllGradesByStudentId
} from "./controllers/students.controller";
const router = express.Router();
router.get("/", getAllStudents);
...
```
### _***Controller***_ folder 
It contains each method used by the routes.

```
...
   export const getAllSubjects = async (req: Request, res: Response) => {
  try {
    const result = await getAll();
    return res.status(200).json(result);
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};
...
```
###  _**Models**_ folder
  
   It is a typescript construct, and containes the _model, methods and constructor_ of every single teacher, subject, student and grade.
    
```  ...
   export interface Student extends Document {
  fiscalCode: string;
  name: string;
  surname: string;
  dateOfBirth: Date;
  }
  ...
 ```
    
### ***Tests*** folder 
 It contains the tests that have been made to every resource.
 ```
 ...
 const PATH = "http://localhost:3000/subjects";
let expect = chai.expect;
chai.use(chaiHttp);
describe(`Testing ${PATH} `, () => {
  describe(`GET / `, () => {
    return new Promise(async (resolve) => {
      it(" should return an array w/status code 200", async () => {
        const subject = await chai.request(PATH).get("/");
        expect(subject.error).to.be.false;
        expect(subject).to.have.status(200);
        expect(subject.body).to.be.a("array");
        resolve();
      });
    });
  });
...
 ```

# List of _NPM_ modules used for this project:
   * @types/mongoose 
   * @types/mongoose-unique-validator
   * body-parser
   * express
   * mongoose
   * mongoose-unique-validator
   * ts-mongoose
   
## DEV _NPMs_:
  * @types/chai
  * @types/express
  * @types/mocha
  * @types/node
  * @types/supertest
  * chai-http
  * chai
  * mocha
  * nodemon
  * supertest
  * ts-node
  * typescript


# Access method to the software:

:mag: On your search bar, type:

`host/students` to see the *students*.

` host/teachers` to see the *teachers*.

` host/subjects` to see the *subjects*.
