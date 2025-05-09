package workshop.inditex.backend.entities;

import java.util.Objects;

public class InventoryItem {
    private String productId;
    private String size;
    private int quantity;

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    @Override
    public boolean equals(Object o) {
        if (!(o instanceof InventoryItem that)) return false;
        return quantity == that.quantity && Objects.equals(productId, that.productId) && Objects.equals(size, that.size);
    }

    @Override
    public int hashCode() {
        return Objects.hash(productId, size, quantity);
    }
}