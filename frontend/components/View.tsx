"use client";

import styles from "@/styles/View.module.css";
import { useState } from "react";
import type { ApiResponse } from "@/types/ApiResponse";
import type { Product } from "@/types/Product";
import { mockShipments } from "@/service/fakeData";
import { Action } from "@/types/Action";

export default function View() {
    const [storeActive, setStoreActive] = useState(false);
    const [data, setData] = useState<ApiResponse<Product> | null>(mockShipments);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Renderizado condicional mientras se cargan los datos
    if (loading) return <div className={styles.loading}>Cargando datos...</div>;
    if (error) return <div className={styles.error}>Error: {error}</div>;
    if (!data || data.length === 0) return <div className={styles.noData}>No hay datos disponibles</div>;

    return (
        <div className={styles.container}>
            <div className={styles.viewSelector}>
                <button
                    className={`${styles.viewButton} ${!storeActive ? styles.active : ''}`}
                    onClick={() => setStoreActive(false)}
                >
                    Vista Almacén
                </button>
                <button
                    className={`${styles.viewButton} ${storeActive ? styles.active : ''}`}
                    onClick={() => setStoreActive(true)}
                >
                    Vista Tienda
                </button>
            </div>

            <div className={styles.viewContent}>
                {storeActive ? (
                    <div className={styles.storeView}>
                        {data.map((item: Action) => (
                            <table className={styles.dataTable}>
                                <tbody>
                                    <tr>
                                        <th colSpan={2}>Información del Envío</th>
                                    </tr>
                                    <tr>
                                        <th>ID</th>
                                        <td>{item.id}</td>
                                    </tr>
                                    <tr>
                                        <th colSpan={2}>Ubicación de Tienda</th>
                                    </tr>
                                    <tr>
                                        <td>ID</td>
                                        <td>{item.position.store.id}</td>
                                    </tr>
                                    <tr>
                                        <td>Latitud</td>
                                        <td>{item.position.store.latitude}</td>
                                    </tr>
                                    <tr>
                                        <td>Longitud</td>
                                        <td>{item.position.store.longitude}</td>
                                    </tr>
                                    <tr>
                                        <th colSpan={2}>Ubicación de Almacén</th>
                                    </tr>
                                    <tr>
                                        <td>ID</td>
                                        <td>{item.position.warehouse.id}</td>
                                    </tr>
                                    <tr>
                                        <td>Latitud</td>
                                        <td>{item.position.warehouse.latitude}</td>
                                    </tr>
                                    <tr>
                                        <td>Longitud</td>
                                        <td>{item.position.warehouse.longitude}</td>
                                    </tr>
                                    <tr>
                                        <th colSpan={2}>Productos</th>
                                    </tr>
                                    {item.products.map((product, index) => (
                                        <tr key={index}>
                                            <td colSpan={2}>
                                                <table className={styles.nestedTable}>
                                                    <tbody>
                                                        <tr>
                                                            <td>ID Producto</td>
                                                            <td>{product.productId}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Tamaño</td>
                                                            <td>{product.size}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Cantidad</td>
                                                            <td>{product.quantity}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ))}
                    </div>
                ) : (
                    <div className={styles.warehouseView}>Contenido de Vista Almacén</div>
                )}
            </div>
        </div>
    );
}