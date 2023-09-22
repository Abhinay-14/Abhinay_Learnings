package com.christmaslights;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class ActionController {

    private static final ActionTypeInterface TURN_ON = new TurnOn();
    private static final ActionTypeInterface TURN_OFF = new TurnOff();
    private static final ActionTypeInterface TOGGLE = new Toggle();
    public void executeInstruction(LightGrid grid, String instruction) {
        Pattern pattern = Pattern.compile("(turn on|turn off|toggle) (\\d+),(\\d+) through (\\d+),(\\d+)");
        Matcher matcher = pattern.matcher(instruction);

        if (matcher.matches()) {
            String action = matcher.group(1);
            int startX = Integer.parseInt(matcher.group(2));
            int startY = Integer.parseInt(matcher.group(3));
            int endX = Integer.parseInt(matcher.group(4));
            int endY = Integer.parseInt(matcher.group(5));

            ActionTypeInterface actionType = null;

            switch (action) {
                case "turn on" -> actionType = TURN_ON;
                case "turn off" -> actionType = TURN_OFF;
                case "toggle" -> actionType = TOGGLE;
                default -> System.out.println("Invalid Instruction");
            }
            if (actionType != null) {
                actionType.performAction(grid, startX, startY, endX, endY);
            }
        } else {
            System.out.println("Invalid instruction: " + instruction);
        }

    }
}
