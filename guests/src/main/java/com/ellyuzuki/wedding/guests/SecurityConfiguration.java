package com.ellyuzuki.wedding.guests;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.beans.factory.annotation.Value;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
    
    @Value("${ADMIN_USERNAME:user}")
    private String admin_user;
    @Value("${ADMIN_PASSWORD:password}")
    private String admin_password;

    @Override
    public void configure(HttpSecurity http) throws Exception {
        http
            .csrf().disable()
            .authorizeRequests()
                .antMatchers("/guests/?*").authenticated()
                .anyRequest().permitAll()
            .and()
        .formLogin()
            .permitAll()
            .and()
        .httpBasic();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        // Only admin needs to look at the guest list, so nothing crazy required here
        PasswordEncoder encoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
        auth.inMemoryAuthentication()
            .withUser(admin_user)
            .password(encoder.encode(admin_password)) // Spring Security 5 requires specifying the password storage format
            .roles("USER");
    }
}
