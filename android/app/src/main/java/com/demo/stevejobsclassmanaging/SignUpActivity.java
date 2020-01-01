package com.demo.stevejobsclassmanaging;

import android.content.Intent;
import android.support.design.widget.TextInputLayout;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Patterns;
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

    public class SignUpActivity extends AppCompatActivity {

        private RequestQueue requestQueue;
        private EditText email, password, fiscalCode, names, surname, dateOfBirth, type;
        private Button btnSignUp;
        private TextView login;
        boolean isEmailValid, isPasswordValid, isFiscalCodeValid, isNamesValid, isSurnameValid, isDateOfBirthValid, isTypeValid;
        private TextInputLayout emailError, passError, fiscalCodeError, namesError, surnameError, dateOfBirthError, typeError;

        @Override
        protected void onCreate(Bundle savedInstanceState) {
            super.onCreate( savedInstanceState );
            setContentView( R.layout.activity_sign_up );
            email = findViewById( R.id.emailsignup );
            password = findViewById( R.id.passwordsignup );
            fiscalCode = findViewById( R.id.fiscalCodesignup );
            names = findViewById( R.id.namesignup );
            surname = findViewById( R.id.surnamesignup );
            dateOfBirth = findViewById( R.id.dateOfBirthsignup );
            type = findViewById( R.id.typesignup );
            login = findViewById( R.id.login );
            emailError = findViewById( R.id.emailError );
            passError = findViewById( R.id.passError );
            fiscalCodeError = findViewById( R.id.fiscalCodeError );
            namesError = findViewById( R.id.nameError );
            surnameError = findViewById( R.id.surnameErro );
            dateOfBirthError = findViewById( R.id.dateOfBirthErro );
            typeError = findViewById( R.id.typeError );
            btnSignUp = findViewById( R.id.sign );

            login.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    Intent intent = new Intent(getApplicationContext(), Login.class);
                    startActivity(intent);                }
            });

            btnSignUp.setOnClickListener( new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    SetValidation();
                }
            });
        }
        public void SetValidation() {

            if (email.getText().toString().isEmpty()) {
                emailError.setError(getResources().getString(R.string.email_error));
                isEmailValid = false;
            } else if (!Patterns.EMAIL_ADDRESS.matcher(email.getText().toString()).matches()) {
                emailError.setError(getResources().getString(R.string.error_invalid_email));
                isEmailValid = false;
            } else  {
                isEmailValid = true;
                emailError.setErrorEnabled(false);
            }

            if (password.getText().toString().isEmpty()) {
                passError.setError(getResources().getString(R.string.password_error));
                isPasswordValid = false;
            } else if (password.getText().length() < 6) {
                passError.setError(getResources().getString(R.string.error_invalid_password));
                isPasswordValid = false;
            } else  {
                isPasswordValid = true;
                passError.setErrorEnabled(false);
            }

            if (fiscalCode.getText().toString().isEmpty()) {
                fiscalCodeError.setError(getResources().getString(R.string.fiscalCode_error));
                isFiscalCodeValid = false;
            } else  {
                isFiscalCodeValid = true;
                fiscalCodeError.setErrorEnabled(false);
            }

            if (names.getText().toString().isEmpty()) {
                namesError.setError(getResources().getString(R.string.name_error));
                isNamesValid = false;
            } else  {
                isNamesValid = true;
                namesError.setErrorEnabled(false);
            }

            if (surname.getText().toString().isEmpty()) {
                surnameError.setError(getResources().getString(R.string.surname_error));
                isSurnameValid = false;
            } else  {
                isSurnameValid = true;
                surnameError.setErrorEnabled(false);
            }

            if (dateOfBirth.getText().toString().isEmpty()) {
                dateOfBirthError.setError(getResources().getString(R.string.dateOfBirth_error));
                isDateOfBirthValid = false;
            } else  {
                isDateOfBirthValid = true;
                dateOfBirthError.setErrorEnabled(false);
            }

            if (type.getText().toString().isEmpty()) {
                typeError.setError(getResources().getString(R.string.type_error));
                isTypeValid = false;
            } else  {
                isTypeValid = true;
                typeError.setErrorEnabled(false);
            }

            if (isEmailValid && isPasswordValid && isFiscalCodeValid && isNamesValid && isSurnameValid && isDateOfBirthValid && isTypeValid) {
                Toast.makeText(getApplicationContext(), "Successfully", Toast.LENGTH_SHORT).show();
                jsonrequestSubjects();
            }
        }
        private void jsonrequestSubjects() {
            JSONObject jsonObject = new JSONObject();
            final String emails = email.getText().toString();
            final String passwords = password.getText().toString();
            final String fiscalCodes = fiscalCode.getText().toString();
            final String namess = names.getText().toString();
            final String surnames = surname.getText().toString();
            final String dateOfBirths = dateOfBirth.getText().toString();
            final String types = type.getText().toString();
            try {
                jsonObject.put( "email", emails );
                jsonObject.put( "password", passwords );
                jsonObject.put( "fiscalCode", fiscalCodes );
                jsonObject.put( "name", namess );
                jsonObject.put( "surname", surnames );
                jsonObject.put( "dateOfBirth", dateOfBirths );
                jsonObject.put( "type", types );
            } catch (JSONException e) {
                e.printStackTrace();
            }

            requestQueue = Volley.newRequestQueue( SignUpActivity.this);

            JsonObjectRequest subject = new JsonObjectRequest( Request.Method.POST, URLs.URL_SIGNUP, jsonObject,
                    new Response.Listener<JSONObject>() {
                        @Override
                        public void onResponse(JSONObject response) {
                            //text.setText(response.toString());
                            Toast.makeText( SignUpActivity.this, "User added succesfull", Toast.LENGTH_SHORT ).show();
                            final Intent intent = new Intent(getApplicationContext(), MenuActivity.class);
                            startActivity(intent);
                        }
                    }, new Response.ErrorListener() {
                @Override
                public void onErrorResponse(VolleyError error) {
                    //text.setText( "Post: Response failled" );
                    VolleyLog.d( "Error: ", error.getMessage() );
                    error.printStackTrace();
                    Toast.makeText( SignUpActivity.this, error.getMessage(), Toast.LENGTH_SHORT ).show();
                }
            } );
            requestQueue.add( subject );
        }
    }

