import TSON from "../../../../src";
import { ArrayUnion } from "../../../structures/ArrayUnion";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_array_union = _test_application_ajv(
    "union arrray",
    TSON.application<[ArrayUnion], "ajv">(),
    {
        schemas: [
            {
                type: "array",
                items: {
                    oneOf: [
                        {
                            type: "array",
                            items: {
                                type: "string",
                                nullable: false,
                            },
                            nullable: false,
                        },
                        {
                            type: "array",
                            items: {
                                type: "boolean",
                                nullable: false,
                            },
                            nullable: false,
                        },
                        {
                            type: "array",
                            items: {
                                type: "number",
                                nullable: false,
                            },
                            nullable: false,
                        },
                    ],
                },
                nullable: false,
            },
        ],
        components: {
            schemas: {},
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
