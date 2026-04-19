import { ColorMode, DisplayDevice, Orientation } from '@epaperjs/core';

export async function getDevice(
    _deviceType: string,
    orientation?: Orientation,
    colorMode?: ColorMode
): Promise<DisplayDevice> {
    return await getRpi7in5V2(orientation, colorMode);
}

async function getRpi7in5V2(orientation?: Orientation, colorMode?: ColorMode): Promise<DisplayDevice> {
    try {
        const { Rpi7In5V2 } = await import('@epaperjs/rpi-7in5-v2');
        return new Rpi7In5V2(orientation, colorMode);
    } catch (e) {
        throw new Error('Failed to import @epaperjs/rpi-7in5-v2, make sure it is installed');
    }
}
