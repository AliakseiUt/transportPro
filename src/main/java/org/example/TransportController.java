package org.example;

//import com.example.publictransport.model.Schedule;
//import com.example.publictransport.service.ScheduleService;
import org.hibernate.mapping.List;
import org.springframework.web.bind.annotation.*;
import org.example.schedule.Schedule;
import org.example.service.ScheduleService;

//import java.util.List;

@RestController
@RequestMapping("/api")
public class TransportController {
    private final ScheduleService scheduleService;

    public TransportController(ScheduleService scheduleService) {
        this.scheduleService = scheduleService;
    }

    @GetMapping("/org/example/schedule")
    public List<Schedule> getSchedule() {
        return scheduleService.getAllSchedules();
    }

    @PostMapping("/book-tickets")
    public void bookTickets(@RequestBody BookingRequest request) {
        scheduleService.bookTickets(request.getRoute(), request.getSeats());
    }

    public static class BookingRequest {
        private String route;
        private int seats;

        // Getters and Setters
        public String getRoute() { return route; }
        public void setRoute(String route) { this.route = route; }
        public int getSeats() { return seats; }
        public void setSeats(int seats) { this.seats = seats; }
    }
}
