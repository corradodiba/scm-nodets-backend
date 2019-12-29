package com.demo.stevejobsclassmanaging.model;

public class User {

    private String _id;
    private String fiscalCode;
    private String name ;
    private String surname;
    private String dateOfBirth;
    private String type;
    //private String image_url;

    public User() {
    }

    public User(String _id, String fiscalCode, String name, String surname, String dateOfBirth, String type) {

        this._id = _id;
        this.fiscalCode = fiscalCode;
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = dateOfBirth;
        this.type = type;
        //this.image_url = image_url;
    }

    public String get_id() {
        return _id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getFiscalCode() {
        return fiscalCode;
    }

    public void setFiscalCode(String fiscalCode) {
        this.fiscalCode = fiscalCode;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    //public String getImage_url() {
       // return image_url;
    //}

    //public void setImage_url(String image_url) {
      //  this.image_url = image_url;
    //}
}
