package com.cognizant.spring_jwt.controller;

import com.cognizant.spring_jwt.util.JwtUtil;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import jakarta.servlet.http.HttpServletRequest;
import java.util.*;

@RestController
public class AuthController {

    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticate(HttpServletRequest request) {
        String header = request.getHeader(HttpHeaders.AUTHORIZATION);
        if (header == null || !header.startsWith("Basic ")) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        String[] credentials = extractCredentials(header);
        String username = credentials[0];
        String password = credentials[1];

        if (validateUser(username, password)) {
            String token = JwtUtil.generateToken(username);
            return ResponseEntity.ok(Collections.singletonMap("token", token));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    private String[] extractCredentials(String header) {
        String base64Credentials = header.substring("Basic ".length());
        byte[] decoded = Base64.getDecoder().decode(base64Credentials);
        return new String(decoded).split(":", 2);
    }

    private boolean validateUser(String username, String password) {
        return "user".equals(username) && "pwd".equals(password);
    }

    @GetMapping("/test")
    public String test() {
        return "✅ Controller working";
    }

}
