package com.demo.stevejobsclassmanaging.activities;

import android.support.design.widget.CollapsingToolbarLayout;
import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.TextView;

import com.bumptech.glide.request.RequestOptions;
import com.demo.stevejobsclassmanaging.R;

public class UserActivity extends AppCompatActivity {

    private TextView _id_tv, fiscalCode_tv, name_tv, surname_tv, dateOfBirth_tv;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_user );

        // hide the default actionbar
        getSupportActionBar().hide();
        ActionBar actionBar = getSupportActionBar();
            if(actionBar!=null) {

                actionBar.setDisplayHomeAsUpEnabled(true);
                actionBar.setDisplayHomeAsUpEnabled(true);
            }
        // Recieve data

        String _id  = getIntent().getExtras().getString("anime__id");
        String fiscalCode = getIntent().getExtras().getString("anime_fiscalCode");
        String name = getIntent().getExtras().getString("anime_name") ;
        String surname = getIntent().getExtras().getString("anime_surname");
        String dateOfBirth = getIntent().getExtras().getString("anime_dateOfBirth") ;
        //String image_url = getIntent().getExtras().getString("anime_img") ;

        // ini views

        CollapsingToolbarLayout collapsingToolbarLayout = findViewById(R.id.collapsingtoolbar_id);
        collapsingToolbarLayout.setTitleEnabled(true);
        _id_tv = findViewById( R.id._id );
        fiscalCode_tv = findViewById(R.id.fiscalCode);
        name_tv = findViewById(R.id.name);
        surname_tv = findViewById(R.id.surname);
        dateOfBirth_tv  = findViewById(R.id.dateOfBirth);
        //ImageView img = findViewById(R.id.aa_thumbnail);

        // setting values to each view

        _id_tv.setText(_id);
        fiscalCode_tv.setText(fiscalCode);
        name_tv.setText(name);
        surname_tv.setText(surname);
        dateOfBirth_tv.setText(dateOfBirth);

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