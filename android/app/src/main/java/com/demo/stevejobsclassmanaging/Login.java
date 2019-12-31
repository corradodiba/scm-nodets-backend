package com.demo.stevejobsclassmanaging;

import android.content.Intent;
import android.media.MediaPlayer;
import android.os.Bundle;
import android.support.design.widget.TextInputLayout;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class Login extends AppCompatActivity {

        EditText email, password;
        Button login;
        TextView register;
        boolean isUsernameValid, isPasswordValid;
        TextInputLayout emailError, passError;

        @Override
        protected void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            setContentView(R.layout.login);

            email = findViewById(R.id.email);
            password = findViewById(R.id.password);
            login = findViewById(R.id.login);
            register = findViewById(R.id.register);
            emailError = findViewById(R.id.emailError);
            passError = findViewById(R.id.passError);

            login.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                   LoginValidation();
                }
            });

            register.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    Intent intent = new Intent(getApplicationContext(), SignUpActivity.class);
                    startActivity(intent);
                }
            });
        }
        public void LoginValidation() {
            String emails = "gabriele";
            String pass = "gabrielezagarella";

            if (email.getText().toString().isEmpty()) {
                emailError.setError(getResources().getString(R.string.email_error));
                isUsernameValid = false;
            } else if (!email.getText().toString().equals(emails)){
                emailError.setError(getResources().getString(R.string.error_invalid_email));
                isUsernameValid = false;
            } else  {
                isUsernameValid = true;
                emailError.setErrorEnabled(false);
            }

            if (password.getText().toString().isEmpty()) {
                passError.setError(getResources().getString(R.string.password_error));
                isPasswordValid = false;
            } else if (password.getText().length() < 8) {
                passError.setError(getResources().getString(R.string.error_invalid_password));
                isPasswordValid = false;
            } else if (!password.getText().toString().equals(pass)) {
                passError.setError( getResources().getString( R.string.error_incorrect_password ));
                isPasswordValid = false;
            } else {
                isPasswordValid = true;
                passError.setErrorEnabled(false);
            }

            if (isUsernameValid  && isPasswordValid) {
                Toast.makeText(getApplicationContext(), "Login successfully", Toast.LENGTH_SHORT).show();
                final Intent intent = new Intent(getApplicationContext(), MenuActivity.class);
                startActivity(intent);
            }
        }
    }