using System;

namespace AOC2020
{
    public class Day3 : IDay
    {
        public void Run()
        {
            var input = this.ReadInput();
            Solve(input);
        }

        public void Test()
        {
            var input = new[]{
                "..##.......",
                "#...#...#..",
                ".#....#..#.",
                "..#.#...#.#",
                ".#...##..#.",
                "..#.##.....",
                ".#.#.#....#",
                ".#........#",
                "#.##...#...",
                "#...##....#",
                ".#..#...#.#"};

            Solve(input);
        }

        private static void Solve(string[] input)
        {
            long trees = 1;
            var slopes = new[]{(1,1),(3,1),(5,1),(7,1), (1,2)};

            foreach (var s in slopes)
            {
                var treesForSlope = CountTreesForSlope(input, s.Item1, s.Item2);
                Console.Write($"{treesForSlope} ");
                trees *= treesForSlope;
                Console.WriteLine($" {trees}");
            }
            Console.WriteLine();

            Console.WriteLine($"Found {trees} trees");
        }

        private static int CountTreesForSlope(string[] input, int x, int y)
        {
            var r = 0;
            var c = 0;
            var w = input[0].Length;

            var trees = 0;
            while (true)
            {
                c += x;
                r += y;
                if (c >= w) c -= w;
                if (r >= input.Length) break;
                if (input[r][c] == '#') trees++;
            }

            return trees;
        }
    }

}