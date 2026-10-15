warning: in the working copy of 'astro.config.mjs', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'package-lock.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'package.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'tsconfig.json', LF will be replaced by CRLF the next time Git touches it
[1mdiff --git a/astro.config.mjs b/astro.config.mjs[m
[1mindex e762ba5..53e49de 100644[m
[1m--- a/astro.config.mjs[m
[1m+++ b/astro.config.mjs[m
[36m@@ -1,5 +1,9 @@[m
 // @ts-check[m
 import { defineConfig } from 'astro/config';[m
 [m
[32m+[m[32mimport react from '@astrojs/react';[m
[32m+[m
 // https://astro.build/config[m
[31m-export default defineConfig({});[m
[32m+[m[32mexport default defineConfig({[m
[32m+[m[32m  integrations: [react()][m
[32m+[m[32m});[m
\ No newline at end of file[m
[1mdiff --git a/package-lock.json b/package-lock.json[m
[1mindex 102a6f0..64e226c 100644[m
[1m--- a/package-lock.json[m
[1m+++ b/package-lock.json[m
[36m@@ -8,7 +8,12 @@[m
       "name": "software-engineer-portfolio",[m
       "version": "0.0.1",[m
       "dependencies": {[m
[31m-        "astro": "^7.4.0"[m
[32m+[m[32m        "@astrojs/react": "^7.1.0",[m
[32m+[m[32m        "@types/react": "^19.3.0",[m
[32m+[m[32m        "@types/react-dom": "^19.3.0",[m
[32m+[m[32m        "astro": "^7.4.0",[m
[32m+[m[32m        "react": "^19.3.1",[m
[32m+[m[32m        "react-dom": "^19.3.1"[m
       },[m
       "engines": {[m
         "node": ">=22.22.0"[m
[36m@@ -261,6 +266,34 @@[m
         "node": ">=22.22.0"[m
       }[m
     },[m
[32m+[m[32m    "node_modules/@astrojs/react": {[m
[32m+[m[32m      "version": "7.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@astrojs/react/-/react-7.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-yTUgpMNiySRKBpTGNWN8rmeGAJ2TIZunk7CmqHYFhtd2MgkDtYCrn9ErKhjNCm9NHiYfD0TIYWq53l9/X/YzcQ==",[m
[32m+[m[32m      "license": "MIT",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@astrojs/internal-helpers": "0.13.0",[m
[32m+[m[32m        "@vitejs/plugin-react": "^6.1.2",[m
[32m+[m[32m        "devalue": "^6.0.2",[m
[32m+[m[32m        "ultrahtml": "^1.7.0",[m
[32m+[m[32m        "vite": "^8.3.4"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=22.22.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "peerDependencies": {[m
[32m+[m[32m        "@types/react": "^17.0.50 || ^18.0.21 || ^19.0.0",[m
[32m+[m[32m        "@types/react-dom": "^17.0.17 || ^18.0.6 || ^19.0.0",[m
[32m+[m[32m        "oxc-transform-react": "^0.145.0",[m
[32m+[m[32m        "react": "^17.0.2 || ^18.0.0 || ^19.0.0",[m
[32m+[m[32m        "react-dom": "^17.0.2 || ^18.0.0 || ^19.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "peerDependenciesMeta": {[m
[32m+[m[32m        "oxc-transform-react": {[m
[32m+[m[32m          "optional": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "node_modules/@astrojs/telemetry": {[m
       "version": "3.4.0",[m
       "resolved": "https://registry.npmjs.org/@astrojs/telemetry/-/telemetry-3.4.0.tgz",[m
[36m@@ -1565,6 +1598,24 @@[m
         "@types/unist": "*"[m
       }[m
     },[m
[32m+[m[32m    "node_modules/@types/react": {[m
[32m+[m[32m      "version": "19.3.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@types/react/-/react-19.3.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-N0rFCuH9YoxG9/m61l9MfpJKfmLOVU0em7ipIz6TRgSSkvReLB9vL85GB+yr8Bs5leqpvg96JSwF4ZS1s4viQg==",[m
[32m+[m[32m      "license": "MIT",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "csstype": "^3.2.2"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@types/react-dom": {[m
[32m+[m[32m      "version": "19.3.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-19.3.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-ZI7bU42mZXXKHn/qNLEw2IrbiINU7X5+vfgdixBHkCNpYWXjKgfQ/P+uyGb5CjOLB9UcnTeg3rylQtV2hym44Q==",[m
[32m+[m[32m      "license": "MIT",[m
[32m+[m[32m      "peerDependencies": {[m
[32m+[m[32m        "@types/react": "^19.3.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "node_modules/@types/unist": {[m
       "version": "3.0.3",[m
       "resolved": "https://registry.npmjs.org/@types/unist/-/unist-3.0.3.tgz",[m
[36m@@ -1577,6 +1628,35 @@[m
       "integrity": "sha512-1mEZtMKPM09vDmQt5y7YvmN2+DFTP7Tg0EWXdic8/C6VRnpb33e4ghisCIE3WZjsE2N8mf+QV1Zqh7ZFYLWInQ==",[m
       "license": "ISC"[m
     },[m
[32m+[m[32m    "node_modules/@vitejs/plugin-react": {[m
[32m+[m[32m      "version": "6.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@vitejs/plugin-react/-/plugin-react-6.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-fhJNGUdscQa4HkI0xFxwonWyhnVReCPDbXI7FH7jmzpnVCrFQI7PRrhWecO263610vOrs9tr2Y4xcf8uAdFxbw==",[m
[32m+[m[32m      "license": "MIT",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@rolldown/pluginutils": "^1.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": "^20.19.0 || >=22.12.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "peerDependencies": {[m
[32m+[m[32m        "@rolldown/plugin-babel": "^0.1.7 || ^0.2.0",[m
[32m+[m[32m        "babel-plugin-react-compiler": "^1.0.0",[m
[32m+[m[32m        "oxc-transform-react": "^0.152.0",[m
[32m+[m[32m        "vite": "^8.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "peerDependenciesMeta": {[m
[32m+[m[32m        "@rolldown/plugin-babel": {[m
[32m+[m[32m          "optional": true[m
[32m+[m[32m        },[m
[32m+[m[32m        "babel-plugin-react-compiler": {[m
[32m+[m[32m          "optional": true[m
[32m+[m[32m        },[m
[32m+[m[32m        "oxc-transform-react": {[m
[32m+[m[32m          "optional": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "node_modules/am-i-vibing": {[m
       "version": "0.5.0",[m
       "resolved": "https://registry.npmjs.org/am-i-vibing/-/am-i-vibing-0.5.0.tgz",[m
[36m@@ -1930,6 +2010,12 @@[m
       "integrity": "sha512-aylIc7Z9y4yzHYAJNuESG3hfhC+0Ibp/MAMiaOZgNv4pmEdFyfZhhhny4MNiAfWdBQ1RQ2mfDWmM1x8SvGyp8g==",[m
       "license": "CC0-1.0"[m
     },[m
[32m+[m[32m    "node_modules/csstype": {[m
[32m+[m[32m      "version": "3.2.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.2.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==",[m
[32m+[m[32m      "license": "MIT"[m
[32m+[m[32m    },[m
     "node_modules/defu": {[m
       "version": "6.1.7",[m
       "resolved": "https://registry.npmjs.org/defu/-/defu-6.1.7.tgz",[m
[36m@@ -2978,6 +3064,27 @@[m
       "integrity": "sha512-b484I/7b8rDEdSDKckSSBA8knMpcdsXudlE/LNL639wFoHKwLbEkQFZHWEYwDC0wa0FKUcCY+GAF73Z7wxNVFA==",[m
       "license": "MIT"[m
     },[m
[32m+[m[32m    "node_modules/react": {[m
[32m+[m[32m      "version": "19.3.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/react/-/react-19.3.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-QNhWdt7nrgVWWQG58QuGsAR3jv3Hbe4mb4vz7w2csnHavciZJgda1CPNaldF6eVxv90ud3jUXpKlHL69gO38yw==",[m
[32m+[m[32m      "license": "MIT",[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/react-dom": {[m
[32m+[m[32m      "version": "19.3.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-19.3.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-Y0bARz53lhEC1NMCASs0/j+faB/zqt3R8hpvg1e8+61ZVJ4UL0UdC4cBbXfZMcIuhrfgeILTLe+ZeBCavQPtKQ==",[m
[32m+[m[32m      "license": "MIT",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "scheduler": "^0.28.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "peerDependencies": {[m
[32m+[m[32m        "react": "^19.3.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "node_modules/readdirp": {[m
       "version": "5.1.1",[m
       "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-5.1.1.tgz",[m
[36m@@ -3104,6 +3211,12 @@[m
         "node": ">=11.0.0"[m
       }[m
     },[m
[32m+[m[32m    "node_modules/scheduler": {[m
[32m+[m[32m      "version": "0.28.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.28.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-juorfCmIkIw8tT+p5BXSm6PJjQF/ycEYmKyzURCIt/RaZIhL+PulbQ9Yu2z1HdOJDdqDTlxA1+xKBmHXJsczAw==",[m
[32m+[m[32m      "license": "MIT"[m
[32m+[m[32m    },[m
     "node_modules/semver": {[m
       "version": "7.8.5",[m
       "resolved": "https://registry.npmjs.org/semver/-/semver-7.8.5.tgz",[m
[1mdiff --git a/package.json b/package.json[m
[1mindex 0acc8b4..10d49ff 100644[m
[1m--- a/package.json[m
[1m+++ b/package.json[m
[36m@@ -12,6 +12,11 @@[m
     "astro": "astro"[m
   },[m
   "dependencies": {[m
[31m-    "astro": "^7.4.0"[m
[32m+[m[32m    "@astrojs/react": "^7.1.0",[m
[32m+[m[32m    "@types/react": "^19.3.0",[m
[32m+[m[32m    "@types/react-dom": "^19.3.0",[m
[32m+[m[32m    "astro": "^7.4.0",[m
[32m+[m[32m    "react": "^19.3.1",[m
[32m+[m[32m    "react-dom": "^19.3.1"[m
   }[m
[31m-}[m
\ No newline at end of file[m
[32m+[m[32m}[m
[1mdiff --git a/tsconfig.json b/tsconfig.json[m
[1mindex 8bf91d3..69c1600 100644[m
[1m--- a/tsconfig.json[m
[1m+++ b/tsconfig.json[m
[36m@@ -1,5 +1,14 @@[m
 {[m
   "extends": "astro/tsconfigs/strict",[m
[31m-  "include": [".astro/types.d.ts", "**/*"],[m
[31m-  "exclude": ["dist"][m
[31m-}[m
[32m+[m[32m  "include": [[m
[32m+[m[32m    ".astro/types.d.ts",[m
[32m+[m[32m    "**/*"[m
[32m+[m[32m  ],[m
[32m+[m[32m  "exclude": [[m
[32m+[m[32m    "dist"[m
[32m+[m[32m  ],[m
[32m+[m[32m  "compilerOptions": {[m
[32m+[m[32m    "jsx": "react-jsx",[m
[32m+[m[32m    "jsxImportSource": "react"[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
\ No newline at end of file[m
