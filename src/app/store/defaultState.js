import {
    IMPERIAL_STEPS,
    METRIC_STEPS
} from '../constants';

const defaultState = {
    session: {
        name: '',
        token: ''
    },
    workspace: {
        container: {
            default: {
                widgets: ['visualizer']
            },
            primary: {
                show: true,
                widgets: [
                    'connection', 'console', 'grbl', 'webcam'
                ]
            },
            secondary: {
                show: true,
                widgets: [
                    'axes', 'gcode', 'macro', 'probe', 'spindle', 'laser'
                ]
            }
        },
        machineProfile: {
            id: null
        }
    },
    widgets: {
        axes: {
            minimized: false,
            axes: ['x', 'y', 'z'],
            jog: {
                keypad: false,
                imperial: {
                    step: IMPERIAL_STEPS.indexOf(1), // Defaults to 1 inch
                    distances: []
                },
                metric: {
                    step: METRIC_STEPS.indexOf(1), // Defaults to 1 mm
                    distances: []
                }
            },
            mdi: {
                disabled: false
            },
            shuttle: {
                feedrateMin: 500,
                feedrateMax: 2000,
                hertz: 10,
                overshoot: 1
            }
        },
        connection: {
            minimized: false,
            controller: {
                type: 'Grbl' // Grbl
            },
            port: '', // will be deprecated in v2
            baudrate: 115200, // will be deprecated in v2
            connection: {
                type: 'serial',
                serial: {
                    // Hardware flow control (RTS/CTS)
                    rtscts: false
                }
            },
            autoReconnect: true
        },
        console: {
            minimized: false
        },
        custom: {
            disabled: true,
            minimized: false,
            title: '',
            url: ''
        },
        gcode: {
            minimized: false
        },
        grbl: {
            minimized: false,
            panel: {
                queueReports: {
                    expanded: true
                },
                statusReports: {
                    expanded: true
                },
                modalGroups: {
                    expanded: true
                }
            }
        },
        laser: {
            minimized: false,
            panel: {
                laserTest: {
                    expanded: true
                }
            },
            test: {
                power: 0,
                duration: 0,
                maxS: 1000
            }
        },
        macro: {
            minimized: false
        },
        probe: {
            minimized: false,
            probeCommand: 'G38.2',
            useTLO: false,
            probeDepth: 10,
            probeFeedrate: 20,
            touchPlateHeight: 10,
            retractionDistance: 4
        },
        spindle: {
            minimized: false,
            speed: 1000
        },
        visualizer: {
            minimized: false,

            // 3D View
            disabled: false,
            projection: 'orthographic', // 'perspective' or 'orthographic'
            cameraMode: 'pan', // 'pan' or 'rotate'
            gcode: {
                displayName: true
            },
            objects: {
                limits: {
                    visible: true
                },
                coordinateSystem: {
                    visible: true
                },
                gridLineNumbers: {
                    visible: true
                },
                cuttingTool: {
                    visible: true
                }
            }
        },
        webcam: {
            disabled: true,
            minimized: false,

            // local - Use a built-in camera or a connected webcam
            // mjpeg - M-JPEG stream over HTTP
            mediaSource: 'local',

            // The device id
            deviceId: '',

            // The URL field is required for the M-JPEG stream
            url: '',

            geometry: {
                scale: 1.0,
                rotation: 0, // 0: 0, 1: 90, 2: 180, 3: 270
                flipHorizontally: false,
                flipVertically: false
            },
            crosshair: false,
            muted: false
        }
    }
};

export default defaultState;