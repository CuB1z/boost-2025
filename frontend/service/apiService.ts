import type { ApiResponse } from "@/types/ApiResponse";
import { mockData } from "./fakeData";

interface ApiError {
  message: string;
  status?: number;
}

export class ApiService {
  /**
   * Método genérico para obtener datos de la API
   * @param endpoint - Endpoint de la API
   * @param options - Opciones adicionales para fetch
   * @returns Datos tipados de la API
   */
  static async fetchData<T>(
    endpoint: string, 
    options?: RequestInit
  ): Promise<{ data: ApiResponse<T> | null; error: ApiError | null }> {
    try {
      const response = await fetch(`/api/${endpoint}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Puedes agregar headers adicionales como autorización
        },
        ...options
      });

      if (!response.ok) {
        return {
          data: null,
          error: {
            message: `Error al obtener datos: ${response.statusText}`,
            status: response.status
          }
        };
      }

      const data = await response.json();
      return { data, error: null };
    } catch (err) {
      return {
        data: null,
        error: {
          message: err instanceof Error ? err.message : 'Error desconocido al obtener datos'
        }
      };
    }
  }

  /**
   * Obtiene los datos de productos
   */
  static async getProducts<T>() {
    return this.fetchData<T>('data');
  }

  /**
   * Obtiene datos específicos de la tienda
   */
  static async getStoreData<T>() {
    return this.fetchData<T>('store');
  }

  /**
   * Obtiene datos específicos del almacén
   */
  static async getWarehouseData<T>() {
    return this.fetchData<T>('warehouse');
  }
}