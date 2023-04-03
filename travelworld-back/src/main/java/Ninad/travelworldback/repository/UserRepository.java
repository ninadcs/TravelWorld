package Ninad.travelworldback.repository;

import Ninad.travelworldback.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
