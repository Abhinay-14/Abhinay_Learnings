package com.christmaslights;

public class TurnOff implements ActionTypeInterface{
    @Override
    public void performAction(LightGrid grid, int startX, int startY, int endX, int endY) {
        int[][] lights = grid.getGrid();
        for (int x = startX; x <= endX; x++) {
            for (int y = startY; y <= endY; y++) {
                lights[x][y] = 0;                        //For Brightness replace with Math.max(0, lights[x][y]-1);
            }
        }
    }
}
