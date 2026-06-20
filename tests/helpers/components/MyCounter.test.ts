import { describe, expect, test } from 'vitest';
import MyCounter from '@/components/MyCounter.vue'
import { mount } from '@vue/test-utils'

describe("<MyCounter />", () => {

    test('should match snapshot', () => {

        const wrapper = mount(MyCounter, {
            props: {
                value: 5
            }
        });

        expect(wrapper.html()).toMatchSnapshot()

    });

    test('render correctly', () => {

        const wrapper = mount(MyCounter, {
            props: {
                value: 5
            }
        });

        expect(wrapper.find('h3').text()).contain(5)


    });

});