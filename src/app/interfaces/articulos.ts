export interface Articulos {
    current_page: number;
    data: Items[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url?: any;
    to: number;
    total: number;
  }
  
export  interface Items {
    id: number;
    titulo: string;
    nombre: string;
    contenido: string;
    orden: number;
  }