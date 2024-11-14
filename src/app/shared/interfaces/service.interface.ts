export interface MainService {
    id: number;
    name: string;
    icon: string;
    description: string;
    totalRequests?: number;
    trend?: 'up' | 'down';
    trendValue?: number;
    subServices?: SubService[];
  }
  
  export interface SubService {
    id: number;
    mainServiceId: number;
    name: string;
    description: string;
    price: number;
    estimatedTime?: string;
    icon?: string;
  }

  export interface Worker {
    id: number;
    name: string;
    image: string;
    rating: number;
    completedJobs: number;
    service: string;
    responseRate: number;
    about?: string;
    address?: string;
    availability?: string;
    price?: number;
    lastOnline?: string;
  }

  export interface ServiceItem {
    id: number;
    name: string;
    price: number;
    description: string;
  }
  
  export interface ServiceSection {
    id: number;
    title: string;
    items: ServiceItem[];
  }