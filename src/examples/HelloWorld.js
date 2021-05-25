const HelloWorld = (ISC) => {
  ISC.IButton.create({
    title: "Hello",
    icon: "icons/16/world.png",
    iconOrientation: "right",
    click: "isc.say('Hello world!')",
  });
};
export default HelloWorld;
