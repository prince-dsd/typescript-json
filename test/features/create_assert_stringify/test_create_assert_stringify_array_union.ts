import TSON from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_assert_stringify } from "./../assert_stringify/_test_assert_stringify";

export const test_create_assert_stringify_array_union = _test_assert_stringify(
    "union arrray",
    ArrayUnion.generate,
    TSON.createAssertStringify<ArrayUnion>(),
    ArrayUnion.SPOILERS,
);
