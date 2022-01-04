import HelloWorld from "../components/HelloWorld.vue";

export default {
  title: "Hello",
  components: { HelloWorld },
};

const Template = (args) => ({
  props: Object.keys(args),
  components: { HelloWorld },
  setup() {
    return { args };
  },
  template: `
    <HelloWorld v-bind="args" />
  `,
});

export const Hello = Template.bind({});
Hello.args = {};
