export interface IDataObserver {
        ReceiveNotification<T>(Message: T): void;
    }