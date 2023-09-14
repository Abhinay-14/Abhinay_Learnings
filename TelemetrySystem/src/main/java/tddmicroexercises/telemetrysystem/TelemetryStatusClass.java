package tddmicroexercises.telemetrysystem;

import java.util.Random;

public class TelemetryStatusClass implements TelemetryStatusInterface{

    private boolean onlineStatus;

    private final Random connectionEventsSimulator = new Random(42);
    @Override
    public boolean getOnlineStatus() {
        return onlineStatus;
    }

    @Override
    public void disconnect() {
        onlineStatus = false;
    }

    @Override
    public void connect(String telemetryServerConnectionString) {
        if (telemetryServerConnectionString == null || "".equals(telemetryServerConnectionString))
        {
            throw new IllegalArgumentException();
        }

        // simulate the operation on a real modem
        boolean success = connectionEventsSimulator.nextInt(10) <= 8;

        onlineStatus = success;
    }
}
