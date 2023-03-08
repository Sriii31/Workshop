package spring.project.perfume.entity;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "perfumedetails")
public class perfumeDetails {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int perId;
	private String perfumebrands;
	private String perfumeedition;
	private Boolean avaliable ;
	private int price;
	private String perfumeflavours;
	
	
	

	public int getPerId() {
		return perId;
	}




	public void setPerId(int perId) {
		this.perId = perId;
	}




	public String getPerfumebrands() {
		return perfumebrands;
	}




	public void setPerfumebrands(String perfumebrands) {
		this.perfumebrands = perfumebrands;
	}




	public String getPerfumeedition() {
		return perfumeedition;
	}




	public void setPerfumeedition(String perfumeedition) {
		this.perfumeedition = perfumeedition;
	}




	public Boolean getAvaliable() {
		return avaliable;
	}




	public void setAvaliable(Boolean avaliable) {
		this.avaliable = avaliable;
	}




	public int getPrice() {
		return price;
	}




	public void setPrice(int price) {
		this.price = price;
	}




	public String getPerfumeflavours() {
		return perfumeflavours;
	}




	public void setPerfumeflavours(String perfumeflavours) {
		this.perfumeflavours = perfumeflavours;
	}




	public perfumeDetails(int perId, String perfumebrands, String perfumeedition, Boolean avaliable, int price,
			String perfumeflavours) {
		super();
		this.perId = perId;
		this.perfumebrands = perfumebrands;
		this.perfumeedition = perfumeedition;
		this.avaliable = avaliable;
		this.price = price;
		this.perfumeflavours = perfumeflavours;
	}




	public perfumeDetails(){
		
	}
	
}
