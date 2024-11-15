import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { ServiceRequest, RequestStep, RequestStatus, PaymentDetails } from '../../shared/interfaces/request.interface';
@Injectable({
  providedIn: 'root'
})
export class RequestDataService {
  private currentRequest = new BehaviorSubject<Partial<ServiceRequest>>({});

  readonly steps: RequestStep[] = [
    { id: 1, title: 'نوع الخدمة', subtitle: 'اختر الخدمة المطلوبة', icon: 'tools', completed: false },
    { id: 2, title: 'التفاصيل', subtitle: 'اضف وصف المشكلة والصور', icon: 'image', completed: false },
    { id: 3, title: 'الموقع والوقت', subtitle: 'حدد الموقع وموعد الخدمة', icon: 'map-marker', completed: false },
    { id: 4, title: 'الدفع', subtitle: 'اختر طريقة الدفع المناسبة', icon: 'credit-card', completed: false }
  ];

  private readonly mockRequests: ServiceRequest[] = [
    {
      id: 1,
      category: 'electrician',
      service: 'تصليح تكييف',
      description: 'التكييف في غرفة النوم لا يعمل بشكل جيد. لا يبرد الهواء كما ينبغي وهناك صوت غريب يصدر منه عند التشغيل. أحتاج لفني لفحص المشكلة وإصلاحها.',
      location: {
        address: 'المعادي، القاهرة',
        coordinates: [30.0444, 31.2357]
      },
      scheduledDate: '2024-11-14',
      scheduledTime: '14:00',
      images: ['/api/placeholder/200/200', '/api/placeholder/200/200'],
      estimatedCost: 250,
      paymentMethod: 'cash',
      status: 'pending',
      createdAt: '2024-11-13T10:00:00',
      customerId: 1
    },
    {
      id: 2,
      category: 'plumber', 
      service: 'صيانة عامة',
      description: 'هناك تسريب مياه بطيء تحت حوض المطبخ. يبدو أن الأنبوب تالف ويحتاج لاستبدال. نحتاج سباك في أسرع وقت لإصلاح المشكلة قبل أن تتفاقم.',
      location: {
        address: 'مدينة نصر، القاهرة',
        coordinates: [30.0511, 31.2497]  
      },
      scheduledDate: '2024-11-14',
      scheduledTime: '10:00',
      images: ['/api/placeholder/200/200'],
      estimatedCost: 180,
      paymentMethod: 'cash',
      status: 'accepted',
      createdAt: '2024-11-13T14:30:00',
      customerId: 2,
      workerId: 3
    },
    {
      id: 3,
      category: 'electrician',
      service: 'تصليح أجهزة',  
      description: 'الغسالة لا تعمل. عند تشغيلها، لا يحدث شيء على الإطلاق. ربما تكون مشكلة كهربائية. أحتاج كهربائي لتشخيص المشكلة وإصلاحها إذا أمكن، أو نصيحة بشأن استبدالها إذا لزم الأمر.',
      location: {
        address: 'المهندسين، الجيزة',
        coordinates: [30.0611, 31.2083]
      },  
      scheduledDate: '2024-11-15',
      scheduledTime: '13:00', 
      images: ['/api/placeholder/200/200', '/api/placeholder/200/200'],
      estimatedCost: 200,
      paymentMethod: 'cash',
      status: 'inProgress',
      createdAt: '2024-11-13T16:00:00',
      customerId: 1,
      workerId: 2  
    },
    {
      id: 4,
      category: 'plumber',
      service: 'طوارئ',
      description: 'يوجد انسداد شديد في الحمام ولا يمكن استخدامه على الإطلاق. حاولنا استخدام المكبس لكن دون جدوى. نحتاج سباك طوارئ للقدوم في أسرع وقت ممكن!',
      location: {
        address: 'شبرا، القاهرة',
        coordinates: [30.1283, 31.2497]
      },
      scheduledDate: '2024-11-14', 
      scheduledTime: '09:00',
      images: [],
      estimatedCost: 300,
      paymentMethod: 'cash',  
      status: 'completed',
      createdAt: '2024-11-14T07:30:00',
      customerId: 3,
      workerId: 1
    },
    {
      id: 5,
      category: 'electrician',
      service: 'صيانة عامة',
      description: 'هناك عدة مشاكل كهربائية صغيرة في المنزل. بعض المقابس لا تعمل، وهناك ضوء يومض في الحمام. نحتاج كهربائي لإجراء فحص شامل وإصلاح أي مشاكل.',
      location: {
        address: 'المقطم، القاهرة',  
        coordinates: [30.0283, 31.3157]
      },
      scheduledDate: '2024-11-16',
      scheduledTime: '15:00',
      images: ['/api/placeholder/200/200'],  
      estimatedCost: 150,
      paymentMethod: 'card',
      status: 'draft',
      createdAt: '2024-11-14T09:00:00',
      customerId: 4
    },
    {
      id: 6,
      category: 'plumber',
      service: 'صيانة عامة',
      description: 'هناك مشكلة في الصنابير في الحمامات. المياه لا تتدفق بشكل جيد ويبدو أن هناك تراكم في الأنابيب. نحتاج سباك لتنظيف وفحص نظام السباكة.',
      location: {
        address: 'مصر الجديدة، القاهرة',
        coordinates: [30.0883, 31.3197] 
      },
      scheduledDate: '2024-11-15', 
      scheduledTime: '11:00',
      images: [],
      estimatedCost: 120,
      paymentMethod: 'cash',
      status: 'pending',
      createdAt: '2024-11-14T10:30:00', 
      customerId: 5
    },
    {  
      id: 7,
      category: 'electrician',
      service: 'تصليح تكييف',
      description: 'التكييف في الصالة توقف عن العمل فجأة. كان يعمل بشكل جيد ولكن الآن لا يعمل على الإطلاق. نحتاج كهربائي لمعرفة ما إذا كان يمكن إصلاحه أو يلزم استبداله.',
      location: {
        address: 'الدقي، الجيزة',
        coordinates: [30.0539, 31.2103]
      },
      scheduledDate: '2024-11-15',
      scheduledTime: '16:00',
      images: ['/api/placeholder/200/200'],
      estimatedCost: 220,
      paymentMethod: 'card',  
      status: 'accepted',
      createdAt: '2024-11-14T12:00:00', 
      customerId: 6,
      workerId: 2
    },
    {
      id: 8,
      category: 'plumber',  
      service: 'طوارئ',
      description: 'هناك تسرب كبير للمياه في المنزل! يبدو أن أحد الأنابيب الرئيسية انفجر. نحتاج سباك في حالة طوارئ فورًا لإيقاف التسرب وإصلاح المشكلة قبل أن يتضرر المنزل بأكمله.',
      location: {
        address: 'مدينة العبور، القاهرة', 
        coordinates: [30.1811, 31.6083]
      },
      scheduledDate: '2024-11-14',
      scheduledTime: '20:00', 
      images: ['/api/placeholder/200/200', '/api/placeholder/200/200', '/api/placeholder/200/200'],
      estimatedCost: 400,
      paymentMethod: 'cash',
      status: 'inProgress',
      createdAt: '2024-11-14T19:30:00',
      customerId: 7, 
      workerId: 3
    },
    {
      id: 9,
      category: 'electrician',
      service: 'تصليح أجهزة',
      description: 'الفرن الكهربائي لا يسخن بشكل صحيح. يبدأ التسخين ولكنه لا يصل أبدًا إلى درجة الحرارة المطلوبة. أحتاج كهربائي للتحقق من المشكلة وإصلاحها.',  
      location: {
        address: '6 أكتوبر، الجيزة',
        coordinates: [29.9511, 31.0083] 
      },
      scheduledDate: '2024-11-16',
      scheduledTime: '12:00',
      images: ['/api/placeholder/200/200'],
      estimatedCost: 180,
      paymentMethod: 'cash',
      status: 'draft',
      createdAt: '2024-11-14T16:00:00',
      customerId: 8
    },
    {
      id: 10,
      category: 'plumber',
      service: 'صيانة عامة',
      description: 'نود إجراء فحص وصيانة عامة لنظام السباكة في منزلنا. لم تكن هناك أي مشاكل كبيرة، لكننا نريد التأكد من أن كل شيء يعمل بشكل سليم ومنع أي مشكلات مستقبلية.',
      location: {
        address: 'الرحاب، القاهرة', 
        coordinates: [30.0611, 31.4917]
      },  
      scheduledDate: '2024-11-17',
      scheduledTime: '10:00',
      images: [],
      estimatedCost: 100,
      paymentMethod: 'card',
      status: 'pending',
      createdAt: '2024-11-14T18:00:00',
      customerId: 9  
    }
  ];

