import { setBackgroundColor } from './setBackgroundColor'

test('test', (opacity = 0.5) => {
    expect(setBackgroundColor('ffffff', opacity)).toBe('rgba(255,255,255,0.5)')
    expect(setBackgroundColor('ffffff', 1)).toBe('rgba(255,255,255,1)')
    expect(setBackgroundColor('fff')).toBe('rgba(255,255,255,0.5)')
    expect(setBackgroundColor('000000')).toBe('rgba(0,0,0,0.5)')
    expect(setBackgroundColor('000')).toBe('rgba(0,0,0,0.5)')
    expect(setBackgroundColor('4286f4')).toBe('rgba(66,134,244,0.5)')
})
