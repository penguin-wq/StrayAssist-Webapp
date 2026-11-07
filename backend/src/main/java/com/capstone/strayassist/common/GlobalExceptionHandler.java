package com.capstone.strayassist.common;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.stream.Collectors;

/**
 * Global exception handler for the StrayAssist REST API.
 *
 * <p>The {@link RestControllerAdvice} annotation marks this class as a centralized
 * advice that applies to <b>all</b> {@code @RestController}s in the application.
 *
 * It intercepts exceptions thrown by controllers and converts them into
 * structured HTTP responses, so individual controllers don't need to handle
 * errors themselves.</p>
 *
 * <p>This keeps error handling consistent and DRY across the whole API.</p>
 */
@RestControllerAdvice
public class GlobalExceptionHandler {

  /**
   * Handles bean-validation failures triggered by {@code @Valid} on request bodies.
   *
   * <p>When a controller parameter is annotated with {@code @Valid} (or
   * {@code @Validated}) and validation fails, Spring throws a
   * {@link MethodArgumentNotValidException}. This handler catches it and returns
   * a clean {@code 400 Bad Request} response instead of the default stack trace.</p>
   *
   * <p>The response body is a {@code Map} where each key is the name of the
   * invalid field and each value is the corresponding validation error message,
   * e.g.:</p>
   * <pre>{@code
   * {
   *   "email": "must be a well-formed email address",
   *   "name":  "must not be blank"
   * }
   * }</pre>
   *
   * @param ex the validation exception thrown by Spring when request body validation fails
   * @return a map of field name → validation error message
   */
  @ExceptionHandler(MethodArgumentNotValidException.class)
  @ResponseStatus(HttpStatus.BAD_REQUEST) // Always respond with HTTP 400 Bad Request
  public Map<String, String> handleValidation(
    MethodArgumentNotValidException ex) {

    return ex
      // Access the binding/validation results collected by Spring
      .getBindingResult()
      // Get all field-level validation errors
      .getFieldErrors()
      // Convert the list of errors into a stream for processing
      .stream()
      // Collect the errors into a Map<fieldName, errorMessage>
      .collect(Collectors.toMap(
        f -> f.getField(),          // key   = name of the invalid field
        f -> f.getDefaultMessage(), // value = human-readable validation message
        (a, b) -> a                 // merge function: if the same field has multiple
                                    // errors, keep the first one (avoids
                                    // IllegalStateException from duplicate keys)
      ));
  }
}
