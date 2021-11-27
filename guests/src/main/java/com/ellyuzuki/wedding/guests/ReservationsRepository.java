package com.ellyuzuki.wedding.guests;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ellyuzuki.wedding.guests.Reservations;

@Repository
public interface ReservationsRepository extends JpaRepository<Reservations, Long>{
    
    //Reservations findById(Long id);
}