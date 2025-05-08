package workshop.inditex.backend.entities;

import java.util.List;
import java.util.Objects;

public class Store {
    private String id;
    private Double latitude;
    private Double longitude;
    private String country;
    private Integer maxStockCapacity;
    private double expectedReturnRate;
    private List<InventoryItem> demand;

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

    public Integer getMaxStockCapacity() {
        return maxStockCapacity;
    }

    public void setMaxStockCapacity(Integer maxStockCapacity) {
        this.maxStockCapacity = maxStockCapacity;
    }

    public double getExpectedReturnRate() {
        return expectedReturnRate;
    }

    public void setExpectedReturnRate(double expectedReturnRate) {
        this.expectedReturnRate = expectedReturnRate;
    }

    public List<InventoryItem> getDemand() {
        return demand;
    }

    public void setDemand(List<InventoryItem> demand) {
        this.demand = demand;
    }



    @Override
    public int hashCode() {
        return Objects.hash(id, latitude, longitude, country, maxStockCapacity, expectedReturnRate, demand);
    }
}
