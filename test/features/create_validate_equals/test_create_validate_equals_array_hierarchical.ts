import TSON from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_validate_equals } from "./../validate_equals/_test_validate_equals";

export const test_create_validate_equals_array_hierarchical =
    _test_validate_equals(
        "hierarchical array",
        ArrayHierarchical.generate,
        TSON.createValidateEquals<ArrayHierarchical>(),
    );
