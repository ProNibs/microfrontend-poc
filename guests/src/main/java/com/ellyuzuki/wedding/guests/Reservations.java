package com.ellyuzuki.wedding.guests;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Reservations {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private Integer additionalGuests;

    public Reservations() {}

    // No additional guests, so just default to 0
    public Reservations(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.additionalGuests = 0;
    }

    public Reservations(String firstName, String lastName, Integer additionalGuests) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.additionalGuests = additionalGuests;
    }
}

