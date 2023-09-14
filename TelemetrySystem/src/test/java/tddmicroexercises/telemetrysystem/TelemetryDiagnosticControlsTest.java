package tddmicroexercises.telemetrysystem;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;


public class TelemetryDiagnosticControlsTest
{
    private TelemetryDiagnosticControls telemetryDiagnosticControls;

    @Mock
    private TelemetryStatusClass telemetryStatusClass;

    @Mock
    private TelemetryClient telemetryClient;

    @BeforeEach
    public void setUp() {
        telemetryClient = mock(TelemetryClient.class);
        telemetryStatusClass = mock(TelemetryStatusClass.class);
        telemetryDiagnosticControls = new TelemetryDiagnosticControls(telemetryClient, telemetryStatusClass);
    }
	@Test
    public void CheckTransmission_should_send_a_diagnostic_message_and_receive_a_status_message_response() throws Exception {
        when(telemetryStatusClass.getOnlineStatus()).thenReturn(true);
        when(telemetryClient.receive()).thenReturn("AT#UD");

        telemetryDiagnosticControls.checkTransmission();

        assertEquals("AT#UD", telemetryDiagnosticControls.getDiagnosticInfo());
    }

}
