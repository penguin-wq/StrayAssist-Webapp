package com.capstone.strayassist.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class GreetController {

  @GetMapping("/hello")
  public Map<String, String> greet() {
    return Map.of("message", "Hello World");
  }
}
