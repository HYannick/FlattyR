import { shallowMount, mount } from "@vue/test-utils";
import Header from "@/components/Header.vue";

describe("Header.vue", () => {
  it("renders good logo text when passed", () => {
    const msg = "Flatty";
    const wrapper = mount(Header);
    const logo = wrapper.find('h1');
    expect(logo.text()).toMatch(msg);
  });
});
