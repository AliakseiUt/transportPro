package org.example.repository;

import com.example.publictransport.model.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.example.schedule.Schedule;

@Repository
public interface ScheduleRepository extends JpaRepository<Schedule, Long> {
}
