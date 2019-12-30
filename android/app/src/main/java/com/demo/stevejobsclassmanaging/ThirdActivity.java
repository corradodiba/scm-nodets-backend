package com.demo.stevejobsclassmanaging;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.widget.ProgressBar;
import android.widget.Toast;

import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.VolleyLog;
import com.android.volley.toolbox.JsonArrayRequest;
import com.android.volley.toolbox.Volley;
import com.demo.stevejobsclassmanaging.adapters.RecyclerViewAdapter;
import com.demo.stevejobsclassmanaging.adapters.RecyclerViewAdapterSubjects;
import com.demo.stevejobsclassmanaging.model.Subjects;
import com.demo.stevejobsclassmanaging.model.User;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

import static android.view.View.GONE;
import static android.view.View.VISIBLE;

public class ThirdActivity extends AppCompatActivity {

    private final String URLSUBJECTS = "http://192.168.43.156:3000/subjects";
    private JsonArrayRequest request;
    private RequestQueue requestQueue;
    private List<Subjects> lstSubjects;
    private RecyclerView recyclerView;
    private ProgressBar bar;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_third);

        lstSubjects = new ArrayList<>();
        recyclerView = findViewById(R.id.recyclerviewidSubjects);
        jsonrequestSubjects();
        bar = findViewById(R.id.progressbar);
        bar.setVisibility(VISIBLE);

    }

    private void jsonrequestSubjects() {

        request = new JsonArrayRequest(URLSUBJECTS, new Response.Listener<JSONArray>() {
            @Override
            public void onResponse(JSONArray response) {

                JSONObject jsonObject = null;

                for (int i = 0; i < response.length(); i++) {


                    try {
                        jsonObject = response.getJSONObject(i);
                        Subjects subjects = new Subjects();
                        subjects.set_id(jsonObject.getString("_id"));
                        subjects.setName(jsonObject.getString("name"));
                        subjects.setHours(jsonObject.getString("hours"));
                        lstSubjects.add( subjects );
                        bar.setVisibility(GONE);

                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                }

                setuprecyclerview( lstSubjects );

            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                VolleyLog.d( "Error: ", error.getMessage() );
                error.printStackTrace();
                Toast.makeText( ThirdActivity.this, "Errore di rete", Toast.LENGTH_SHORT).show();
            }
        });

        requestQueue = Volley.newRequestQueue( ThirdActivity.this);
        requestQueue.add(request);
    }

    private void setuprecyclerview(List<Subjects> lstSubjects) {

        RecyclerViewAdapterSubjects myadapter = new RecyclerViewAdapterSubjects(this, lstSubjects );
        recyclerView.setLayoutManager(new LinearLayoutManager(this));
        recyclerView.setAdapter(myadapter);

    }
}
