import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import NavBar from '../NavBar.vue'
import { createRouter, createWebHistory } from 'vue-router'

describe('NavBar', () => {
  it('renders navigation links', async () => {
    // Setup Router for testing
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        { path: '/', component: { template: 'Home' } },
        { path: '/about', component: { template: 'About' } },
        { path: '/projects', component: { template: 'Projects' } }
      ]
    })

    const wrapper = mount(NavBar, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.text()).toContain('Maulana.')
    expect(wrapper.text()).toContain('About')
    expect(wrapper.text()).toContain('Projects')
    expect(wrapper.text()).toContain('Contact')
  })
})
