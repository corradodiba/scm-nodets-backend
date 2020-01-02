package com.demo.stevejobsclassmanaging;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MenuActivity extends AppCompatActivity {

    private Button getStudents, getTeachers, getSubjects, addSubject, deleteSubject;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate( savedInstanceState );
        setContentView( R.layout.activity_menu );
        getStudents = findViewById( R.id.getStudents );
        getTeachers = findViewById( R.id.getTeachers);
        getSubjects = findViewById( R.id.getSubjects );
        addSubject = findViewById(R.id.postSubject);
        deleteSubject = findViewById(R.id.deleteSubjects);

        getStudents.setOnClickListener( new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent students = new Intent( MenuActivity.this, MainActivity.class );
                startActivity( students );
            }
        });

        getTeachers.setOnClickListener( new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent teachers = new Intent( MenuActivity.this, SecondActivity.class );
                startActivity( teachers );
            }
        });

        getSubjects.setOnClickListener( new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent getSubject = new Intent( MenuActivity.this, ThirdActivity.class );
                startActivity( getSubject );
            }
        });
        addSubject.setOnClickListener( new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent addSubject = new Intent( MenuActivity.this, PostSubjectsActivity.class );
                startActivity( addSubject );
            }
        });
        deleteSubject.setOnClickListener( new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent deleteSubject = new Intent( MenuActivity.this, DeleteSubjectsActivity.class );
                startActivity( deleteSubject );
            }
        });
    }
}
