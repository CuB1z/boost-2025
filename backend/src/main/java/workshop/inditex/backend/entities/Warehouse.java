package workshop.inditex.backend.entities;
import java.util.List;

public class Warehouse {
    private String id;
    private double latitude;
    private double longitude;
    private String country;
    private List<InventoryItem> stock;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public List< InventoryItem> getStock() {
        return stock;
    }

    public void setStock(List<InventoryItem> stock) {
        this.stock = stock;
    }
}
