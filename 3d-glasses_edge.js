/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.1.0.min.js",
            "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/utils/Draggable.min.js",
            "http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'spaceR',
                            type: 'group',
                            rect: ['-270px', '167px', '1540', '173', 'auto', 'auto'],
                            opacity: '1',
                            userClass: "perspective",
                            c: [
                            {
                                id: 'glasses_r',
                                symbolName: 'glasses_r',
                                type: 'rect',
                                rect: ['0px', '-13px', 'undefined', 'undefined', 'auto', 'auto'],
                                opacity: '1',
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                            }]
                        },
                        {
                            id: 'spaceB',
                            type: 'group',
                            rect: ['-270px', '167px', '1540', '173', 'auto', 'auto'],
                            opacity: '0.30078125',
                            userClass: "perspective",
                            c: [
                            {
                                id: 'glasses_b',
                                symbolName: 'glasses_b',
                                type: 'rect',
                                rect: ['0px', '-13px', 'undefined', 'undefined', 'auto', 'auto'],
                                opacity: '1',
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                            }]
                        },
                        {
                            id: 'slider',
                            symbolName: 'slider',
                            type: 'rect',
                            rect: ['373px', '354px', '200', '32', 'auto', 'auto']
                        },
                        {
                            id: 'Title',
                            type: 'text',
                            rect: ['262px', '10px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​HTML5/CSS3 rotating anaglyph 3D glasses</p>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,0.60)", "100", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Button_co',
                            symbolName: 'button',
                            type: 'rect',
                            rect: ['587px', '354px', 'undefined', 'undefined', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1000px', '400px', 'auto', 'auto'],
                            sizeRange: ['0px','1000px','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid3",
                            "left",
                            0,
                            0,
                            "linear",
                            "${glasses_b}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid23",
                            "top",
                            0,
                            0,
                            "linear",
                            "${glasses_b}",
                            '-13px',
                            '-13px'
                        ],
                        [
                            "eid5",
                            "left",
                            0,
                            0,
                            "linear",
                            "${glasses_r}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid22",
                            "top",
                            0,
                            0,
                            "linear",
                            "${glasses_r}",
                            '-13px',
                            '-13px'
                        ]
                    ]
                }
            },
            "glasses_r": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'right_b',
                            rect: ['0', '0', '506px', '172px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'imgs/right_b.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'left_b',
                            rect: ['1034px', '0px', '506px', '172px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'imgs/left_b.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'front_b',
                            rect: ['506px', '0', '528px', '166px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'imgs/front_b.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1540px', '173px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "glasses_b": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['1034px', '0px', '506px', '172px', 'auto', 'auto'],
                            id: 'left',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'imgs/glasses1.png', '0px', '0px']
                        },
                        {
                            rect: ['506px', '0px', '528px', '166px', 'auto', 'auto'],
                            id: 'front',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'imgs/glasses2.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '506px', '172px', 'auto', 'auto'],
                            id: 'right',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'imgs/right.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1540px', '173px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "cube_b": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '98px', '98px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'front',
                            stroke: [1, 'rgba(255,0,0,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,0.15)']
                        },
                        {
                            rect: ['0px', '-100px', '98px', '98px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'top',
                            stroke: [1, 'rgba(255,0,0,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,0.15)']
                        },
                        {
                            rect: ['0px', '100px', '98px', '98px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'bottom',
                            stroke: [1, 'rgba(255,0,0,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,0.15)']
                        },
                        {
                            rect: ['-100px', '0px', '98px', '98px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'right',
                            stroke: [1, 'rgba(255,0,0,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,0.15)']
                        },
                        {
                            rect: ['100px', '0px', '98px', '98px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'left',
                            stroke: [1, 'rgba(255,0,0,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,0.15)']
                        },
                        {
                            rect: ['0px', '0px', '98px', '98px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'back',
                            stroke: [1, 'rgba(255,0,0,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,0.15)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '100px', '100px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "cube_r": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '98px', '98px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'front_r',
                            stroke: [1, 'rgba(0,255,255,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(0,255,255,0.15)']
                        },
                        {
                            rect: ['0px', '-100px', '98px', '98px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'top_r',
                            stroke: [1, 'rgba(0,255,255,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(0,255,255,0.15)']
                        },
                        {
                            rect: ['0px', '100px', '98px', '98px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'bottom_r',
                            stroke: [1, 'rgba(0,255,255,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(0,255,255,0.15)']
                        },
                        {
                            rect: ['-100px', '0px', '98px', '98px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'right_r',
                            stroke: [1, 'rgba(0,255,255,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(0,255,255,0.15)']
                        },
                        {
                            rect: ['100px', '0px', '98px', '98px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'left_r',
                            stroke: [1, 'rgba(0,255,255,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(0,255,255,0.15)']
                        },
                        {
                            rect: ['0px', '0px', '98px', '98px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'back_r',
                            stroke: [1, 'rgba(0,255,255,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(0,255,255,0.15)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '100px', '100px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "slider": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '19px', '200px', '1px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0.60)']
                        },
                        {
                            rect: ['80px', '0px', null, null, 'auto', 'auto'],
                            id: 'Button',
                            symbolName: 'button',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '200px', '40px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "button": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '38px', '38px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [1, 'rgba(0,0,0,0.60)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [10, 'px'], 'rgba(0,0,0,0.60)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            align: 'center',
                            id: 'Text',
                            textStyle: ['', '', '16px', '', ''],
                            text: '<p style=\"margin: 0px; text-align: center;\"><br></p>',
                            rect: ['-1px', '12px', '40px', '17px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'visible',
                            rect: [null, null, '40px', '40px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("3d-glasses_edgeActions.js");
})("EDGE-725599650");
