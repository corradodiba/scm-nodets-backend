package com.demo.stevejobsclassmanaging.model;

public class Subjects {

    private String _id;
    private String name ;
    private String hours;

    public Subjects() {
    }

    public Subjects(String _id, String name, String hours) {
        this._id = _id;
        this.name = name;
        this.hours = hours;
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getHours() {
        return hours;
    }

    public void setHours(String hours) {
        this.hours = hours;
    }
}
