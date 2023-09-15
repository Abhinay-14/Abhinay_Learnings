package com.christmaslights;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class ActionController {
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
                case "turn on" -> actionType = new TurnOn();
                case "turn off" -> actionType = new TurnOff();
                case "toggle" -> actionType = new Toggle();
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
