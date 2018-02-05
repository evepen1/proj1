package com.citigroup.ewb;

import org.junit.jupiter.api.*;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.reactive.server.WebTestClient;
/**
 * Created by Sunil Yadav on 12/27/2017.
 */
@DisplayName("A Test case for Kafka rest api")
@ExtendWith(SpringExtension.class)
@SpringBootTest
@SpringBootApplication
class KafkaRestApiTests {

    private static WebTestClient client;

    @BeforeAll
    static void initAll() {
        client = WebTestClient.bindToServer().baseUrl("http://sd-ca1d-dc6f:8082").build();

    }

    @BeforeEach
    void init() {
    }

    @Test
    @DisplayName("Get kafka topics using rest api call 😱")
    void kafkaTopicsTest() {

        client.get().uri("/topics").accept(MediaType.APPLICATION_JSON_UTF8)
                .exchange()
                .expectStatus().isOk()
                .expectBody()
                .jsonPath("$[1]").isEqualTo("jsontest");
    }

    @AfterEach
    void tearDown() {
    }

    @AfterAll
    static void tearDownAll() {
    }
}
