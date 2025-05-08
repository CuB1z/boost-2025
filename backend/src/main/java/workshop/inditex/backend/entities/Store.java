package workshop.inditex.backend.entities;

import java.util.Map;
import java.util.Objects;

public class Store {
    private String id;
    private double latitude;
    private double longitude;
    private String country;
    private int maxStockCapacity;
    private double expectedReturnRate;
    private Map<String, InventoryItem> demand;

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

    public int getMaxStockCapacity() {
        return maxStockCapacity;
    }

    public void setMaxStockCapacity(int maxStockCapacity) {
        this.maxStockCapacity = maxStockCapacity;
    }

    public double getExpectedReturnRate() {
        return expectedReturnRate;
    }

    public void setExpectedReturnRate(double expectedReturnRate) {
        this.expectedReturnRate = expectedReturnRate;
    }

    public Map<String, InventoryItem> getDemand() {
        return demand;
    }

    public void setDemand(Map<String, InventoryItem> demand) {
        this.demand = demand;
    }

    @Override
    public boolean equals(Object o) {
        if (!(o instanceof Store store)) return false;
        return Double.compare(latitude, store.latitude) == 0 && Double.compare(longitude, store.longitude) == 0 && maxStockCapacity == store.maxStockCapacity && Double.compare(expectedReturnRate, store.expectedReturnRate) == 0 && Objects.equals(id, store.id) && Objects.equals(country, store.country) && Objects.equals(demand, store.demand);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, latitude, longitude, country, maxStockCapacity, expectedReturnRate, demand);
    }
}
