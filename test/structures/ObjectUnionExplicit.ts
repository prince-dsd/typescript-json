import { RandomGenerator } from "../internal/RandomGenerator";
import { Spoiler } from "../internal/Spoiler";

export type ObjectUnionExplicit = Array<
    | ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>
    | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>
    | ObjectUnionExplicit.Discriminator<
          "triangle",
          ObjectUnionExplicit.ITriangle
      >
    | ObjectUnionExplicit.Discriminator<
          "rectangle",
          ObjectUnionExplicit.IRectangle
      >
    | ObjectUnionExplicit.Discriminator<
          "polyline",
          ObjectUnionExplicit.IPolyline
      >
    | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>
    | ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>
>;
export namespace ObjectUnionExplicit {
    export type Discriminator<Type extends string, T extends object> = T & {
        type: Type;
    };
    export interface IPoint {
        x: number;
        y: number;
    }
    export interface ILine {
        p1: IPoint;
        p2: IPoint;
    }
    export interface ITriangle {
        p1: IPoint;
        p2: IPoint;
        p3: IPoint;
    }
    export interface IRectangle {
        p1: IPoint;
        p2: IPoint;
        p3: IPoint;
        p4: IPoint;
    }
    export interface IPolyline {
        points: IPoint[];
    }
    export interface IPolygon {
        outer: IPolyline;
        inner: IPolyline[];
    }
    export interface ICircle {
        centroid: IPoint;
        radius: number;
    }

    export function generate(): ObjectUnionExplicit {
        const point = (): IPoint => ({
            x: RandomGenerator.integer(),
            y: RandomGenerator.integer(),
        });
        return [
            {
                type: "point",
                ...point(),
            },
            {
                type: "line",
                p1: point(),
                p2: point(),
            },
            {
                type: "triangle",
                p1: point(),
                p2: point(),
                p3: point(),
            },
            {
                type: "rectangle",
                p1: point(),
                p2: point(),
                p3: point(),
                p4: point(),
            },
            {
                type: "polyline",
                points: RandomGenerator.array(() => point(), 10),
            },
            {
                type: "polygon",
                outer: {
                    points: RandomGenerator.array(() => point(), 10),
                },
                inner: [
                    {
                        points: RandomGenerator.array(() => point(), 10),
                    },
                    {
                        points: RandomGenerator.array(() => point(), 10),
                    },
                ],
            },
            {
                type: "circle",
                centroid: point(),
                radius: RandomGenerator.integer(),
            },
        ];
    }

    export const SPOILERS: Spoiler<ObjectUnionExplicit>[] = [
        (input) => {
            // point
            input[0].type = "line";
            return ["$input[0].p1", "$input[0].p2"];
        },
        (input) => {
            // line
            input[1].type = "circle";
            return ["$input[1].centroid", "$input[1].radius"];
        },
        (input) => {
            // triangle
            input[2].type = "polyline";
            return ["$input[2].points"];
        },
        (input) => {
            // rectangle
            input[3].type = "point";
            return ["$input[3].x", "$input[3].y"];
        },
        (input) => {
            // polyline
            input[4].type = "line";
            return ["$input[4].p1", "$input[4].p2"];
        },
        (input) => {
            // polygon
            input[5].type = "point";
            return ["$input[5].x", "$input[5].y"];
        },
        (input) => {
            // circle
            input[6].type = "polyline";
            return ["$input[6].points"];
        },
    ];
}
