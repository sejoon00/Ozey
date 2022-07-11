package com.Ozey.ozey.web.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
public class HelloWorldController {

    @GetMapping("/api/hello")
    public String test(){
        return "Hello, world!";
    }
}
