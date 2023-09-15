package com.christmaslights;

import java.util.List;

public class Main {
    public static void main(String[] args) {
        int gridSize = 1000;
        LightGrid lightGrid = new LightGrid(gridSize);
        ActionController controller = new ActionController();

        List<String> instructions = List.of(
                "turn on 887,9 through 959,629",
                "turn on 454,398 through 844,448",
                "turn on 887,9 through 959,629",
                "turn on 454,398 through 844,448",
                "turn off 539,243 through 559,965",
                "turn off 370,819 through 676,868",
                "turn off 145,40 through 370,997",
                "turn off 301,3 through 808,453",
                "turn on 351,678 through 951,908",
                "toggle 720,196 through 897,994",
                "toggle 831,394 through 904,860"
        );

        for (String instruction : instructions) {
            controller.executeInstruction(lightGrid, instruction);
        }

        int litCount = lightGrid.countLightsOn(lightGrid);
        System.out.println("Number of lights lit: " + litCount);
    }
}