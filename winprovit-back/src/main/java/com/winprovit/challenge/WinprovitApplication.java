package com.winprovit.challenge;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class WinprovitApplication {

	public static void main(String[] args) {
		SpringApplication.run(WinprovitApplication.class, args);
	}

}
