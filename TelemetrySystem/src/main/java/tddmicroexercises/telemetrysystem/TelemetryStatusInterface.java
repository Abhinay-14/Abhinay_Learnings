package tddmicroexercises.telemetrysystem;

public interface TelemetryStatusInterface {
    boolean getOnlineStatus();

    void disconnect();

    void connect(String telemetryServerConnectionString);
}
