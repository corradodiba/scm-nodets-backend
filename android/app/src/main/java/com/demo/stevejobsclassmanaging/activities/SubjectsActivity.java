package com.demo.stevejobsclassmanaging.activities;

import android.support.design.widget.CollapsingToolbarLayout;
import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.TextView;
import com.bumptech.glide.request.RequestOptions;
import com.demo.stevejobsclassmanaging.R;

public class SubjectsActivity extends AppCompatActivity {

    private TextView _id_tv, name_tv, hours_tv;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_subjects );

        getSupportActionBar().hide();
        ActionBar actionBar = getSupportActionBar();
        if(actionBar!=null) {

            actionBar.setDisplayHomeAsUpEnabled(true);
            actionBar.setDisplayHomeAsUpEnabled(true);
        }

        String _id  = getIntent().getExtras().getString("_idSubjects");
        String name = getIntent().getExtras().getString("nameSubjects");
        String hours = getIntent().getExtras().getString("hoursSubjects") ;

        CollapsingToolbarLayout collapsingToolbarLayout = findViewById(R.id.collapsingtoolbar_id);
        collapsingToolbarLayout.setTitleEnabled(true);
        _id_tv = findViewById( R.id._idSub );
        name_tv = findViewById(R.id.nameSub);
        hours_tv = findViewById(R.id.hoursSub);

        _id_tv.setText(_id);
        name_tv.setText(name);
        hours_tv.setText(hours);

        collapsingToolbarLayout.setTitle(name);

        RequestOptions requestOptions = new RequestOptions().centerCrop().placeholder(R.drawable.loading_shape).error(R.drawable.loading_shape);

        // set image using Glide
        //Glide.with(this).load(image_url).apply(requestOptions).into(img);
    }
    public boolean onSupportNavigateUp(){
        onBackPressed();
        return true;
    }
}