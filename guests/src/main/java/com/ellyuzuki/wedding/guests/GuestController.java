package com.ellyuzuki.wedding.guests;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ellyuzuki.wedding.guests.ReservationsRepository;
import com.ellyuzuki.wedding.guests.Reservations;

@RestController
@RequestMapping("/guests/")
class GuestController {

    @Autowired
    ReservationsRepository reservationRepository;

    // @GetMapping("greeting")
	// public String greeting() {
	// 	return "Hello World!";
	// }

    @GetMapping("/getAll")
    public ResponseEntity<List<Reservations>> getAll() {
        //System.out.println("/guests/getAll was called!");
        try {
            List<Reservations> items = new ArrayList<Reservations>();

            reservationRepository.findAll().forEach(items::add);

            if (items.isEmpty())
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);

            return new ResponseEntity<>(items, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // @GetMapping("{id}")
    // public ResponseEntity<Reservations> getById(@PathVariable("id") Long id) {
    //     Optional<Reservations> existingItemOptional = reservationRepository.findById(id);

    //     if (existingItemOptional.isPresent()) {
    //         return new ResponseEntity<>(existingItemOptional.get(), HttpStatus.OK);
    //     } else {
    //         return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    //     }
    // }

    @PostMapping
    public ResponseEntity<Reservations> create(@RequestBody Reservations item) {
        //System.out.println("Received following item: " + item);
        try {
            Reservations savedItem = reservationRepository.save(item);
            return new ResponseEntity<>(savedItem, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
        }
    }

    // @DeleteMapping("{id}")
    // public ResponseEntity<HttpStatus> delete(@PathVariable("id") Long id) {
    //     try {
    //         reservationRepository.deleteById(id);
    //         return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    //     } catch (Exception e) {
    //         return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
    //     }
    // }
}