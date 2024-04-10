// Interfaz común para todos los servicios de almacenamiento en la nube
class CloudStorage {
    storeFile(name) {
        throw new Error("Este método debe ser implementado");
    }

    getFile(name) {
        throw new Error("Este método debe ser implementado");
    }
}

// Implementación de AWS S3
class AWSS3 extends CloudStorage {
    storeFile(name) {
        return `Almacenando ${name} en AWS S3`;
    }

    getFile(name) {
        return `Recuperando ${name} de AWS S3`;
    }
}

// Implementación de Google Cloud Storage
class GoogleCloudStorage extends CloudStorage {
    storeFile(name) {
        return `Almacenando ${name} en Google Cloud Storage`;
    }

    getFile(name) {
        return `Recuperando ${name} de Google Cloud Storage`;
    }
}

// Fábrica para crear objetos de almacenamiento en la nube
class CloudStorageFactory {
    static getStorage(service) {
        switch (service) {
            case 'aws':
                return new AWSS3();
            case 'google':
                return new GoogleCloudStorage();
            default:
                throw new Error('No se reconoce el servicio de almacenamiento en la nube');
        }
    }
}

// Uso del patrón Factory
let storageService = CloudStorageFactory.getStorage('aws');
console.log(storageService.storeFile('mi_archivo.txt'));
console.log(storageService.getFile('mi_archivo.txt'));

// Cambiar a Google Cloud Storage es fácil
storageService = CloudStorageFactory.getStorage('google');
console.log(storageService.storeFile('mi_archivo.txt'));
console.log(storageService.getFile('mi_archivo.txt'));
