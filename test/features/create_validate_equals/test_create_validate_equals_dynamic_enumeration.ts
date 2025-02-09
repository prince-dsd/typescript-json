import TSON from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_validate_equals } from "./../validate_equals/_test_validate_equals";

export const test_create_validate_equals_dynamic_enumeration =
    _test_validate_equals(
        "dynamic enumeration",
        DynamicEnumeration.generate,
        TSON.createValidateEquals<DynamicEnumeration>(),
    );
