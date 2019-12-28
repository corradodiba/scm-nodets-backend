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

        EditText password, username;
        Button login;
        TextView register;
        boolean isUsernameValid, isPasswordValid;
        TextInputLayout usernameError, passError;

        @Override
        protected void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            setContentView(R.layout.login);

            username = findViewById(R.id.username);
            password = findViewById(R.id.password);
            login = findViewById(R.id.login);
            register = findViewById(R.id.register);
            usernameError = findViewById(R.id.usernameError);
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
                    Toast.makeText(getApplicationContext(), "Impossible to make a new registration, protected area, exit immediately", Toast.LENGTH_SHORT).show();
                }
            });
        }
        public void LoginValidation() {
            String name = "gabriele";
            String pass = "gabrielezagarella";

            if (username.getText().toString().isEmpty()) {
                usernameError.setError(getResources().getString(R.string.username_error));
                isUsernameValid = false;
            } else if (!username.getText().toString().equals(name)){
                usernameError.setError(getResources().getString(R.string.error_invalid_username));
                isUsernameValid = false;
            } else  {
                isUsernameValid = true;
                usernameError.setErrorEnabled(false);
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