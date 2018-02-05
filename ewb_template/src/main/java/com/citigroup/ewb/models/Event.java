package com.citigroup.ewb.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

import static org.springframework.format.annotation.DateTimeFormat.ISO.DATE_TIME;

/**
 * Created by Sunil Yadav on 12/18/2017.
 */

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Event {
    @Id
    private String id;
    private long transactionId;
    private String firmCode;
    private String type;
    private String tradeId;
    private String blockId;
    private String assetClass;
    private String custodian;
    private String source;
    private String stage;
    private String descripton;
    @DateTimeFormat(iso = DATE_TIME)
    private Date createdAt = new Date();

}