  readonly categories = [
    {
      id: 'electrician',
      name: 'كهربائي',
      icon: '⚡',
      services: [
        { id: 'general', name: 'صيانة عامة', basePrice: 150 },
        { id: 'ac', name: 'تصليح تكييف', basePrice: 200 },
        { id: 'appliances', name: 'تصليح أجهزة', basePrice: 180 }
      ]
    },
    {
      id: 'plumber',
      name: 'سباك',
      icon: '🔧',
      services: [
        { id: 'general', name: 'صيانة عامة', basePrice: 120 },
        { id: 'emergency', name: 'طوارئ', basePrice: 250 }
      ]
    }
  ];

  readonly statusConfig: Record<RequestStatus, { label: string; color: string; icon: string }> = {
    draft: { label: 'مسودة', color: 'gray', icon: 'draft' },
    pending: { label: 'قيد الانتظار', color: 'yellow', icon: 'clock' },
    accepted: { label: 'مقبول', color: 'blue', icon: 'check' },
    inProgress: { label: 'جاري التنفيذ', color: 'blue', icon: 'spinner' },
    completed: { label: 'مكتمل', color: 'green', icon: 'check-circle' },
    cancelled: { label: 'ملغي', color: 'red', icon: 'times-circle' }
  };

  readonly paymentMethods = [
    { id: 'cash' as const, name: 'نقدي', icon: 'money-bill' },
    { id: 'card' as const, name: 'بطاقة ائتمان', icon: 'credit-card' }
  ];

