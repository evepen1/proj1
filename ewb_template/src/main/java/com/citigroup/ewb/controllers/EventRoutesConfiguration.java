package com.citigroup.ewb.controllers;

import com.citigroup.ewb.models.Event;
import com.citigroup.ewb.repositories.EventRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.web.reactive.function.server.RequestPredicates;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;

import static org.springframework.web.reactive.function.server.RequestPredicates.method;
import static org.springframework.web.reactive.function.server.RequestPredicates.path;
import static org.springframework.web.reactive.function.server.RouterFunctions.nest;
import static org.springframework.web.reactive.function.server.RouterFunctions.route;
import static org.springframework.web.reactive.function.server.ServerResponse.ok;

/**
 * Created by Sunil Yadav on 12/19/2017.
 */
@Configuration
public class EventRoutesConfiguration {
    @Bean
    RouterFunction<ServerResponse> eventRoutes(EventRepository eventRepository) {

        return nest(path("/event"),

                route(RequestPredicates.GET("/{id}"),
                        request -> ok().body(eventRepository.findById(request.pathVariable("id")), Event.class))

                        .andRoute(method(HttpMethod.POST),
                                request -> {
                                    eventRepository.insert(request.bodyToMono(Event.class)).subscribe();
                                    return ok().build();
                                })

                        .andRoute(method(HttpMethod.GET),
                                request -> ok().body(eventRepository.findAll(), Event.class))
        );

    }
}
