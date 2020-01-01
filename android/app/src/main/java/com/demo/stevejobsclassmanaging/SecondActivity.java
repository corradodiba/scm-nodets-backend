package com.demo.stevejobsclassmanaging;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.widget.ProgressBar;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.VolleyLog;
import com.android.volley.toolbox.JsonArrayRequest;
import com.android.volley.toolbox.Volley;
import com.demo.stevejobsclassmanaging.adapters.RecyclerViewAdapter;
import com.demo.stevejobsclassmanaging.model.URLs;
import com.demo.stevejobsclassmanaging.model.User;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import java.util.ArrayList;
import java.util.List;
import static android.view.View.GONE;
import static android.view.View.VISIBLE;

public class SecondActivity extends AppCompatActivity {

    private JsonArrayRequest request;
    private RequestQueue requestQueue;
    private List<User> lstUser;
    private RecyclerView recyclerView;
    private ProgressBar bar;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second);

        lstUser = new ArrayList<>();
        recyclerView = findViewById(R.id.recyclerviewid);
        jsonrequestTeachers();
        bar = findViewById(R.id.progressbar);
        bar.setVisibility(VISIBLE);

    }

    private void jsonrequestTeachers() {

        request = new JsonArrayRequest(  Request.Method.GET, URLs.URL_USERS, new Response.Listener<JSONArray>() {
            @Override
            public void onResponse(JSONArray response) {

                JSONObject jsonObject = null;

                for (int i = 0; i < response.length(); i++) {


                    try {
                        jsonObject = response.getJSONObject(i);
                        User user = new User();
                        user.setName(jsonObject.getString("name"));
                        user.set_id(jsonObject.getString("_id"));
                        user.setFiscalCode(jsonObject.getString("fiscalCode"));
                        user.setSurname(jsonObject.getString("surname"));
                        user.setDateOfBirth(jsonObject.getString("dateOfBirth"));
                        user.setType(jsonObject.getString("type"));
                        //user.setImage_url(jsonObject.getString("img"));
                        lstUser.add( user );
                        bar.setVisibility(GONE);//dismiss progress

                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                }

                setuprecyclerview( lstUser );

            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                VolleyLog.d( "Error: ", error.getMessage() );
                error.printStackTrace();
                Toast.makeText(SecondActivity.this, "Errore di rete", Toast.LENGTH_SHORT).show();
            }
        });

        requestQueue = Volley.newRequestQueue(SecondActivity.this);
        requestQueue.add(request);
    }

    private void setuprecyclerview(List<User> lstUser) {

        RecyclerViewAdapter myadapter = new RecyclerViewAdapter(this, lstUser );
        recyclerView.setLayoutManager(new LinearLayoutManager(this));
        recyclerView.setAdapter(myadapter);

    }
}
