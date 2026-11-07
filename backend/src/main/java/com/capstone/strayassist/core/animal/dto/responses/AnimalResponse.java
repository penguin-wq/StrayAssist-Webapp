package com.capstone.strayassist.core.animal.dto.responses;

import java.time.LocalDate;

public record AnimalResponse(
  Long id,
  String name,
  LocalDate birDate,
  int age,
  Double weight,
  String sex,
  String type,
  String location
) {}
