package spring.project.perfume.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import spring.project.perfume.entity.perfumeDetails;
import spring.project.perfume.service.perfumeService;


@RestController
@CrossOrigin("http://localhost:3000")
public class perfumeController {

	@Autowired
	 private perfumeService  cs;
	 
	 @PostMapping("/save")
	 public String savingBook(@RequestBody perfumeDetails d) {
		  cs.savedata(d);
		  return "saved";
	 }
	 @GetMapping("/findall")
	 public List<perfumeDetails> listing()
	  {
	 	 return cs.findall();
	  }
	 @PutMapping("/updatedata")
	 public String updateCompany(@RequestBody perfumeDetails d) {
		  cs.updatedata(d);
		  return "updated";
	 }
	 @DeleteMapping("/delete{perId}")
	 public String deleteCompany(@PathVariable("perId")int perId) {
		 cs.deletedata(perId);
		 return "deleted";
	 }
}
