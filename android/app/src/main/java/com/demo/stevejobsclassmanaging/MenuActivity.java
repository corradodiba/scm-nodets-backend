package com.demo.stevejobsclassmanaging;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MenuActivity extends AppCompatActivity {

    private Button getStudents, getTeachers;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate( savedInstanceState );
        setContentView( R.layout.activity_menu );
        getStudents = findViewById( R.id.get4 );
        getTeachers = findViewById( R.id.get4a);

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
    }
}
