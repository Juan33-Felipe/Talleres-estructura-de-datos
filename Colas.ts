class Queue<T> {
    private elements: T[] = [];

    enqueue(element: T): void {
        this.elements.push(element);
    }

    dequeue(): T | null {
        return this.elements.shift() || null;
    }

    isEmpty(): boolean {
        return this.elements.length === 0;
    }
}

class Prescription {
    private patientName: string;
    private medicineName: string;

    constructor(patientName: string, medicineName: string) {
        this.patientName = patientName;
        this.medicineName = medicineName;
    }

    getPatientName(): string {
        return this.patientName;
    }

    getMedicineName(): string {
        return this.medicineName;
    }
}

class PharmacyService {
    private queue: Queue<Prescription>;

    constructor(queue: Queue<Prescription>) {
        this.queue = queue;
    }

    processAll(): void {
        while (!this.queue.isEmpty()) {
            const prescription = this.queue.dequeue();
            if (prescription) {
                console.log(
                    `Dispensing ${prescription.getMedicineName()} to patient: ${prescription.getPatientName()}`
                );
            }
        }
        console.log("All prescriptions have been processed.");
    }
}


const pharmacyQueue = new Queue<Prescription>();

pharmacyQueue.enqueue(new Prescription("Kevin Stiven", "Ibuprofen"));
pharmacyQueue.enqueue(new Prescription("Luis Diaz", "Paracetamol"));
pharmacyQueue.enqueue(new Prescription("James Rodriguez", "Amoxicillin"));

const pharmacy = new PharmacyService(pharmacyQueue);
pharmacy.processAll();