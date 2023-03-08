package spring.project.perfume.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import spring.project.perfume.entity.perfumeDetails;


public interface perfumeRepo extends JpaRepository<perfumeDetails, Integer> {

}
