const formatVolumeIconPath = require('../assets/scripts/main');

// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1,2)).toBe(3);
// });

describe('format volume icon', () => {
    test('is level 3', () => {
        expect(formatVolumeIconPath(67)).toBe('./assets/media/icons/volume-level-3.svg')
    });
    
    test('is level 2', () => {
        expect(formatVolumeIconPath(34)).toBe('./assets/media/icons/volume-level-2.svg');
    });

    test('is level 1', () => {
        expect(formatVolumeIconPath(1)).toBe('./assets/media/icons/volume-level-1.svg');
    });
    
    test('is level 0', () => {
        expect(formatVolumeIconPath(0)).toBe('./assets/media/icons/volume-level-0.svg');
    });
})