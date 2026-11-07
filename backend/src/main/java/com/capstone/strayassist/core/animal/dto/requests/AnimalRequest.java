package com.capstone.strayassist.core.animal.dto.requests;
import com.capstone.strayassist.core.animal.dto.entity.*;

import jakarta.validation.constraints.*;
import java.time.LocalDate;

public record AnimalRequest(
  @NotBlank String name,
  @NotNull @Past LocalDate birthDate,
  @NotNull @Positive Double weight,
  @NotNull Animal.Sex sex,
  @NotNull Animal.AnimalType type,
  @NotBlank String location
) {}
