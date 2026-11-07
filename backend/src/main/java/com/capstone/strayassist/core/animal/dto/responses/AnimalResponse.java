package com.capstone.strayassist.core.animal.dto.responses;

import java.time.LocalDate;

/**
 * <p>Decoupled from the {@code Animal} entity so persistence details
 * never leak to clients. {@code age}, {@code sex}, and {@code type} are
 * derived when mapping from the entity:</p>
 * <ul>
 *   <li>{@code age} = years between {@code birthDate} and today</li>
 *   <li>{@code sex} = {@code Animal.Sex.name()}</li>
 *   <li>{@code type} = {@code Animal.AnimalType.name()}</li>
 * </ul>
 */
public record AnimalResponse(
  // Database identifier
  Long id,

  // Animal's name
  String name,

  // Animal's birth date (raw value)
  LocalDate birthDate,

  // Derived age in whole years; computed from birthDate in the mapper/service
  int age,

  // Weight in kg
  Double weight,

  // Sex as a string (Animal.Sex.name())
  String sex,

  // Type as a string (Animal.AnimalType.name())
  String type,

  // Location
  String location
) {}
