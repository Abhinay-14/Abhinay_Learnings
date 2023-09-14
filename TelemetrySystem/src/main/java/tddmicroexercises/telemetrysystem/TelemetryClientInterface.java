package tddmicroexercises.telemetrysystem;

public interface TelemetryClientInterface {
    void send(String msg);
    String receive();
}
