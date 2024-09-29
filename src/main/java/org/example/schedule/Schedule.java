package org.example.schedule;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Schedule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String route;
    private String time;

    // Constructors, Getters, Setters
    public Schedule() {}

    public Schedule(String route, String time) {
        this.route = route;
        this.time = time;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getRoute() { return route; }
    public void setRoute(String route) { this.route = route; }
    public String getTime() { return time; }
    public void setTime(String time) { this.time = time; }
}
