# STEVE JOBS CLASS MANAGEMENT 

<p align=center>
  <img src=https://i.imgur.com/nUnIWCS.jpg alt=SteveJobs Academy>
</p>

This product is a **management software** developed by five of Steve Jobs Academy's students, with the intent of **automate all of the usual operations** used by the Steve Jobs Academy regarding the **managing** of all the students, the teachers, the subjects and the grades.


The **APIs** use the RESTful approach, and the Database used is **MONGODB**.

  # _NPM commands:_
    
   :loop: Run `npm start` to start the distributed server 
   
   :computer: Run `npm run dev` for a dev server. Navigate to http://localhost:3000/. The app will automatically reload if you change any of the source files. 
   
   :hammer: Run `npm run build` to build the project. The build artifacts will be stored in the /build directory. 
   
   :mag_right: Run `npm test` to execute the unit tests via Mocha. 
   

 # The following list shows how we structured the file system:

 ## The _**source**_ folder (_**src**_): :notebook_with_decorative_cover:
  * models folder ::file_folder:
  * routes folder :file_folder:
  * tests folder :file_folder:
  * app.ts files :page_with_curl:
  
 
  
  
### The _***models***_ folder contains:
  * _**Helpers**_ folder: :man: :woman:
  
    Inside helpers folder you can find the scheme of every single person, that includes **personal data**.
    This helps us structure both students and teachers 
  * _**Interfaces**_ folder:
  
    It is a typescript construct, and containes the interfaces of every single teacher, subject and student.
  * _**And four files**_:
    * students :bow:
    * teachers :man:
    * subjects :blue_book: :orange_book:
    * grades :100:
    
 
    
### The _***routes***_ folder contains the APIs management that have been used for:
   * students :bow:
   * teachers :man:
   * subjects :blue_book: :orange_book:
   
   
   
### The _***tests***_ folder contains the tests that have been made to every resource

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
  * chai
  * mocha
  * nodemon
  * supertest
  * ts-node
  * typescript


# Access method to the software:

:mag: On your search bar, type:

` localhost:3000/students` to see the *students*.

` localhost:3000/teachers` to see the *teachers*.

` localhost:3000/subjects` to see the *subjects*.
