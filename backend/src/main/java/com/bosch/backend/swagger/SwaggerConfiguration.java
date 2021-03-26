package com.bosch.backend.swagger;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfiguration {
	
	@Bean
	public Docket swaggerConfig() {
		
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				.paths(PathSelectors.ant("/api/**"))
				.apis(RequestHandlerSelectors.basePackage("com.bosch.backend"))
				.build()
				.apiInfo(apiInfo());
		
	}

	private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
        		.title("Book-Author-App API Documentation")
        		.description("Demo Spring-Boot, Angular10 app with CRUD operations")
        		.version("1.3.1")
        		.license("RBEI API License")
        		.licenseUrl("https://www.bosch-india-software.com/en/our-company/about-us/")
        		.contact(new springfox.documentation.service.Contact(
        				"Atanu Sarkar",
        				"https://www.linkedin.com/in/mratanusarkar/",
        				"Atanu.Sarkar@in.bosch.com"))
        		.termsOfServiceUrl("https://www.bosch-india-software.com/en/terms-of-use/data-protection-notice/")
        		.build();
    }

}
