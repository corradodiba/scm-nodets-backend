package com.demo.stevejobsclassmanaging;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.VolleyLog;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;
import com.demo.stevejobsclassmanaging.model.URLs;

import org.json.JSONException;
import org.json.JSONObject;

public class PostSubjectsActivity extends AppCompatActivity {

    private RequestQueue requestQueue;
    private EditText etname, ethours;
    private Button btnPost;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate( savedInstanceState );
        setContentView( R.layout.activity_post_subjects );
        etname = findViewById( R.id.etname );
        ethours = findViewById( R.id.ethours );
        btnPost = findViewById( R.id.btnPost );

        btnPost.setOnClickListener( new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                jsonrequestSubjects();
            }
        });
    }

    private void jsonrequestSubjects() {
        JSONObject jsonObject = new JSONObject();
        final String name = etname.getText().toString();
        final String hours = ethours.getText().toString();
        try {
            jsonObject.put( "name", name );
            jsonObject.put( "hours", hours );
        } catch (JSONException e) {
            e.printStackTrace();
        }

        requestQueue = Volley.newRequestQueue( PostSubjectsActivity.this);

        JsonObjectRequest subject = new JsonObjectRequest( Request.Method.POST, URLs.URL_SUBJECTS, jsonObject,
                new Response.Listener<JSONObject>() {
                    @Override
                    public void onResponse(JSONObject response) {
                        //text.setText(response.toString());
                        Toast.makeText( PostSubjectsActivity.this, "Subjects added succesfull", Toast.LENGTH_SHORT ).show();
                    }
                }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                //text.setText( "Post: Response failled" );
                VolleyLog.d( "Error: ", error.getMessage() );
                error.printStackTrace();
                Toast.makeText( PostSubjectsActivity.this, error.getMessage(), Toast.LENGTH_SHORT ).show();
            }
        } );
        requestQueue.add( subject );
    }
}

