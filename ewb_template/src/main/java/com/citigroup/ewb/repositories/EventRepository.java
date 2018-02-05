package com.citigroup.ewb.repositories;

import com.citigroup.ewb.models.Event;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

/**
 * Created by Sunil Yadav on 12/19/2017.
 */
public interface EventRepository extends ReactiveMongoRepository<Event,String> {

}