  constructor() {}

  // Request Management
  getCurrentRequest(): Observable<Partial<ServiceRequest>> {
    return this.currentRequest.asObservable();
  }

  updateCurrentRequest(request: Partial<ServiceRequest>): void {
    this.currentRequest.next({
      ...this.currentRequest.value,
      ...request
    });
  }

  getRequests(status?: RequestStatus): Observable<ServiceRequest[]> {
    let filteredRequests = this.mockRequests;
    if (status) {
      filteredRequests = this.mockRequests.filter(r => r.status === status);
    }
    return of(filteredRequests);
  }

  createRequest(request: ServiceRequest): Observable<ServiceRequest> {
    const newRequest = {
      ...request,
      id: this.mockRequests.length + 1,
      createdAt: new Date().toISOString(),
      status: 'pending' as RequestStatus
    };
    return of(newRequest);
  }

  // Utility Methods
  calculateEstimatedCost(category: string, service: string): number {
    const categoryData = this.categories.find(c => c.id === category);
    const serviceData = categoryData?.services.find(s => s.id === service);
    const basePrice = serviceData?.basePrice || 0;
    return Math.round(basePrice + (Math.random() * 50)); 
  }

  getAvailableTimeSlots(date: string): string[] {
    return [
      '09:00', '10:00', '11:00', '12:00', '13:00', 
      '14:00', '15:00', '16:00', '17:00', '18:00'
    ];
  }

  validateStep(step: number, data: Partial<ServiceRequest>): boolean {
    const validations = {
      1: () => Boolean(data.category && data.service),
      2: () => Boolean(data.description!.length >= 20),
      3: () => Boolean(data.location && data.scheduledDate && data.scheduledTime),
      4: () => Boolean(data.paymentMethod)
    };
    return validations[step as keyof typeof validations]?.() || false;
  }

  getStatusDetails(status: RequestStatus) {
    return this.statusConfig[status];
  }

  processPayment(payment: PaymentDetails): Observable<boolean> {
    return of(true);
  }

  getServicesByCategory(categoryId: string) {
    return this.categories.find(c => c.id === categoryId)?.services || [];
  }
}