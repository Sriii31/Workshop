package spring.project.perfume.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import spring.project.perfume.entity.perfumeDetails;
import spring.project.perfume.repository.perfumeRepo;

import java.util.List;
@Service
public class perfumeService {

	@Autowired
	private perfumeRepo com;
	public perfumeDetails savedata(perfumeDetails s) {
		return com.save(s);
	}
	public List<perfumeDetails> findall(){
		return com.findAll();
	}
	public void deletedata(int bookId) {
		com.deleteById(bookId);
	}
	public perfumeDetails updatedata(perfumeDetails s) {
		return com.saveAndFlush(s);
	}
}
