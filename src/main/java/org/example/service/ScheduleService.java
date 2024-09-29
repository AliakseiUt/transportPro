package org.example.service;

//import com.example.publictransport.model.Schedule;
//import com.example.publictransport.repository.ScheduleRepository;
import org.hibernate.mapping.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.example.schedule.Schedule;
import org.example.repository.ScheduleRepository;

//import java.util.List;

@Service
public class ScheduleService {
    @Autowired
    private ScheduleRepository scheduleRepository;

    public List<Schedule> getAllSchedules() {
        return scheduleRepository.findAll();
    }

    public void bookTickets(String route, int seats) {
        // Ваша логика бронирования билетов
    }
}
