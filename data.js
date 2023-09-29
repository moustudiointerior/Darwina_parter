var APP_DATA = {
  "scenes": [
    {
      "id": "0-korytarz1",
      "name": "korytarz1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5301209794403672,
          "pitch": 0.3451453762070287,
          "rotation": 0,
          "target": "1-tv1"
        },
        {
          "yaw": -1.7858778090041625,
          "pitch": 0.10357997588318568,
          "rotation": 0,
          "target": "9-parter-10"
        },
        {
          "yaw": 1.569102429122485,
          "pitch": 0.10723637435261502,
          "rotation": 0,
          "target": "4-st"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-tv1",
      "name": "tv1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.4266291511418405,
          "pitch": 0.1966175409873152,
          "rotation": 0,
          "target": "2-fotel-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-fotel-1",
      "name": "fotel 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5210640084864426,
          "pitch": 0.12608111024806945,
          "rotation": 0,
          "target": "3-hutawka"
        },
        {
          "yaw": 1.2842338318191668,
          "pitch": 0.12302036441755604,
          "rotation": 0,
          "target": "0-korytarz1"
        },
        {
          "yaw": 0.6679571945737859,
          "pitch": 0.10162786237037125,
          "rotation": 0,
          "target": "6-kuchnia-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-hutawka",
      "name": "huśtawka",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3392125070313874,
          "pitch": 0.21034582810316493,
          "rotation": 0,
          "target": "4-st"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-st",
      "name": "stół",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 700,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.028690100426166154,
          "pitch": 0.039018549178619466,
          "rotation": 0,
          "target": "5-za-stoem"
        },
        {
          "yaw": 1.168459958611015,
          "pitch": 0.011762796466904035,
          "rotation": 0,
          "target": "2-fotel-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-za-stoem",
      "name": "za stołem",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 700,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7949766984539401,
          "pitch": 0.16357825662456982,
          "rotation": 0,
          "target": "6-kuchnia-1"
        },
        {
          "yaw": 3.120203033530272,
          "pitch": 0.2076628361339523,
          "rotation": 0,
          "target": "4-st"
        },
        {
          "yaw": 1.381919686535518,
          "pitch": 0.11377850724301908,
          "rotation": 0,
          "target": "2-fotel-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-kuchnia-1",
      "name": "kuchnia 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 700,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3183444109730278,
          "pitch": 0.26048619736714684,
          "rotation": 0,
          "target": "7-kuchnia-2"
        },
        {
          "yaw": 2.612177616107636,
          "pitch": 0.20641654957996636,
          "rotation": 0,
          "target": "5-za-stoem"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-kuchnia-2",
      "name": "kuchnia 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 700,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0093154427880604,
          "pitch": 0.18311702470719737,
          "rotation": 0,
          "target": "8-kuchnia-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-kuchnia-3",
      "name": "kuchnia 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 700,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4776950919559422,
          "pitch": 0.23374080875245262,
          "rotation": 0,
          "target": "0-korytarz1"
        },
        {
          "yaw": 0.2897069250327675,
          "pitch": 0.0620949198488141,
          "rotation": 0,
          "target": "5-za-stoem"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-parter-10",
      "name": "PARTER 10",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 700,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.19171005125600082,
          "pitch": 0.10263401419321916,
          "rotation": 0,
          "target": "8-kuchnia-3"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
