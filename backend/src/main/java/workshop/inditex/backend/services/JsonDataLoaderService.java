package workshop.inditex.backend.services;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;
import workshop.inditex.backend.entities.Store;
import workshop.inditex.backend.entities.Warehouse;

import java.io.File;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class JsonDataLoaderService {

    private static final ObjectMapper mapper = new ObjectMapper()
        .configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);

    public static Map<String, Store> loadStores(String filePath) throws Exception {
        List<Store> stores = mapper.readValue(new File(filePath), new TypeReference<List<Store>>() {});
        return stores.stream().collect(Collectors.toMap(Store::getId, s -> s));
    }

    public static Map<String, Warehouse> loadWarehouses(String filePath) throws Exception {
        List<Warehouse> warehouses = mapper.readValue(new File(filePath), new TypeReference<List<Warehouse>>() {});
        return warehouses.stream().collect(Collectors.toMap(Warehouse::getId, s -> s));
    }
}
