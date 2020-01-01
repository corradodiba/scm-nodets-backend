package com.demo.stevejobsclassmanaging;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
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

public class DeleteSubjectsActivity extends AppCompatActivity {

    private RequestQueue requestQueue;
    private EditText etname, ethours;
    private Button btnDelete;
    private TextView text;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate( savedInstanceState );
        setContentView( R.layout.activity_delete_subjects );
        etname = findViewById( R.id.etnamedelete );
        ethours = findViewById( R.id.ethoursdelete );
        btnDelete = findViewById( R.id.btnDelete );
        text = findViewById( R.id.delete );

        btnDelete.setOnClickListener( new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                jsonrequestSubjectsDelete();
            }
        });
    }

    private void jsonrequestSubjectsDelete() {

        requestQueue = Volley.newRequestQueue( DeleteSubjectsActivity.this);
        final JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put( "name", "a" );
            jsonObject.put( "hours", 2 );
        } catch (JSONException e) {
            e.printStackTrace();
        }

        JsonObjectRequest subject = new JsonObjectRequest( Request.Method.DELETE, URLs.URL_SUBJECTS, jsonObject,
                new Response.Listener<JSONObject>() {
                    @Override
                    public void onResponse(JSONObject response) {
                        text.setText(response.toString());
                        Toast.makeText( DeleteSubjectsActivity.this, "Subjects added succesfull", Toast.LENGTH_SHORT ).show();
                    }
                }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                text.setText( "Post: Response failled" );
                VolleyLog.d( "Error: ", error.getMessage() );
                error.printStackTrace();
                Toast.makeText( DeleteSubjectsActivity.this, error.getMessage(), Toast.LENGTH_SHORT ).show();
            }
        } );
        requestQueue.add( subject );
    }
}




