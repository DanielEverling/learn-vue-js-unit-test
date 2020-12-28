import { shallowMount } from '@vue/test-utils'
import Email from '@/components/Email'

describe('Email', () => {

    const build = () => {
        const wrapper = shallowMount(Email)

        return {
            wrapper
        }
    }

    it('renders the component', () => {
        // arrange
        const { wrapper } = build()
        const inputEmail = wrapper.find('input[name="email"]') 
        const spanError = wrapper.find('span.error')

        // assert
        expect(wrapper.html()).toMatchSnapshot()      
        expect(inputEmail.exists()).toBe(true)
        expect(spanError.exists()).toBe(false)
    })

    it('should validate valid email and not render span with error message', () => {
        // arrange
        const { wrapper } = build()
        const inputEmail = wrapper.find('input[name="email"]') 
        inputEmail.setValue('valid.email@test.com')

        const spanError = wrapper.find('span.error')
        
        // assert
        expect(wrapper.html()).toMatchSnapshot()
        expect(inputEmail.exists()).toBe(true)
        expect(spanError.exists()).toBe(false)
    })

    it('should validate not valid email and render span with error message', async () => {
        // arrange
        const { wrapper } = build()
        const inputEmail = wrapper.find('input[name="email"]') 
        await inputEmail.setValue('invalid.email')
        
        const spanError = wrapper.find('span.error')
        
        console.log(inputEmail)
        console.log(spanError)

        // assert
        expect(wrapper.html()).toMatchSnapshot()
        expect(inputEmail.exists()).toBe(true)
        expect(spanError.exists()).toBe(true)
    })

})