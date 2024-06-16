const a = {
  username: "enigma0_1713507898",
  options: [
    {
      type: "Skin",
      id: "skin19",
    },
    {
      type: "Trail",
      id: "trail77",
    },
    {
      type: "Shader",
      id: "shader101",
    },
    {
      type: "Pet",
      id: "pet135",
    },
    {
      type: "Trail",
      id: "trail67",
    },
    {
      type: "Pet",
      id: "pet131",
    },
    {
      type: "Pet",
      id: "pet25",
    },
    {
      type: "Trail",
      id: "trail40",
    },
    {
      type: "Shader",
      id: "shader112",
    },
    {
      type: "Shader",
      id: "shader95",
    },
    {
      type: "Shader",
      id: "shader99",
    },
    {
      type: "Shader",
      id: "shader72",
    },
  ],
};

export async function postOptions() {
  const res = await fetch(
    "http://terra-staging.letsterra.com/mvp5/chooseFromSpinwheelOptions",
    { method: "post", body: JSON.stringify(a) },
  );

  return res;
}
