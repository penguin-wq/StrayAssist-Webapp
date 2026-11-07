/* Declares the base package for this Spring Boot application.
 * Component scanning, auto-configuration, and configuration classes -
 * will be discovered starting from this package and its sub-packages.
 */
package com.capstone.strayassist;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Main entry point for the StrayAssist Spring Boot application.
 *
 * <p>The {@link SpringBootApplication} annotation is a convenience annotation that combines:
 * <ul>
 *   <li>{@code @Configuration} – marks this class as a source of bean definitions.</li>
 *   <li>{@code @EnableAutoConfiguration} – enables Spring Boot's auto-configuration mechanism.</li>
 *   <li>{@code @ComponentScan} – enables scanning for components (controllers, services, repositories, etc.)
 *       in this package and its sub-packages.</li>
 * </ul>
 * </p>
 */
@SpringBootApplication
public class StrayassistApplication {

	/**
	 * Application entry point.
	 *
	 * <p>Bootstraps the Spring application context and starts the embedded server
	 * (e.g., Tomcat) so the application can begin handling requests.</p>
	 *
	 * @param args command-line arguments passed to the application at startup
	 */
	public static void main(String[] args) {
		// Launch the Spring Boot application.
		SpringApplication.run(StrayassistApplication.class, args);
	}
}
