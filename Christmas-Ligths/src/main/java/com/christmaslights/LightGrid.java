package com.christmaslights;

public class LightGrid {
    private int[][] grid;

    public LightGrid(int size) {
        grid = new int[size][size];
    }

    public int[][] getGrid() {
        return grid;
    }

    public int countLightsOn(LightGrid grid) {
        int[][] lights = grid.getGrid();
        int count = 0;
        for (int[] row : lights) {
            for (int value : row) {
                count += value;
            }
        }
        return count;
    }
}
