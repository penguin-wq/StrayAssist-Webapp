package com.capstone.strayassist.core.animal.dto.requests;

import com.capstone.strayassist.core.animal.entity.Animal;

import jakarta.validation.constraints.*;
import java.time.LocalDate;

/**
 * <p>Validated by Bean Validation before reaching the controller body.
 * Any violation is caught by {@code GlobalExceptionHandler} and returned
 * as a {@code 400 Bad Request} with a field -> message map.</p>
 */
public record AnimalRequest(
  // Animal's name; must not be blank
  @NotBlank String name,

  // Birth date; must be present and strictly in the past
  @NotNull @Past LocalDate birthDate,

  // Weight in kg; must be present and positive
  @NotNull @Positive Double weight,

  // Sex; must be present and one of Animal.Sex
  @NotNull Animal.Sex sex,

  // Type; must be present and one of Animal.AnimalType
  @NotNull Animal.AnimalType type,

  // Location; must not be blank
  @NotBlank String location
) {}
