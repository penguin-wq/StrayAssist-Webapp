package com.capstone.strayassist.core.animal.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "animal_profile")
public class Animal {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false)
  private LocalDate birDate;

  @Enumerated(EnumType.STRING)
  @Column(nullable = false)
  private Sex sex;

  @Enumerated(EnumType.STRING)
  @Column(nullable = false)
  private AnimalType type;

  @Column(nullable = false)
  private String location;
  
  public enum Sex { MALE, FEMALE, UNKNOWN }
  public enum AnimalType { DOG, CAT }

  public Long getId() {
    return id;
  }

  public String getLocation() {
    return location;
  }

  public Sex getSex() {
    return sex;
  }
  
  public AnimalType getAnimalType() {
    return type;
  }
  
  public void setId(Long id) {
    this.id = id;
  }

  public void setLocation(String location) {
    this.location = location;
  }

  public void setAnimalType(AnimalType type) {
    this.type = type;
  }

  public void setSex(Sex sex) {
    this.sex = sex;
  }
}
