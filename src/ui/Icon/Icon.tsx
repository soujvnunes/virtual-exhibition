import { createIcon, IconRoot } from "utils";

const mapIcons = {
  A11y: "M12,8c-1.6543,0-3-1.3457-3-3s1.3457-3,3-3,3,1.3457,3,3-1.3457,3-3,3Zm0-4c-.55176,0-1,.44873-1,1s.44824,1,1,1,1-.44873,1-1-.44824-1-1-1Zm1,4H4c0,1.10457,.89543,2,2,2h3v12h0c1.10457,0,2-.89543,2-2v-5h2v5c0,1.10457,.89543,2,2,2h0V10h3c1.10457,0,2-.89543,2-2h-7Z",
  Exit: "M12,20H4c-1.10457,0-2-.89543-2-2V6c0-1.10457,.89543-2,2-2H12c0,1.10457-.89543,2-2,2H4v12h6c1.10457,0,2,.89543,2,2h0Zm9.70734-8.70672l-.00061-.00061-4.99969-4.99969c-.3905-.3905-1.02356-.3905-1.41406,0-.3905,.39044-.3905,1.02356,0,1.41406l3.29297,3.29297H9c-.55231,0-1,.44769-1,1,0,.55225,.44769,1,1,1h9.58594l-3.29297,3.29297c-.3905,.39044-.3905,1.02356,0,1.41406,.3905,.39044,1.02356,.39044,1.41406,0l4.99969-4.99969,.00061-.00061c.18079-.18097,.29266-.43079,.29266-.70673,0-.276-.11188-.52582-.29266-.70673Z",
};

type Icons = keyof typeof mapIcons;

export default Object.assign(
  IconRoot,
  Object.keys(mapIcons).reduce((acc, _cur) => {
    const cur = _cur as Icons;

    return {
      ...acc,
      [cur]: createIcon(cur, mapIcons[cur]),
    };
  }, {} as Record<Icons, typeof IconRoot>),
);
