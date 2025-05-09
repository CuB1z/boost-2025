import { Action } from "@/types/Action";

export const mockShipments: Action[] = [
  {
    id: "ship-001",
    position: {
      store: {
        id: "store-001",
        latitude: 40.4168,
        longitude: -3.7038
      },
      warehouse: {
        id: "wh-001",
        latitude: 40.4489,
        longitude: -3.6827
      }
    },
    products: [
      {
        productId: "prod-001",
        size: "M",
        quantity: 5
      }
    ]
  },
  {
    id: "ship-002",
    position: {
      store: {
        id: "store-002",
        latitude: 41.3851,
        longitude: 2.1734
      },
      warehouse: {
        id: "wh-002",
        latitude: 41.4021,
        longitude: 2.1526
      }
    },
    products: [
      {
        productId: "prod-002",
        size: "L",
        quantity: 3
      }
    ]
  },
  {
    id: "ship-003",
    position: {
      store: {
        id: "store-003",
        latitude: 37.3891,
        longitude: -5.9845
      },
      warehouse: {
        id: "wh-001",
        latitude: 40.4489,
        longitude: -3.6827
      }
    },
    products: [
      {
        productId: "prod-003",
        size: "S",
        quantity: 10
      }
    ]
  },
  {
    id: "ship-004",
    position: {
      store: {
        id: "store-004",
        latitude: 39.4699,
        longitude: -0.3763
      },
      warehouse: {
        id: "wh-003",
        latitude: 39.4902,
        longitude: -0.3924
      }
    },
    products: [
      {
        productId: "prod-004",
        size: "XL",
        quantity: 2
      }
    ]
  },
  {
    id: "ship-005",
    position: {
      store: {
        id: "store-002",
        latitude: 41.3851,
        longitude: 2.1734
      },
      warehouse: {
        id: "wh-001",
        latitude: 40.4489,
        longitude: -3.6827
      }
    },
    products: [
      {
        productId: "prod-005",
        size: "M",
        quantity: 7
      }
    ]
  },
  {
    id: "ship-006",
    position: {
      store: {
        id: "store-005",
        latitude: 43.2627,
        longitude: -2.9253
      },
      warehouse: {
        id: "wh-004",
        latitude: 43.2569,
        longitude: -2.9235
      }
    },
    products: [
      {
        productId: "prod-006",
        size: "S",
        quantity: 4
      }
    ]
  },
  {
    id: "ship-007",
    position: {
      store: {
        id: "store-001",
        latitude: 40.4168,
        longitude: -3.7038
      },
      warehouse: {
        id: "wh-002",
        latitude: 41.4021,
        longitude: 2.1526
      }
    },
    products: [
      {
        productId: "prod-007",
        size: "L",
        quantity: 6
      }
    ]
  },
  {
    id: "ship-008",
    position: {
      store: {
        id: "store-003",
        latitude: 37.3891,
        longitude: -5.9845
      },
      warehouse: {
        id: "wh-003",
        latitude: 39.4902,
        longitude: -0.3924
      }
    },
    products: [
      {
        productId: "prod-008",
        size: "XXL",
        quantity: 1
      }
    ]
  },
  {
    id: "ship-009",
    position: {
      store: {
        id: "store-004",
        latitude: 39.4699,
        longitude: -0.3763
      },
      warehouse: {
        id: "wh-001",
        latitude: 40.4489,
        longitude: -3.6827
      }
    },
    products: [
      {
        productId: "prod-009",
        size: "M",
        quantity: 8
      }
    ]
  },
  {
    id: "ship-010",
    position: {
      store: {
        id: "store-005",
        latitude: 43.2627,
        longitude: -2.9253
      },
      warehouse: {
        id: "wh-002",
        latitude: 41.4021,
        longitude: 2.1526
      }
    },
    products: [
      {
        productId: "prod-010",
        size: "L",
        quantity: 3
      }
    ]
  }
];