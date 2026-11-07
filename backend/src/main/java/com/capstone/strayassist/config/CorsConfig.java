package com.capstone.strayassist.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;

/**
 * Global Cross-Origin Resource Sharing (CORS) Configuration.
 * <p>
 * By default, web browsers block frontend applications (like React/Vue running on Vite)
 * from reading API responses if they originate from a different port or domain.
 * This configuration acts as a security "safety valve," explicitly telling the browser
 * that our backend trusts and allows requests from our local frontend development environment.
 */

@Configuration
public class CorsConfig implements WebMvcConfigurer {
    
    @Override
    public void addCorsMappings(CorsRegistry registry) {
      // explicitly whitelist the `Vite` development server origin
      registry.addMapping("/api/**")
        .allowedOrigins("http://localhost:5173")
        // allowed standard RESTful HTTP actions required by the frontend
        .allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH")
        // accepts all incoming HTTP headers
        .allowedHeaders("*");
    }
}
