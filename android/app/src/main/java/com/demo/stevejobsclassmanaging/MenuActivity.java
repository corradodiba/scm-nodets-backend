package com.demo.stevejobsclassmanaging;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MenuActivity extends AppCompatActivity {

    private Button getStudents, getTeachers, getSubjects, addSubject;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate( savedInstanceState );
        setContentView( R.layout.activity_menu );
        getStudents = findViewById( R.id.getStudents );
        getTeachers = findViewById( R.id.getTeachers);
        getSubjects = findViewById( R.id.getSubjects );
        addSubject = findViewById(R.id.postSubject);

        getStudents.setOnClickListener( new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent next4 = new Intent( MenuActivity.this, MainActivity.class );
                startActivity( next4 );
            }
        });

        getTeachers.setOnClickListener( new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent next4 = new Intent( MenuActivity.this, SecondActivity.class );
                startActivity( next4 );
            }
        });

        getSubjects.setOnClickListener( new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent next4 = new Intent( MenuActivity.this, ThirdActivity.class );
                startActivity( next4 );
            }
        });
        addSubject.setOnClickListener( new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent next4 = new Intent( MenuActivity.this, PostSubjectsActivity.class );
                startActivity( next4 );
            }
        });
    }
}
