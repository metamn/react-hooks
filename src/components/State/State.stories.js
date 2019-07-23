import React from "react";
import { storiesOf } from "@storybook/react";

import State from "./State";
import description from "./State.md";

storiesOf("State", module).add("Overview", () => <State />, {
  notes: { markdown: description }
});
